"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <p className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary">
              Consultora de data + automatización
            </p>
            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-tight text-fg sm:text-5xl lg:text-6xl">
                Convertimos procesos manuales en sistemas y tableros que trabajan solos.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                En ADI usamos datos y modelos para anticiparnos a pérdidas y oportunidades, con soluciones que mejoran
                eficiencia, rentabilidad y velocidad de decisión.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contacto" size="lg">
                Solicitar diagnóstico
              </ButtonLink>
              <ButtonLink href="/servicios" variant="secondary" size="lg">
                Ver servicios
              </ButtonLink>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-primary/15 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-bg/75 p-4 shadow-soft backdrop-blur-xl sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Control de operación</p>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-[11px] text-emerald-300">
                  Activo
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border/70 bg-white/[0.04] p-4">
                  <p className="mb-3 text-xs text-muted-foreground">KPIs críticos</p>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl border border-border/60 bg-black/20 p-3">
                      <p className="text-muted-foreground">Producción</p>
                      <p className="mt-1 text-fg">En monitoreo</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-black/20 p-3">
                      <p className="text-muted-foreground">Logística</p>
                      <p className="mt-1 text-fg">Alertas tempranas</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-black/20 p-3">
                      <p className="text-muted-foreground">Ventas</p>
                      <p className="mt-1 text-fg">Pipeline limpio</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-white/[0.04] p-4">
                  <p className="mb-3 text-xs text-muted-foreground">Flujo automatizado</p>
                  <div className="space-y-2">
                    {["ERP / CRM", "Validación", "Modelado", "Dashboard + alertas"].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <p className="text-sm text-fg">{step}</p>
                        {index !== 3 ? <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" /> : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute right-8 top-6 h-20 w-20 rounded-full border border-primary/30"
                animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
