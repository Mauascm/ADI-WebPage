import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Bot,
  Boxes,
  Brain,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Clock3,
  Database,
  Globe,
  Layers,
  MessageSquareWarning,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export const trustedBy = [
  "Grupo Retail",
  "Operaciones Norte",
  "Logística Central",
  "Finanzas Integradas",
  "Manufactura 360",
  "Servicio Activo",
];

export const coreServices: Feature[] = [
  {
    title: "Automatizaciones y desarrollo",
    description:
      "Eliminamos tareas manuales con integraciones, scripts y flujos orquestados para que el proceso se ejecute solo.",
    icon: Bot,
  },
  {
    title: "Dashboards y gobierno de KPIs",
    description:
      "Diseñamos métricas confiables, modelo de datos y tableros accionables con una única fuente de verdad por equipo.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Data Science y MLOps",
    description:
      "Construimos soluciones predictivas de extremo a extremo con enfoque en adopción de negocio y monitoreo continuo.",
    icon: Brain,
  },
];

export const complementaryServices: Feature[] = [
  {
    title: "Web y e-commerce",
    description: "Landing pages y experiencias digitales conectadas con analítica y operación.",
    icon: Globe,
  },
  {
    title: "Marketing digital",
    description: "Activación de canales, medición y optimización orientada a objetivos comerciales.",
    icon: TrendingUp,
  },
  {
    title: "Marca y reestructuración",
    description: "Reposicionamiento y arquitectura de marca para acompañar nuevas etapas de crecimiento.",
    icon: Briefcase,
  },
];

export const painPoints: Feature[] = [
  {
    title: "Copiar y pegar en cadena",
    description:
      "Horas operativas consumidas entre Excel, correo y sistemas que no conversan entre sí.",
    icon: ArrowLeftRight,
  },
  {
    title: "Reportes manuales y tardíos",
    description:
      "Decisiones estratégicas basadas en información desactualizada o armada bajo presión.",
    icon: Clock3,
  },
  {
    title: "Errores recurrentes",
    description:
      "La falta de validaciones y trazabilidad genera inconsistencias y retrabajo constante.",
    icon: MessageSquareWarning,
  },
  {
    title: "Datos dispersos",
    description:
      "ERP, CRM, SQL, hojas y APIs conviven sin un modelo común ni reglas claras de gobernanza.",
    icon: Database,
  },
  {
    title: "Sin fuente única de verdad",
    description:
      "Cada área interpreta KPIs distinto y se pierde alineación operativa.",
    icon: Layers,
  },
  {
    title: "Problemas detectados tarde",
    description:
      "No hay alertas ni modelos para anticipar mermas, desvíos o pérdida de oportunidad.",
    icon: ShieldCheck,
  },
];

export const timeline = [
  {
    title: "Diagnóstico",
    description: "Entendemos el problema, los datos disponibles y cómo fluye hoy la operación.",
  },
  {
    title: "Diseño",
    description: "Definimos escenario TO-BE, reglas de negocio, arquitectura y backlog priorizado.",
  },
  {
    title: "Implementación",
    description: "Desarrollamos la solución, integramos sistemas y automatizamos procesos clave.",
  },
  {
    title: "Validación",
    description: "Hacemos UAT con usuarios reales, medimos impacto y ajustamos detalles críticos.",
  },
  {
    title: "Entrega",
    description: "Pasamos a producción, documentamos y transferimos conocimiento al equipo interno.",
  },
  {
    title: "Soporte y mejora",
    description: "Monitoreamos desempeño y evolucionamos el roadmap según nuevas necesidades.",
  },
];

export const results = [
  "Ahorro de tiempo operativo",
  "Reducción de errores y retrabajo",
  "Trazabilidad de punta a punta",
  "Visibilidad de KPIs en tiempo real",
  "Mejor toma de decisiones",
  "Capacidad de crecimiento sostenible",
];

export const caseStudies = [
  {
    sector: "Retail",
    challenge:
      "Consolidación manual de ventas e inventario en múltiples sucursales con baja visibilidad diaria.",
    solution:
      "Automatización ETL + dashboard ejecutivo con alertas de quiebre de stock y seguimiento comercial.",
    impact: "Mayor control operativo, decisiones de reposición más rápidas y menos desvíos.",
  },
  {
    sector: "Logística",
    challenge:
      "KPIs críticos distribuidos en reportes aislados, dificultando detectar cuellos de botella.",
    solution:
      "Modelo unificado de datos + tablero por rol para operación, supervisión y dirección.",
    impact: "Trazabilidad completa de la operación y respuesta temprana ante incidentes.",
  },
  {
    sector: "Finanzas",
    challenge:
      "Conciliaciones y controles repetitivos con riesgo de errores y tiempos de cierre extendidos.",
    solution:
      "Flujos automatizados de validación y scoring interno para priorizar revisión de anomalías.",
    impact: "Menos tareas manuales, mejor calidad de información y mayor foco analítico.",
  },
];

export const testimonials = [
  {
    quote:
      "ADI nos ayudó a pasar de reportes reactivos a un sistema que nos avisa antes de que el problema escale.",
    name: "Dirección de Operaciones",
    role: "Empresa industrial",
  },
  {
    quote:
      "La combinación de automatización y tableros ordenó nuestra operación y nos devolvió tiempo para decidir mejor.",
    name: "Gerencia de Planeación",
    role: "Empresa de servicios",
  },
];

export const engagementModels = [
  {
    title: "Proyecto cerrado",
    description:
      "Ideal cuando el alcance está definido y se necesita una entrega concreta con cronograma claro.",
    icon: Boxes,
  },
  {
    title: "Retainer mensual",
    description:
      "Acompañamiento continuo para mejoras evolutivas, soporte operativo y monitoreo de modelos.",
    icon: Workflow,
  },
  {
    title: "Fase 0",
    description:
      "Diagnóstico pagado para ordenar prioridades cuando aún no hay claridad técnica u operativa.",
    icon: Building2,
  },
];
