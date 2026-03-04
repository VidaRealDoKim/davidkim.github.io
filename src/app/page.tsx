import { NavBar } from "@/components/NavBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-24">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
