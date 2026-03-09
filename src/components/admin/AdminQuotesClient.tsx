"use client";

import { FormEvent, useMemo, useState } from "react";

import { MATERIAL_PRICING, type MaterialType, computeQuoteValues } from "@/lib/quote-pricing";

type FormState = {
  clientName: string;
  projectName: string;
  quantity: string;
  weightKg: string;
  material: MaterialType;
};

export type QuoteHistoryItem = {
  quoteId: string;
  generatedAt: string;
  clientName: string;
  material: MaterialType;
  totalPrice: number;
  fileName: string;
};

type AdminQuotesClientProps = {
  initialHistory: QuoteHistoryItem[];
};

const initialState: FormState = {
  clientName: "",
  projectName: "",
  quantity: "",
  weightKg: "",
  material: "ABS",
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function AdminQuotesClient({ initialHistory }: AdminQuotesClientProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [driveLink, setDriveLink] = useState<string | null>(null);
  const [history, setHistory] = useState<QuoteHistoryItem[]>(initialHistory);

  const computed = useMemo(() => {
    const quantity = Number(form.quantity);
    if (Number.isNaN(quantity) || quantity <= 0) {
      return {
        unitPrice: MATERIAL_PRICING[form.material],
        totalPrice: 0,
      };
    }
    return computeQuoteValues({ material: form.material, quantity });
  }, [form.material, form.quantity]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  async function refreshHistory() {
    const response = await fetch("/api/admin/quotes", { method: "GET", cache: "no-store" });
    if (!response.ok) {
      throw new Error("Nao foi possivel carregar o historico.");
    }
    const payload = (await response.json()) as QuoteHistoryItem[];
    setHistory(payload);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus(null);
    setDriveLink(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: form.clientName,
          projectName: form.projectName,
          quantity: Number(form.quantity),
          weightKg: Number(form.weightKg),
          material: form.material,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Falha ao gerar o orcamento.");
      }

      const blob = await response.blob();
      const fileNameMatch = response.headers
        .get("content-disposition")
        ?.match(/filename=\"?([^\";]+)\"?/i);
      const fileName = fileNameMatch?.[1] ?? "orcamento.pdf";

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);

      const driveViewLink = response.headers.get("x-drive-view-link");
      if (driveViewLink) {
        setDriveLink(driveViewLink);
      }

      await refreshHistory();
      setStatus("PDF gerado com sucesso e historico atualizado.");
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Erro inesperado.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex w-[min(1100px,92vw)] flex-col gap-8 py-16">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Area Administrativa</p>
        <h1 className="text-4xl font-semibold text-text">Gerador de Orcamentos</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          Orcamento automatico por material, peso e quantidade de pecas com download em PDF e historico para
          consulta futura.
        </p>
      </header>

      <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Nome do cliente
              <input
                required
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                value={form.clientName}
                onChange={(event) => updateField("clientName", event.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm">
              Nome do projeto
              <input
                required
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                value={form.projectName}
                onChange={(event) => updateField("projectName", event.target.value)}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm">
              Quantidade de pecas
              <input
                required
                type="number"
                min="1"
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                value={form.quantity}
                onChange={(event) => updateField("quantity", event.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm">
              Peso total (kg)
              <input
                required
                type="number"
                step="0.01"
                min="0.01"
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                value={form.weightKg}
                onChange={(event) => updateField("weightKg", event.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm">
              Material
              <select
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--accent-line)]"
                value={form.material}
                onChange={(event) => updateField("material", event.target.value as MaterialType)}
              >
                {Object.keys(MATERIAL_PRICING).map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 rounded-2xl border border-border bg-background p-4 text-sm sm:grid-cols-2">
            <p>
              Valor por peca: <strong>{currencyFormatter.format(computed.unitPrice)}</strong>
            </p>
            <p>
              Valor total: <strong>{currencyFormatter.format(computed.totalPrice)}</strong>
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold tracking-[0.08em] text-text uppercase shadow-[0_8px_22px_rgba(191,148,83,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Gerando..." : "Gerar PDF"}
            </button>

            <button
              type="button"
              onClick={() => setForm(initialState)}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase"
            >
              Limpar
            </button>

            <button
              type="button"
              onClick={() => void refreshHistory()}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase"
            >
              Atualizar historico
            </button>
          </div>

          {status ? <p className="text-sm text-emerald-600">{status}</p> : null}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {driveLink ? (
            <p className="text-sm text-muted">
              Arquivo enviado ao Drive:{" "}
              <a href={driveLink} target="_blank" rel="noreferrer" className="text-accent underline">
                abrir no Google Drive
              </a>
            </p>
          ) : null}
        </form>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-text">Historico de Orcamentos</h2>
          <span className="text-xs uppercase tracking-[0.12em] text-muted">{history.length} registros</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="px-3 py-2 font-semibold">Cliente</th>
                <th className="px-3 py-2 font-semibold">Data</th>
                <th className="px-3 py-2 font-semibold">Material</th>
                <th className="px-3 py-2 font-semibold">Valor total</th>
                <th className="px-3 py-2 font-semibold">PDF</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.quoteId} className="border-b border-border/70">
                  <td className="px-3 py-3">{item.clientName}</td>
                  <td className="px-3 py-3">{new Date(item.generatedAt).toLocaleDateString("pt-BR")}</td>
                  <td className="px-3 py-3">{item.material}</td>
                  <td className="px-3 py-3">{currencyFormatter.format(item.totalPrice)}</td>
                  <td className="px-3 py-3">
                    <a
                      href={`/api/admin/quotes/${item.quoteId}/pdf`}
                      className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]"
                    >
                      Baixar
                    </a>
                  </td>
                </tr>
              ))}
              {history.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-center text-muted">
                    Nenhum orcamento encontrado.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
