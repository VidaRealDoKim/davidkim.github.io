"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type AdminLoginClientProps = {
  protectionConfigured: boolean;
};

export function AdminLoginClient({ protectionConfigured }: AdminLoginClientProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Falha ao acessar admin.");
      }

      router.push("/admin");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-[min(520px,92vw)] items-center py-16">
      <section className="w-full rounded-3xl border border-border bg-surface p-8 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Area Administrativa</p>
        <h1 className="mt-3 text-3xl font-semibold text-text">Acesso Restrito</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Entre com sua senha para acessar o painel e editar os projetos do portifolio.
        </p>

        {!protectionConfigured ? (
          <div className="mt-6 rounded-2xl border border-amber-400/40 bg-amber-100/40 p-4 text-sm text-text dark:bg-amber-500/10">
            `ADMIN_ACCESS_PASSWORD` nao esta configurada. O admin esta bloqueado ate essa variavel ser definida no ambiente.
          </div>
        ) : null}

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-2 text-sm text-text">
            Senha
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
            />
          </label>

          <button
            type="submit"
            disabled={!protectionConfigured || isSubmitting}
            className="rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-text shadow-[0_8px_22px_rgba(191,148,83,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      </section>
    </main>
  );
}