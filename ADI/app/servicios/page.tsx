import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Briefcase,
  ChartNoAxesCombined,
  Globe,
  Megaphone,
  Sparkles,
} from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Servicios | ADI",
  description:
    "Servicios de ADI: automatización, dashboards, data science, web, marketing y marca con entregables claros y enfoque en operación.",
  path: "/servicios",
});

type ServiceBlock = {
  id: string;
  title: string;
  icon: LucideIcon;
  problem: string;
  examples: string[];
  deliverables: string[];
  type: "Core" | "Complemento";
};

const serviceBlocks: ServiceBlock[] = [
  {
    id: "automatizaciones",
    title: "Desarrollo y automatizaciones",
    icon: Bot,
    type: "Core",
    problem:
      "Procesos operativos repetitivos que dependen de tareas manuales, múltiples herramientas y alto riesgo de error.",
    examples: [
      "Scripts, bots y flujos automáticos para tareas recurrentes",
      "Integraciones vía APIs entre ERP/CRM, hojas y plataformas internas",
      "Pipelines ETL/ELT para consolidar datos sin trabajo manual",
    ],
    deliverables: [
      "Solución funcionando en entorno acordado",
      "Manual corto de operación para usuarios",
      "Documentación técnica y checklist de handover",
    ],
  },
  {
    id: "dashboards",
    title: "Dashboards y gobierno de KPIs",
    icon: ChartNoAxesCombined,
    type: "Core",
    problem:
      "Decisiones tomadas con reportes tardíos o KPIs inconsistentes entre áreas.",
    examples: [
      "Definición de diccionario de KPIs y reglas de cálculo",
      "Modelo de datos unificado con fuente de verdad",
      "Dashboards por rol con trazabilidad y alertas",
    ],
    deliverables: [
      "Diccionario de métricas y supuestos",
      "Modelo de datos documentado",
      "Dashboard operativo/ejecutivo con permisos por rol",
    ],
  },
  {
    id: "data-science",
    title: "Ciencia de Datos y MLOps (end-to-end)",
    icon: Brain,
    type: "Core",
    problem:
      "No existe capacidad predictiva para anticipar desvíos, pérdidas o cambios de demanda.",
    examples: [
      "Pronóstico de demanda",
      "Detección de anomalías, fraude o mermas",
      "Scoring, optimización de inventario y churn",
    ],
    deliverables: [
      "EDA y diagnóstico de factibilidad",
      "Modelo y evaluación con criterios de negocio",
      "Entrega en API, batch o dashboard + plan de monitoreo MLOps",
    ],
  },
  {
    id: "web",
    title: "Web: landing y e-commerce",
    icon: Globe,
    type: "Complemento",
    problem:
      "La presencia digital no acompaña la estrategia comercial ni captura datos accionables.",
    examples: [
      "Landing enfocada en conversión",
      "Sitio corporativo o e-commerce como soporte comercial",
      "Integración con analítica y eventos clave",
    ],
    deliverables: [
      "Sitio publicado y optimizado",
      "Analítica base y eventos de negocio",
      "Mantenimiento opcional + SEO técnico",
    ],
  },
  {
    id: "marketing",
    title: "Marketing digital",
    icon: Megaphone,
    type: "Complemento",
    problem:
      "Canales activos sin sistema claro de medición y optimización.",
    examples: [
      "Plan de activación por canal",
      "Tablero de performance de campañas",
      "Optimización iterativa según objetivos comerciales",
    ],
    deliverables: [
      "Framework de campaña y mensajes",
      "Set de métricas de seguimiento",
      "Ritual de mejora y reporting ejecutivo",
    ],
  },
  {
    id: "marca",
    title: "Marca y reestructuración",
    icon: Briefcase,
    type: "Complemento",
    problem:
      "La marca no refleja la etapa actual del negocio ni soporta su crecimiento.",
    examples: [
      "Redefinición de narrativa y propuesta de valor",
      "Arquitectura de marca y lineamientos visuales",
      "Ajustes de posicionamiento para nuevos mercados",
    ],
    deliverables: [
      "Documento de posicionamiento",
      "Guía de comunicación y diseño",
      "Roadmap de implementación por activos",
    ],
  },
];

const decisionTree = [
  {
    pain: "Mucha operación manual, validaciones repetitivas o conciliaciones.",
    recommendation: "Desarrollo y automatizaciones",
  },
  {
    pain: "KPIs críticos sin una fuente única o con reportes tardíos.",
    recommendation: "Dashboards y gobierno de KPIs",
  },
  {
    pain: "Necesidad de anticipar demanda, mermas, riesgo o churn.",
    recommendation: "Ciencia de Datos y MLOps",
  },
  {
    pain: "Necesitas apoyar crecimiento comercial o reposicionamiento.",
    recommendation: "Web, Marketing y/o Marca (complementos)",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones diseñadas para resolver dolores operativos reales"
            description="Definimos alcance y entregables desde el inicio para que cada iniciativa se traduzca en eficiencia, visibilidad y mejor toma de decisiones."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {serviceBlocks.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.id} delay={index * 0.04}>
                  <Card className="h-full">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/45 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <span className="rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {service.type}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-fg">{service.title}</h2>

                    <div className="mt-5 space-y-5">
                      <div>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
                          Problema que resuelve
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.problem}</p>
                      </div>

                      <div>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
                          Ejemplos
                        </h3>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {service.examples.map((example) => (
                            <li key={example} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
                          Entregables
                        </h3>
                        <ul className="space-y-1.5 text-sm text-fg">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-2">
                              <Sparkles className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow="Cómo elegimos el servicio correcto"
            title="Mini árbol de decisión"
            description="Alineamos dolor principal con la solución de mayor impacto inicial y luego armamos una hoja de ruta por fases."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {decisionTree.map((item, index) => (
              <Reveal key={item.pain} delay={index * 0.06}>
                <Card className="h-full">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Dolor</p>
                  <p className="mt-2 text-sm text-fg">{item.pain}</p>
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Servicio recomendado</p>
                  <p className="mt-2 text-base font-medium text-primary">{item.recommendation}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Si no está claro por dónde empezar, arrancamos con diagnóstico"
        description="Una Fase 0 permite priorizar rápido y reducir riesgo antes de invertir en implementación completa."
        primaryLabel="Solicitar diagnóstico"
        primaryHref="/contacto"
      />
    </>
  );
}
