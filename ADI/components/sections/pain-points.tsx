import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { painPoints } from "@/lib/site-content";

export function PainPoints() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Problemas que resolvemos"
          title="Donde suele frenarse la eficiencia"
          description="Trabajamos sobre los cuellos de botella típicos en operaciones con KPIs críticos: producción, logística, ventas, finanzas, RRHH y atención al cliente."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/35 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
