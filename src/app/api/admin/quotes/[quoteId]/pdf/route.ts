import { NextResponse } from "next/server";

import { findQuoteRecord, getQuotePdfBytes } from "@/lib/quote-storage";

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

  const file = await getQuotePdfBytes(record);

  if (!file) {
    return NextResponse.json({ error: "Arquivo PDF nao encontrado." }, { status: 404 });
  }

  return new NextResponse(Buffer.from(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${record.fileName}"`,
    },
  });
}
