import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { EngagementModels } from "@/components/sections/engagement-models";
import { HowWeWorkTimeline } from "@/components/sections/how-we-work-timeline";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Metodología y Contratación | ADI",
  description:
    "Conoce la metodología de ADI, las fases de implementación y las modalidades de contratación: proyecto, retainer y Fase 0.",
  path: "/metodologia",
});

const phaseZeroIncludes = [
  "Mapeo del problema y del proceso actual (AS-IS)",
  "Evaluación de datos disponibles, calidad y brechas",
  "Definición de escenario objetivo (TO-BE) y prioridades",
  "Plan de trabajo por fases + propuesta de implementación",
];

export default function MetodologiaPage() {
  return (
    <>
      <section className="pt-36 pb-8">
        <Container>
          <SectionHeading
            eyebrow="Metodología"
            title="Ejecutamos con estructura, no con improvisación"
            description="Trabajamos por fases para asegurar calidad técnica, adopción en operación y claridad de entregables en cada etapa."
          />
        </Container>
      </section>

      <HowWeWorkTimeline />
      <EngagementModels />

      <section className="pb-20">
        <Container>
          <Card className="relative overflow-hidden border-primary/40 bg-gradient-to-br from-primary/10 via-bg/80 to-bg p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-xs uppercase tracking-[0.16em] text-primary">Empezar con Fase 0</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-4xl">
              Recomendado cuando aún no hay claridad de alcance
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
              La Fase 0 es un diagnóstico pagado para alinear negocio, datos y viabilidad técnica antes de ejecutar. Es una
              etapa acotada: su duración típica es corta y se define según complejidad y disponibilidad de información.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {phaseZeroIncludes.map((item) => (
                <li key={item} className="rounded-xl border border-border/70 bg-black/20 px-4 py-3 text-sm text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <CTASection
        title="Arranquemos con Fase 0 y definamos un plan ejecutable"
        description="En una primera llamada alineamos objetivos, contexto operativo y criterios de éxito para diseñar el diagnóstico."
        primaryLabel="Empezar con Fase 0"
        primaryHref="/contacto"
        secondaryLabel="Ver servicios"
        secondaryHref="/servicios"
      />
    </>
  );
}
