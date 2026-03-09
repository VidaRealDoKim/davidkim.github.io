import { AdminQuotesClient, type QuoteHistoryItem } from "@/components/admin/AdminQuotesClient";
import { listQuoteRecords } from "@/lib/quote-storage";

export const dynamic = "force-dynamic";

export default async function AdminQuotesPage() {
  const records = await listQuoteRecords();
  const initialHistory: QuoteHistoryItem[] = records.map((item) => ({
    quoteId: item.quoteId,
    generatedAt: item.generatedAt,
    clientName: item.clientName,
    material: item.material,
    totalPrice: item.totalPrice,
    fileName: item.fileName,
  }));

  return <AdminQuotesClient initialHistory={initialHistory} />;
}
