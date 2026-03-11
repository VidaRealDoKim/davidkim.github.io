import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { getDefaultProjectCatalog, type ManagedProjectRecord } from "@/lib/project-catalog";

const ROOT_DIR = process.cwd();
const STORAGE_DIR = path.join(ROOT_DIR, "storage", "projects");
const INDEX_PATH = path.join(STORAGE_DIR, "index.json");

async function ensureStorageReady() {
  await mkdir(STORAGE_DIR, { recursive: true });
}

async function readIndex(): Promise<ManagedProjectRecord[]> {
  await ensureStorageReady();

  try {
    const raw = await readFile(INDEX_PATH, "utf-8");
    const parsed = JSON.parse(raw) as ManagedProjectRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeIndex(projects: ManagedProjectRecord[]) {
  await ensureStorageReady();
  await writeFile(INDEX_PATH, `${JSON.stringify(projects, null, 2)}\n`, "utf-8");
}

function mergeProject(base: ManagedProjectRecord, override?: ManagedProjectRecord): ManagedProjectRecord {
  if (!override) {
    return base;
  }

  return {
    ...base,
    ...override,
    media: {
      ...base.media,
      ...override.media,
      gallery: override.media?.gallery ?? base.media.gallery,
    },
    pt: {
      ...base.pt,
      ...override.pt,
    },
    en: {
      ...base.en,
      ...override.en,
    },
  };
}

export async function listManagedProjects(): Promise<ManagedProjectRecord[]> {
  const defaults = getDefaultProjectCatalog();
  const overrides = await readIndex();

  return defaults.map((project) => mergeProject(project, overrides.find((item) => item.slug === project.slug)));
}

export async function getManagedProjectBySlug(slug: string): Promise<ManagedProjectRecord | null> {
  const projects = await listManagedProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function saveManagedProject(project: ManagedProjectRecord): Promise<ManagedProjectRecord> {
  const overrides = await readIndex();
  const nextOverrides = [project, ...overrides.filter((item) => item.slug !== project.slug)];
  await writeIndex(nextOverrides);
  return project;
}