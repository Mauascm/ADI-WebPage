import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { results } from "@/lib/site-content";

export function ResultsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Resultados"
          title="Impacto real en la operación"
          description="Los proyectos se orientan a resultados que el equipo nota desde el día a día y que la dirección puede seguir con claridad."
          align="center"
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <Reveal key={result} delay={index * 0.05}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="text-sm text-fg">{result}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
