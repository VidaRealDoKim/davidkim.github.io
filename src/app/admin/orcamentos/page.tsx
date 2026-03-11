import { AdminQuotesClient, type QuoteHistoryItem } from "@/components/admin/AdminQuotesClient";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listQuoteRecords } from "@/lib/quote-storage";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminQuotesPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

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
