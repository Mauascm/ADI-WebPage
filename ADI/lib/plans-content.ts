export const plans = [
  {
    name: "Essential",
    range: "$50,000 – $79,000",
    summary: "Ordena tus datos y convierte la información en decisiones claras.",
    highlights: ["Business Intelligence y dashboards", "Hasta 2 fuentes de datos", "1 área de negocio"],
  },
  {
    name: "Growth",
    range: "$80,000 – $139,000",
    summary: "Integra información y automatiza procesos para ganar eficiencia.",
    highlights: ["Integración de datos intermedia", "Hasta 4 fuentes de datos", "2 áreas de negocio"],
  },
  {
    name: "Intelligence",
    range: "$140,000 – $219,000",
    summary: "Anticipa escenarios y suma gobierno de datos e IA con consultoría regulatoria.",
    highlights: ["Analítica avanzada y forecasting", "AI Governance & Compliance", "Hasta 6 fuentes de datos"],
  },
  {
    name: "AI",
    range: "$220,000 – $319,000",
    summary: "Implementa soluciones de IA y controles técnicos para operarlas con criterio.",
    highlights: ["Machine Learning y agentes", "Controles técnicos de gobernanza", "Hasta 10 fuentes de datos"],
  },
  {
    name: "Enterprise",
    range: "Cotización personalizada",
    summary: "Diseñamos la capacidad completa según tu arquitectura, operación y objetivos.",
    highlights: ["Arquitectura y alcance propios", "Capacidad ajustada a tu contexto", "Acompañamiento integral"],
  },
] as const;

export type PlanName = (typeof plans)[number]["name"];
export const planContactHref = (plan: PlanName) =>
  `/contacto?objetivo=${encodeURIComponent("Data & AI Office")}&plan=${encodeURIComponent(plan)}`;

type ComparisonRow = { label: string; values: readonly [string, string, string, string, string] };
export const comparisonGroups: { title: string; rows: ComparisonRow[] }[] = [
  {
    title: "Capacidad y datos",
    rows: [
      { label: "Fuentes de datos estándar", values: ["Hasta 2", "Hasta 4", "Hasta 6", "Hasta 10", "A medida"] },
      { label: "Áreas de negocio atendidas", values: ["1", "2", "3", "Hasta 5", "A medida"] },
      { label: "Iniciativas simultáneas", values: ["1", "2", "3", "4", "A medida"] },
      { label: "Business Intelligence y dashboards", values: ["Básico", "Avanzado", "Avanzado", "Avanzado", "A medida"] },
      { label: "Integración de datos", values: ["Básica", "Intermedia", "Avanzada", "Compleja", "A medida"] },
      { label: "Data Engineering", values: ["Básico", "Intermedio", "Avanzado", "Avanzado", "A medida"] },
      { label: "Data Governance", values: ["Básico", "Intermedio", "Avanzado", "Integral", "A medida"] },
    ],
  },
  {
    title: "Analítica, automatización e IA",
    rows: [
      { label: "Automatización de procesos", values: ["—", "Incluido", "Incluido", "Incluido", "A medida"] },
      { label: "Analítica avanzada", values: ["—", "—", "Incluido", "Incluido", "A medida"] },
      { label: "Forecasting y modelos predictivos", values: ["—", "—", "Incluido", "Incluido", "A medida"] },
      { label: "Machine Learning personalizado", values: ["—", "—", "—", "Incluido", "A medida"] },
      { label: "IA generativa y agentes inteligentes", values: ["—", "—", "—", "Incluido", "A medida"] },
    ],
  },
  {
    title: "Gobernanza y cumplimiento",
    rows: [
      { label: "AI Governance", values: ["—", "—", "Consultoría integral", "Consultoría + implementación", "A medida"] },
      { label: "Legal & Regulatory Compliance", values: ["—", "—", "Consultoría integral", "Consultoría + implementación", "A medida"] },
      { label: "Evaluación de riesgos de IA", values: ["—", "—", "Normativa", "Normativa y técnica", "A medida"] },
      { label: "Revisión de contratos tecnológicos", values: ["—", "—", "Incluido", "Incluido", "A medida"] },
      { label: "Privacidad y uso responsable de IA", values: ["—", "—", "Incluido", "Incluido", "A medida"] },
    ],
  },
];
