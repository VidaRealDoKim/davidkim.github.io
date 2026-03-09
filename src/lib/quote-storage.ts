import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { MaterialType } from "@/lib/quote-pricing";

export type StoredQuote = {
  quoteId: string;
  fileName: string;
  generatedAt: string;
  clientName: string;
  projectName: string;
  material: MaterialType;
  quantity: number;
  weightKg: number;
  unitPrice: number;
  totalPrice: number;
  driveFileId?: string;
  driveViewLink?: string;
};

const ROOT_DIR = process.cwd();
const STORAGE_DIR = path.join(ROOT_DIR, "storage", "quotes");
const INDEX_PATH = path.join(STORAGE_DIR, "index.json");

async function ensureStorageReady() {
  await mkdir(STORAGE_DIR, { recursive: true });
}

async function readIndex(): Promise<StoredQuote[]> {
  await ensureStorageReady();

  try {
    const raw = await readFile(INDEX_PATH, "utf-8");
    const parsed = JSON.parse(raw) as StoredQuote[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch {
    return [];
  }
}

async function writeIndex(quotes: StoredQuote[]) {
  await ensureStorageReady();
  await writeFile(INDEX_PATH, `${JSON.stringify(quotes, null, 2)}\n`, "utf-8");
}

export async function saveQuoteRecord(record: StoredQuote, pdfBytes: Uint8Array) {
  const quotes = await readIndex();
  const nextQuotes = [record, ...quotes.filter((item) => item.quoteId !== record.quoteId)];

  await writeFile(path.join(STORAGE_DIR, record.fileName), Buffer.from(pdfBytes));
  await writeIndex(nextQuotes);
}

export async function listQuoteRecords(): Promise<StoredQuote[]> {
  const quotes = await readIndex();
  return quotes.sort(
    (a, b) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
  );
}

export async function findQuoteRecord(quoteId: string): Promise<StoredQuote | null> {
  const quotes = await readIndex();
  return quotes.find((item) => item.quoteId === quoteId) ?? null;
}

export function getQuotePdfPath(fileName: string): string {
  return path.join(STORAGE_DIR, fileName);
}
