"use client";

import { useEffect, useMemo, useState } from "react";

import type { ManagedProjectRecord } from "@/lib/project-catalog";

type AdminProjectsClientProps = {
  initialProjects: ManagedProjectRecord[];
};

function cloneProject(project: ManagedProjectRecord): ManagedProjectRecord {
  return {
    ...project,
    tags: [...project.tags],
    media: {
      ...project.media,
      gallery: [...project.media.gallery],
    },
    pt: { ...project.pt },
    en: { ...project.en },
  };
}

export function AdminProjectsClient({ initialProjects }: AdminProjectsClientProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedSlug, setSelectedSlug] = useState(initialProjects[0]?.slug ?? "");
  const [draft, setDraft] = useState<ManagedProjectRecord | null>(initialProjects[0] ? cloneProject(initialProjects[0]) : null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? null,
    [projects, selectedSlug]
  );

  useEffect(() => {
    if (selectedProject) {
      setDraft(cloneProject(selectedProject));
      setStatus(null);
      setError(null);
    }
  }, [selectedProject]);

  function updateLocalized(locale: "pt" | "en", field: keyof ManagedProjectRecord["pt"], value: string) {
    setDraft((current) => (current ? { ...current, [locale]: { ...current[locale], [field]: value } } : current));
  }

  function updateField(field: keyof ManagedProjectRecord, value: string) {
    setDraft((current) => (current ? { ...current, [field]: value } as ManagedProjectRecord : current));
  }

  function updateMedia(field: "coverImage" | "videoUrl", value: string) {
    setDraft((current) => (current ? { ...current, media: { ...current.media, [field]: value } } : current));
  }

  async function onSave() {
    if (!draft) {
      return;
    }

    setIsSaving(true);
    setStatus(null);
    setError(null);

    try {
      const response = await fetch(`/api/admin/projects/${draft.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(draft),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Falha ao salvar projeto.");
      }

      const saved = (await response.json()) as ManagedProjectRecord;
      setProjects((current) => current.map((project) => (project.slug === saved.slug ? saved : project)));
      setDraft(cloneProject(saved));
      setStatus("Projeto salvo com sucesso.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Erro inesperado.");
    } finally {
      setIsSaving(false);
    }
  }

  if (!draft) {
    return null;
  }

  return (
    <main className="mx-auto flex w-[min(1240px,94vw)] flex-col gap-8 py-16">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Area Administrativa</p>
        <h1 className="text-4xl font-semibold text-text">Gerenciar Projetos</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          Edite imagens, video, carrossel e os textos principais de cada projeto exibido no showroom publico.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-border bg-surface p-4 shadow-soft">
          <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Projetos</p>
          <div className="grid gap-2">
            {projects.map((project) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setSelectedSlug(project.slug)}
                className={`rounded-2xl px-4 py-3 text-left transition-all ${
                  selectedSlug === project.slug
                    ? "bg-background text-text shadow-soft"
                    : "text-muted hover:bg-background/80 hover:text-text"
                }`}
              >
                <p className="text-sm font-semibold">{project.pt.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em]">{project.slug}</p>
              </button>
            ))}
          </div>
        </aside>

        <div className="grid gap-6">
          <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-semibold text-text">Midia e Link</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm text-text">
                Imagem de capa
                <input
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.media.coverImage}
                  onChange={(event) => updateMedia("coverImage", event.target.value)}
                />
              </label>

              <label className="grid gap-2 text-sm text-text">
                URL do video (YouTube embed/watch, Vimeo ou MP4)
                <input
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.media.videoUrl}
                  onChange={(event) => updateMedia("videoUrl", event.target.value)}
                />
              </label>

              <label className="grid gap-2 text-sm text-text">
                Imagens do carrossel (uma URL por linha)
                <textarea
                  rows={6}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.media.gallery.join("\n")}
                  onChange={(event) =>
                    setDraft((current) =>
                      current
                        ? {
                            ...current,
                            media: {
                              ...current.media,
                              gallery: event.target.value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean),
                            },
                          }
                        : current
                    )
                  }
                />
              </label>

              <label className="grid gap-2 text-sm text-text">
                Link externo do projeto / case completo
                <input
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.caseStudyHref}
                  onChange={(event) => updateField("caseStudyHref", event.target.value)}
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-semibold text-text">Conteudo PT-BR</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm text-text">
                Titulo
                <input
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.pt.name}
                  onChange={(event) => updateLocalized("pt", "name", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Resumo
                <textarea
                  rows={3}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.pt.summary}
                  onChange={(event) => updateLocalized("pt", "summary", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Problema
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.pt.problem}
                  onChange={(event) => updateLocalized("pt", "problem", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Solucao
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.pt.solution}
                  onChange={(event) => updateLocalized("pt", "solution", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Resultado
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.pt.result}
                  onChange={(event) => updateLocalized("pt", "result", event.target.value)}
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl font-semibold text-text">Conteudo EN</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm text-text">
                Title
                <input
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.en.name}
                  onChange={(event) => updateLocalized("en", "name", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Summary
                <textarea
                  rows={3}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.en.summary}
                  onChange={(event) => updateLocalized("en", "summary", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Problem
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.en.problem}
                  onChange={(event) => updateLocalized("en", "problem", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Solution
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.en.solution}
                  onChange={(event) => updateLocalized("en", "solution", event.target.value)}
                />
              </label>
              <label className="grid gap-2 text-sm text-text">
                Result
                <textarea
                  rows={4}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                  value={draft.en.result}
                  onChange={(event) => updateLocalized("en", "result", event.target.value)}
                />
              </label>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => void onSave()}
              disabled={isSaving}
              className="rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-text shadow-[0_8px_22px_rgba(191,148,83,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Salvando..." : "Salvar projeto"}
            </button>
            {status ? <p className="text-sm text-emerald-600">{status}</p> : null}
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
          </div>
        </div>
      </section>
    </main>
  );
}