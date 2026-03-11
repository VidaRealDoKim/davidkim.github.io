import { redirect } from "next/navigation";

import { AdminLoginClient } from "@/components/admin/AdminLoginClient";
import { isAdminAuthenticated, isAdminProtectionConfigured } from "@/lib/admin-auth";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return <AdminLoginClient protectionConfigured={isAdminProtectionConfigured()} />;
}