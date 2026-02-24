import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { complementaryServices, coreServices } from "@/lib/site-content";

export function ServicesOverview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios orientados a impacto operativo"
          description="Combinamos automatización, analítica y desarrollo para resolver fricción real del negocio, no solo entregar dashboards bonitos."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {coreServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <Card className="h-full">
                  <Icon className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-semibold text-fg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <Link
                    href="/servicios"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition hover:gap-3"
                  >
                    Ver entregables <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {complementaryServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <Card className="h-full border-dashed bg-white/[0.03]">
                  <Icon className="mb-4 h-6 w-6 text-primary/80" aria-hidden="true" />
                  <h3 className="mb-2 text-lg font-semibold text-fg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
