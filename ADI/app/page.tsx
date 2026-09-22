import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import {
  ProblemSection,
  TeamSection,
  ContinuitySection,
  CapabilitiesSection,
  BusinessSection,
  ModelSection,
  AISection,
  ExperienceSection,
} from "@/components/sections/office-story";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "ADI | Tu Data & AI Office",
  description:
    "Tu equipo externo de Datos e IA. Ingeniería, analítica, automatización y machine learning en una capacidad continua, integrada a tu negocio.",
  path: "/",
});
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <TeamSection />
      <ContinuitySection />
      <CapabilitiesSection />
      <BusinessSection />
      <ModelSection />
      <AISection />
      <ExperienceSection />
      <CTASection />
    </>
  );
}
