import type { Metadata } from "next";
import { notFound } from "next/navigation";

import en from "../../../../locales/en.json";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const projects = en.projects.list;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | David Kim`,
    description: project.solution,
    openGraph: {
      title: `${project.name} | David Kim`,
      description: project.solution,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | David Kim`,
      description: project.solution,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!projects.some((project) => project.slug === slug)) {
    notFound();
  }

  return <ProjectDetailPage slug={slug} />;
}