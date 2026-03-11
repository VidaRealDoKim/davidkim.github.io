import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "admin-session";

export function getAdminPassword(): string {
  return process.env.ADMIN_ACCESS_PASSWORD?.trim() ?? "";
}

export function isAdminProtectionConfigured(): boolean {
  return getAdminPassword().length > 0;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  if (!isAdminProtectionConfigured()) {
    return true;
  }

  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === getAdminPassword();
}