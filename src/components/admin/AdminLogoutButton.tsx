"use client";

import { useRouter } from "next/navigation";

export function AdminLogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => void onLogout()}
      className="rounded-full border border-border px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-text transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent-line)]"
    >
      Sair
    </button>
  );
}