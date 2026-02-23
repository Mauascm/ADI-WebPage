import type { Metadata } from "next";
import { CalendarClock, CheckCircle2, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto | ADI",
  description:
    "Agenda una llamada de diagnóstico con ADI. Cuéntanos tu contexto en automatización, dashboards, data science o productos digitales.",
  path: "/contacto",
});

const callIncludes = [
  "Entendimiento del dolor principal y su impacto en negocio",
  "Revisión rápida de datos y sistemas involucrados",
  "Definición de siguiente paso recomendado (incluyendo Fase 0 si aplica)",
];

export default function ContactoPage() {
  return (
    <section className="pt-36 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Agenda una llamada de 30 min"
          description="Cuéntanos dónde está la fricción hoy y definimos juntos la mejor ruta para automatizar, ordenar KPIs o activar analítica avanzada."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <div className="space-y-4">
            <Card className="p-6 sm:p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/45 bg-primary/10">
                <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-fg">Agendar diagnóstico / Fase 0</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                No necesitas llegar con todo definido. Si el alcance todavía no está claro, estructuramos una Fase 0 para
                bajar riesgo y priorizar con criterio.
              </p>
              <ul className="mt-5 space-y-2">
                {callIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-fg">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Reemplazar este link por calendario real cuando esté disponible. */}
              <a
                href="#"
                className="mt-6 inline-flex h-11 items-center rounded-full border border-primary/50 px-6 text-sm text-primary transition hover:bg-primary/10"
              >
                Placeholder: abrir calendario
              </a>
            </Card>

            <Card className="p-6 sm:p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/45 bg-primary/10">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-fg">Canal alterno</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                También puedes escribirnos directo. Responderemos con los siguientes pasos y la información que necesitamos
                para avanzar.
              </p>
              {/* Reemplazar correo por el oficial de la empresa */}
              <a
                href="mailto:contacto@adi-data.com"
                className="mt-5 inline-flex text-sm text-primary underline underline-offset-4 transition hover:text-fg"
              >
                contacto@adi-data.com
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
