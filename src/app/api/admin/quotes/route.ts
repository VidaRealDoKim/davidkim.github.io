import { NextRequest, NextResponse } from "next/server";

import { isGoogleDriveConfigured, uploadPdfToDrive } from "@/lib/google-drive";
import { isMaterialType, computeQuoteValues } from "@/lib/quote-pricing";
import { listQuoteRecords, saveQuoteRecord } from "@/lib/quote-storage";
import { buildQuotePdf, type QuotePayload } from "@/lib/quote-pdf";

export const runtime = "nodejs";

type QuoteRequestBody = {
  clientName: string;
  projectName: string;
  quantity: number;
  weightKg: number;
  material: string;
};

function sanitizeFileName(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 50);
}

function validatePayload(payload: Partial<QuoteRequestBody>): string | null {
  if (!payload.clientName?.trim()) return "Nome do cliente e obrigatorio.";
  if (!payload.projectName?.trim()) return "Nome do projeto e obrigatorio.";
  if (typeof payload.quantity !== "number" || Number.isNaN(payload.quantity) || payload.quantity <= 0)
    return "Quantidade invalida.";
  if (typeof payload.weightKg !== "number" || Number.isNaN(payload.weightKg) || payload.weightKg <= 0)
    return "Peso total invalido.";
  if (!payload.material || !isMaterialType(payload.material)) return "Material invalido.";
  return null;
}

export async function GET() {
  const history = await listQuoteRecords();
  return NextResponse.json(
    history.map((item) => ({
      quoteId: item.quoteId,
      generatedAt: item.generatedAt,
      clientName: item.clientName,
      material: item.material,
      totalPrice: item.totalPrice,
      fileName: item.fileName,
    }))
  );
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Partial<QuoteRequestBody>;
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const safeMaterial = payload.material as "ABS" | "POM" | "PC";
    const quantity = payload.quantity!;
    const weightKg = payload.weightKg!;
    const price = computeQuoteValues({ material: safeMaterial, quantity });

    const quotePayload: QuotePayload = {
      clientName: payload.clientName!.trim(),
      projectName: payload.projectName!.trim(),
      material: safeMaterial,
      quantity,
      weightKg,
      unitPrice: price.unitPrice,
      totalPrice: price.totalPrice,
    };

    const issuedAt = new Date();
    const quoteId = `ORC-${issuedAt.getFullYear()}${String(issuedAt.getMonth() + 1).padStart(2, "0")}${String(issuedAt.getDate()).padStart(2, "0")}-${Math.floor(Math.random() * 9000 + 1000)}`;

    const pdfBytes = await buildQuotePdf({
      quoteId,
      issuedAt,
      companyBrand: process.env.COMPANY_BRAND ?? "SOLV3D",
      companyLegalName: process.env.COMPANY_LEGAL_NAME ?? "SOLV3D Tecnologia LTDA",
      companyDocument: process.env.COMPANY_CNPJ ?? "64.851.851/0001-20",
      companyEmail: process.env.COMPANY_CONTACT_EMAIL ?? "contato@solv3d.com.br",
      payload: quotePayload,
    });

    const safeClient = sanitizeFileName(quotePayload.clientName) || "cliente";
    const safeProject = sanitizeFileName(quotePayload.projectName) || "projeto";
    const fileName = `${quoteId}-${safeClient}-${safeProject}.pdf`;

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=\"${fileName}\"`,
      "X-Quote-Id": quoteId,
    });

    let driveFileId: string | undefined;
    let driveViewLink: string | undefined;

    if (isGoogleDriveConfigured()) {
      const driveFile = await uploadPdfToDrive({
        fileName,
        pdfBytes,
      });

      driveFileId = driveFile.id;
      driveViewLink = driveFile.webViewLink ?? undefined;

      headers.set("X-Drive-File-Id", driveFile.id);
      if (driveFile.webViewLink) headers.set("X-Drive-View-Link", driveFile.webViewLink);
      if (driveFile.webContentLink) headers.set("X-Drive-Download-Link", driveFile.webContentLink);
    }

    await saveQuoteRecord(
      {
        quoteId,
        fileName,
        generatedAt: issuedAt.toISOString(),
        clientName: quotePayload.clientName,
        projectName: quotePayload.projectName,
        material: quotePayload.material,
        quantity: quotePayload.quantity,
        weightKg: quotePayload.weightKg,
        unitPrice: quotePayload.unitPrice,
        totalPrice: quotePayload.totalPrice,
        driveFileId,
        driveViewLink,
      },
      pdfBytes
    );

    return new NextResponse(Buffer.from(pdfBytes), { status: 200, headers });
  } catch (error) {
    console.error("Quote generation failed", error);
    return NextResponse.json(
      { error: "Nao foi possivel gerar o PDF do orcamento." },
      { status: 500 }
    );
  }
}
