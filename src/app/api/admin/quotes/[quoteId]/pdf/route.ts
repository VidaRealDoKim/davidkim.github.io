import { readFile } from "node:fs/promises";

import { NextResponse } from "next/server";

import { findQuoteRecord, getQuotePdfPath } from "@/lib/quote-storage";

export const runtime = "nodejs";

type Context = {
  params: Promise<{ quoteId: string }>;
};

export async function GET(_: Request, context: Context) {
  const { quoteId } = await context.params;
  const record = await findQuoteRecord(quoteId);

  if (!record) {
    return NextResponse.json({ error: "Orcamento nao encontrado." }, { status: 404 });
  }

  try {
    const file = await readFile(getQuotePdfPath(record.fileName));
    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=\"${record.fileName}\"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Arquivo PDF nao encontrado." }, { status: 404 });
  }
}
