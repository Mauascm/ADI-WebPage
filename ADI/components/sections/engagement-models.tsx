import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { engagementModels } from "@/lib/site-content";

export function EngagementModels() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Modalidades"
          title="Formas de contratación según tu contexto"
          description="Elegimos el esquema que mejor se adapta a tu nivel de claridad, velocidad de decisión y necesidad de soporte continuo."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;

            return (
              <Reveal key={model.title} delay={index * 0.07}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-fg">{model.title}</h3>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
