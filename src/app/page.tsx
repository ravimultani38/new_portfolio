
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <section id="contact" className="container mx-auto text-center py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}