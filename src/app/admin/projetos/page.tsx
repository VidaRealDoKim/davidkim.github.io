import { redirect } from "next/navigation";

import { AdminProjectsClient } from "@/components/admin/AdminProjectsClient";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listManagedProjects } from "@/lib/project-storage";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const projects = await listManagedProjects();
  return <AdminProjectsClient initialProjects={projects} />;
}