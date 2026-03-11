import en from "../../locales/en.json";
import pt from "../../locales/pt.json";

export type ProjectLocaleContent = {
  name: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
};

export type ManagedProjectRecord = {
  slug: string;
  category: string;
  caseStudyHref: string;
  tags: string[];
  media: {
    coverImage: string;
    videoUrl: string;
    gallery: string[];
  };
  pt: ProjectLocaleContent;
  en: ProjectLocaleContent;
};

type LocaleProjectEntry = {
  slug: string;
  category: string;
  image: string;
  tags: string[];
  caseStudyHref: string;
  name: string;
  problem: string;
  solution: string;
  result: string;
};

const ptProjects = pt.projects.list as LocaleProjectEntry[];
const enProjects = en.projects.list as LocaleProjectEntry[];

export function getDefaultProjectCatalog(): ManagedProjectRecord[] {
  return enProjects.map((enProject) => {
    const ptProject = ptProjects.find((item) => item.slug === enProject.slug) ?? enProject;

    return {
      slug: enProject.slug,
      category: enProject.category,
      caseStudyHref: enProject.caseStudyHref,
      tags: enProject.tags,
      media: {
        coverImage: enProject.image,
        videoUrl: "",
        gallery: [enProject.image],
      },
      pt: {
        name: ptProject.name,
        summary: ptProject.solution,
        problem: ptProject.problem,
        solution: ptProject.solution,
        result: ptProject.result,
      },
      en: {
        name: enProject.name,
        summary: enProject.solution,
        problem: enProject.problem,
        solution: enProject.solution,
        result: enProject.result,
      },
    };
  });
}

export function getProjectSlugs(): string[] {
  return getDefaultProjectCatalog().map((project) => project.slug);
}