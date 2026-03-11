import { NextResponse } from "next/server";

import { ADMIN_SESSION_COOKIE, getAdminPassword, isAdminProtectionConfigured } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminProtectionConfigured()) {
    return NextResponse.json({ error: "Protecao de admin nao configurada." }, { status: 400 });
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim() ?? "";

  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "Senha invalida." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, password, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return response;
}