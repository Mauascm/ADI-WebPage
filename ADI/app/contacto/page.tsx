import type { Metadata } from "next";
import { CalendarClock, CheckCircle2, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactConfig, contactMailto } from "@/lib/contact-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto | ADI",
  description:
    "Agenda una llamada de diagnóstico con ADI o déjanos tu contacto para que te busquemos. Automatización, dashboards, data science y productos digitales.",
  path: "/contacto",
});

const callIncludes = [
  "Entendimiento del dolor principal y su impacto en negocio",
  "Revisión rápida de datos y sistemas involucrados",
  "Definición de siguiente paso recomendado (incluyendo Fase 0 si aplica)",
];

export default function ContactoPage() {
  const hasCalendar = Boolean(contactConfig.calendarUrl);

  return (
    <section className="pt-36 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Empecemos por la vía que te resulte más fácil"
          description="Puedes agendar una llamada de diagnóstico (30 min) de inmediato o dejarnos tu contacto y contexto para que te busquemos."
        />

        <div className="space-y-6">
          <Card className="relative overflow-hidden border-primary/40 bg-gradient-to-br from-primary/12 via-bg/85 to-bg p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/45 bg-primary/10">
                  <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold text-fg sm:text-3xl">Agendar llamada / Fase 0</h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Si ya quieres avanzar, agenda un diagnóstico de 30 minutos. Si todavía no está claro el alcance,
                  usamos esa llamada para definir si conviene arrancar con una Fase 0.
                </p>
                <a
                  href={hasCalendar ? contactConfig.calendarUrl : "#"}
                  target={hasCalendar ? "_blank" : undefined}
                  rel={hasCalendar ? "noreferrer" : undefined}
                  aria-disabled={!hasCalendar}
                  className="mt-6 inline-flex h-11 items-center rounded-full border border-primary/50 px-6 text-sm font-medium text-primary transition hover:bg-primary/10 aria-disabled:pointer-events-none aria-disabled:opacity-50"
                >
                  {hasCalendar ? "Agendar diagnóstico (30 min)" : "Placeholder: abrir calendario"}
                </a>
              </div>

              <div className="rounded-2xl border border-border/70 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Qué cubrimos en la llamada</p>
                <ul className="mt-4 space-y-3">
                  {callIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-fg">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border/70 bg-white/[0.02] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Opción 2</p>
                <h2 className="mt-2 text-xl font-semibold text-fg sm:text-2xl">Déjanos tu contacto y te buscamos</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Si prefieres no agendar todavía, compártenos tu contexto. Te contactamos para entender el caso y
                  proponerte el siguiente paso.
                </p>
              </div>
              <ContactForm />
            </div>

            <Card className="p-6 sm:p-7">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/45 bg-primary/10">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-fg">Contacto por correo</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                También puedes escribirnos directo. Responderemos con los siguientes pasos y la información que
                necesitamos para avanzar.
              </p>
              <a
                href={contactMailto}
                className="mt-5 inline-flex text-sm text-primary underline underline-offset-4 transition hover:text-fg"
              >
                {contactConfig.email}
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

