import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export type QuotePayload = {
  clientName: string;
  projectName: string;
  quantity: number;
  weightKg: number;
  material: "ABS" | "POM" | "PC";
  unitPrice: number;
  totalPrice: number;
};

type BuildQuotePdfInput = {
  quoteId: string;
  companyBrand: string;
  companyLegalName: string;
  companyDocument: string;
  companyEmail: string;
  payload: QuotePayload;
  issuedAt: Date;
};

function brl(amount: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

export async function buildQuotePdf(input: BuildQuotePdfInput): Promise<Uint8Array> {
  const { quoteId, companyBrand, companyLegalName, companyDocument, companyEmail, payload, issuedAt } = input;

  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]);
  const width = page.getWidth();

  const titleFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const textFont = await pdf.embedFont(StandardFonts.Helvetica);

  let y = 790;
  const left = 52;
  const contentWidth = width - left * 2;

  page.drawRectangle({
    x: left,
    y: y - 8,
    width: 120,
    height: 34,
    color: rgb(0.14, 0.14, 0.14),
  });
  page.drawText("SOLV3D", {
    x: left + 18,
    y,
    size: 16,
    font: titleFont,
    color: rgb(1, 1, 1),
  });

  y -= 48;
  page.drawText("PROPOSTA COMERCIAL", {
    x: left,
    y,
    size: 19,
    font: titleFont,
    color: rgb(0.12, 0.12, 0.12),
  });

  y -= 24;
  page.drawText(`Numero: ${quoteId}`, { x: left, y, size: 11, font: textFont });
  y -= 16;
  page.drawText(`Emissao: ${issuedAt.toLocaleDateString("pt-BR")}`, { x: left, y, size: 11, font: textFont });

  y -= 30;
  page.drawText(`Empresa: ${companyBrand}`, { x: left, y, size: 12, font: titleFont });
  y -= 16;
  page.drawText(companyLegalName, { x: left, y, size: 12, font: titleFont });
  y -= 16;
  page.drawText(`CNPJ: ${companyDocument}`, { x: left, y, size: 10, font: textFont });
  y -= 14;
  page.drawText(`Contato: ${companyEmail}`, { x: left, y, size: 10, font: textFont });

  y -= 24;
  page.drawText(`Cliente: ${payload.clientName}`, { x: left, y, size: 11, font: textFont });
  y -= 16;
  page.drawText(`Projeto: ${payload.projectName}`, { x: left, y, size: 11, font: textFont });

  y -= 22;
  page.drawRectangle({
    x: left,
    y: y - 6,
    width: contentWidth,
    height: 28,
    color: rgb(0.95, 0.95, 0.95),
  });
  page.drawText("Dados do Orcamento", {
    x: left + 10,
    y: y + 4,
    size: 11,
    font: titleFont,
    color: rgb(0.2, 0.2, 0.2),
  });

  y -= 26;

  const rows: Array<[string, string]> = [
    ["Quantidade de pecas", String(payload.quantity)],
    ["Peso total estimado", `${payload.weightKg.toLocaleString("pt-BR")} kg`],
    ["Material", payload.material],
    ["Valor por peca", brl(payload.unitPrice)],
    ["Valor total", brl(payload.totalPrice)],
  ];

  for (const [label, value] of rows) {
    page.drawRectangle({
      x: left,
      y: y - 5,
      width: 190,
      height: 22,
      color: rgb(0.97, 0.97, 0.97),
    });
    page.drawRectangle({
      x: left + 190,
      y: y - 5,
      width: contentWidth - 190,
      height: 22,
      color: rgb(1, 1, 1),
      borderColor: rgb(0.88, 0.88, 0.88),
      borderWidth: 0.6,
    });
    page.drawText(label, { x: left + 8, y: y + 3, size: 10, font: titleFont, color: rgb(0.18, 0.18, 0.18) });
    page.drawText(value, { x: left + 198, y: y + 3, size: 10, font: textFont, color: rgb(0.12, 0.12, 0.12) });
    y -= 24;
  }

  y -= 12;
  page.drawText("Prazo de producao e entrega: ate 15 dias uteis apos aprovacao.", {
    x: left,
    y,
    size: 10,
    font: titleFont,
    color: rgb(0.2, 0.2, 0.2),
  });

  page.drawText("Documento gerado automaticamente no painel administrativo.", {
    x: left,
    y: 34,
    size: 9,
    font: textFont,
    color: rgb(0.35, 0.35, 0.35),
  });

  return pdf.save();
}
