import { Quote } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que suele cambiar cuando la operación se ordena"
          description="Referencias genéricas de clientes tipo (placeholders) hasta reemplazar por testimonios reales autorizados."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <Card className="h-full">
                <Quote className="mb-4 h-6 w-6 text-primary" aria-hidden="true" />
                <p className="text-lg text-fg">“{item.quote}”</p>
                <p className="mt-6 text-sm font-medium text-fg">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
