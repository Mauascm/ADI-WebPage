import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/site-content";

export function CaseStudyCards() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Casos tipo"
          title="Ejemplos de escenarios que abordamos"
          description="Casos representativos por industria para visualizar cómo combinamos automatización, analítica y entrega operativa."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.sector} delay={index * 0.07}>
              <Card className="h-full">
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-primary">{item.sector}</p>
                <h3 className="mb-3 text-lg font-semibold text-fg">Desafío</h3>
                <p className="text-sm text-muted-foreground">{item.challenge}</p>
                <h4 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">Solución</h4>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
                <h4 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">Resultado</h4>
                <p className="text-sm text-fg">{item.impact}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
