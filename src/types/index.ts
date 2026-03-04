export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string[];
  tags: string[];
  year: string;
  duration: string;
  role: string;
  client: string;
  accentColor: string;
  bgColor: string;
  featured: boolean;
  overview: string;
  challenge: string;
  process: string[];
  solution: string;
  results: string[];
  images: {
    hero: string;
    mockup?: string;
    screens?: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  email: string;
  location: string;
  available: boolean;
  social: {
    linkedin: string;
    dribbble: string;
    github: string;
    twitter: string;
  };
}
