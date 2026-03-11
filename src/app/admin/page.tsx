import Link from "next/link";

import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminHomePage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto flex w-[min(980px,92vw)] flex-col gap-8 py-16">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Area Administrativa</p>
          <h1 className="text-4xl font-semibold text-text">Painel Admin</h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Escolha um modulo administrativo para gerenciar o sistema.
          </p>
        </div>
        <AdminLogoutButton />
      </header>

      <section className="grid gap-4 sm:grid-cols-1">
        <article className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-text">Projetos</h2>
          <p className="mt-2 text-sm text-muted">
            Edicao de capa, video, carrossel e conteudo detalhado dos projetos do showroom.
          </p>
          <Link
            href="/admin/projetos"
            className="mt-5 inline-flex rounded-full bg-accent-gradient px-5 py-2 text-sm font-semibold tracking-[0.08em] uppercase text-text"
          >
            Abrir modulo
          </Link>
        </article>
      </section>
    </main>
  );
}
