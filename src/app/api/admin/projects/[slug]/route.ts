import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getManagedProjectBySlug, saveManagedProject } from "@/lib/project-storage";
import type { ManagedProjectRecord } from "@/lib/project-catalog";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function PUT(request: Request, context: Context) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Nao autorizado." }, { status: 401 });
  }

  const { slug } = await context.params;
  const existing = await getManagedProjectBySlug(slug);

  if (!existing) {
    return NextResponse.json({ error: "Projeto nao encontrado." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as ManagedProjectRecord | null;

  if (!body || body.slug !== slug) {
    return NextResponse.json({ error: "Payload invalido." }, { status: 400 });
  }

  const normalized: ManagedProjectRecord = {
    ...body,
    media: {
      coverImage: body.media.coverImage.trim(),
      videoUrl: body.media.videoUrl.trim(),
      gallery: body.media.gallery.map((item) => item.trim()).filter(Boolean),
    },
    pt: {
      name: body.pt.name.trim(),
      summary: body.pt.summary.trim(),
      problem: body.pt.problem.trim(),
      solution: body.pt.solution.trim(),
      result: body.pt.result.trim(),
    },
    en: {
      name: body.en.name.trim(),
      summary: body.en.summary.trim(),
      problem: body.en.problem.trim(),
      solution: body.en.solution.trim(),
      result: body.en.result.trim(),
    },
  };

  const saved = await saveManagedProject(normalized);
  return NextResponse.json(saved);
}