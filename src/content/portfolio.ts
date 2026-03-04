export type NavItem = {
  label: string;
  href: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyHref: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  location: "Blumenau, SC — Brasil",
  name: "David Kim",
  title: "UX/UI Designer",
};

export const aboutContent = {
  title: "About",
  heading: "Flutter Developer e UI/UX Designer com foco em produto digital.",
  imageSrc:
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Designer workspace",
  description:
    "Desenvolvo projetos que conectam design e tecnologia com foco em experiência, clareza e resultado. No GitHub, concentro trabalhos em Flutter, web e backend (TypeScript, Dart, Java, HTML/CSS). No Behance, publico projetos de Graphic Design, Branding e Social Media, com uso recorrente de Adobe Illustrator.",
};

export const projectsContent: ProjectItem[] = [
  {
    name: "davidkim.github.io",
    description:
      "Portfolio pessoal em Next.js com foco em UX/UI, arquitetura limpa e apresentação de projetos digitais.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    tags: ["TypeScript", "Next.js", "UX/UI"],
    caseStudyHref: "https://github.com/VidaRealDoKim/davidkim.github.io",
  },
  {
    name: "ProjetoIEQSede",
    description:
      "Projeto em Dart/Flutter com foco em desenvolvimento mobile e estruturação de funcionalidades orientadas ao usuário.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Dart", "Mobile"],
    caseStudyHref: "https://github.com/VidaRealDoKim/ProjetoIEQSede",
  },
  {
    name: "To-do-Backend",
    description:
      "Backend em Java desenvolvido em trilha prática da Rocketseat, com foco em fundamentos de API e organização de código.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "Backend", "API"],
    caseStudyHref: "https://github.com/VidaRealDoKim/To-do-Backend",
  },
  {
    name: "IBK Brasil",
    description:
      "Website bilíngue do Instituto Brasil Koréia, com foco em conteúdo institucional e presença digital.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML", "Website", "Visual Design"],
    caseStudyHref: "https://github.com/VidaRealDoKim/ibk-brasil",
  },
  {
    name: "Oversized - Maturity",
    description:
      "Projeto de identidade visual publicado no Behance, com ênfase em branding e direção gráfica.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/708312211565359.Y3JvcCw4MTAsNjM0LDAsMA.png",
    tags: ["Branding", "Graphic Design", "Illustrator"],
    caseStudyHref: "https://www.behance.net/gallery/211565359/Oversized-Maturity",
  },
  {
    name: "Aula 23 - Design com Vc - Promoção",
    description:
      "Peça para social media com foco em comunicação promocional e marketing visual.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1a01be211005521.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
    tags: ["Social Media", "Graphic Design", "Illustrator"],
    caseStudyHref:
      "https://www.behance.net/gallery/211005521/Aula-23-Design-com-Vc-Promocao",
  },
];

export const skillsContent = [
  "TypeScript",
  "Dart",
  "Java",
  "Next.js",
  "Flutter",
  "HTML/CSS",
  "Git e GitHub",
  "Vercel",
  "UX/UI Design",
  "Branding",
  "Visual Design",
  "Adobe Illustrator",
  "Social Media Design",
];

export const contactContent = {
  title: "Contact",
  heading: "Vamos construir algo incrível.",
  description:
    "Disponível para oportunidades e colaborações em UX/UI, produto digital e design visual.",
  email: "david8.escola@gmail.com",
  phone: "(47) 99629-5564",
  location: "Blumenau, SC",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidluiskim/" },
    { label: "GitHub", href: "https://github.com/VidaRealDoKim" },
    { label: "Behance", href: "https://www.behance.net/davidkim115" },
  ],
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} David Kim. All rights reserved.`,
  tagline: "Designed with focus, precision, and intent.",
};