import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";
import { getProjectSlugs } from "@/lib/project-catalog";
import { getManagedProjectBySlug } from "@/lib/project-storage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getManagedProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.en.name} | David Kim`,
    description: project.en.summary,
    openGraph: {
      title: `${project.en.name} | David Kim`,
      description: project.en.summary,
      images: [{ url: project.media.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.en.name} | David Kim`,
      description: project.en.summary,
      images: [project.media.coverImage],
    },
  };
}

export default async function ProjectDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = await getManagedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}