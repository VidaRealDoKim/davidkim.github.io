import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { isKvConfigured, kvGetJson, kvGetString, kvSetJson, kvSetString } from "@/lib/kv-store";
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
const KV_INDEX_KEY = "quotes:index";
const KV_PDF_KEY_PREFIX = "quotes:pdf:";

function shouldRequirePersistentStorage() {
  return process.env.VERCEL === "1";
}

function ensureWritableStorage() {
  if (shouldRequirePersistentStorage() && !isKvConfigured()) {
    throw new Error(
      "Armazenamento persistente nao configurado. Defina KV_REST_API_URL e KV_REST_API_TOKEN na Vercel."
    );
  }
}

async function ensureStorageReady() {
  await mkdir(STORAGE_DIR, { recursive: true });
}

async function readIndex(): Promise<StoredQuote[]> {
  if (isKvConfigured()) {
    const data = await kvGetJson<StoredQuote[]>(KV_INDEX_KEY);
    return Array.isArray(data) ? data : [];
  }

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
  if (isKvConfigured()) {
    await kvSetJson(KV_INDEX_KEY, quotes);
    return;
  }

  await ensureStorageReady();
  await writeFile(INDEX_PATH, `${JSON.stringify(quotes, null, 2)}\n`, "utf-8");
}

export async function saveQuoteRecord(record: StoredQuote, pdfBytes: Uint8Array) {
  ensureWritableStorage();
  const quotes = await readIndex();
  const nextQuotes = [record, ...quotes.filter((item) => item.quoteId !== record.quoteId)];

  if (isKvConfigured()) {
    await kvSetString(`${KV_PDF_KEY_PREFIX}${record.quoteId}`, Buffer.from(pdfBytes).toString("base64"));
  } else {
    await writeFile(path.join(STORAGE_DIR, record.fileName), Buffer.from(pdfBytes));
  }
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

export async function getQuotePdfBytes(record: StoredQuote): Promise<Uint8Array | null> {
  if (isKvConfigured()) {
    const base64 = await kvGetString(`${KV_PDF_KEY_PREFIX}${record.quoteId}`);
    if (!base64) {
      return null;
    }
    return Buffer.from(base64, "base64");
  }

  try {
    return await readFile(path.join(STORAGE_DIR, record.fileName));
  } catch {
    return null;
  }
}
