import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";

export const metadata: Metadata = {
  title: "David Kim — UX/UI & Product Designer",
  description:
    "Portfolio of David Kim, a UX/UI and Product Designer based in San Francisco. Specialising in mobile apps, SaaS products, and design systems.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <AboutTeaser />
    </>
  );
}
