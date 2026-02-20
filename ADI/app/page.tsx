import type { Metadata } from "next";

import { CaseStudyCards } from "@/components/sections/case-study-cards";
import { CTASection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { HowWeWorkTimeline } from "@/components/sections/how-we-work-timeline";
import { PainPoints } from "@/components/sections/pain-points";
import { ResultsSection } from "@/components/sections/results-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedByMarquee } from "@/components/sections/trusted-by-marquee";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "ADI | Automatización, Data y Analítica Avanzada",
  description:
    "Convertimos procesos manuales en sistemas y tableros que trabajan solos. Consultoría en automatización, KPIs, Data Science y productos digitales.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedByMarquee />
      <ServicesOverview />
      <PainPoints />
      <HowWeWorkTimeline compact />
      <ResultsSection />
      <CaseStudyCards />
      <Testimonials />
      <CTASection />
    </>
  );
}
