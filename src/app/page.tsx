import { NavBar } from "@/components/NavBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DesignProcessSection } from "@/components/sections/DesignProcessSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-24">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <AreasSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <DesignProcessSection />
        <SectionDivider />
        <TechnologiesSection />
        <SectionDivider />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
