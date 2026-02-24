import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/lib/site-content";

type HowWeWorkTimelineProps = {
  compact?: boolean;
};

export function HowWeWorkTimeline({ compact = false }: HowWeWorkTimelineProps) {
  const steps = compact ? timeline.slice(0, 5) : timeline;

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={compact ? "Método claro, entrega ordenada" : "De diagnóstico a mejora continua"}
          description="Cada fase está pensada para asegurar adopción, trazabilidad y resultados sostenibles en operación."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
