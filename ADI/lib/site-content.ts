export const navLinks = [
  { href: "/data-ai-office", label: "Data & AI Office" },
  { href: "/capacidades", label: "Capacidades" },
  { href: "/modelo", label: "Modelo" },
  { href: "/experiencia", label: "Experiencia" },
];

export const capabilities = [
  {
    id: "ingenieria",
    name: "Ingeniería de datos",
    discipline: "Data Engineering",
    description: "Conectar lo que hoy vive separado.",
    detail:
      "Integramos ERP, CRM, bases de datos y APIs en flujos confiables. Validaciones, orquestación y monitoreo para que la información esté disponible cuando se necesita.",
    result: "Fuentes conectadas y procesos de actualización trazables.",
    question: "¿Podemos dejar de consolidar archivos cada semana?",
    layer: "01 / CONECTAR",
  },
  {
    id: "arquitectura",
    name: "Arquitectura de datos",
    discipline: "Data Architecture",
    description: "Una estructura que pueda crecer contigo.",
    detail:
      "Diseñamos modelos y relaciones que representan tu operación. Las definiciones del negocio se convierten en una base compartida, documentada y reutilizable.",
    result: "Modelos de datos y reglas comunes entre áreas.",
    question:
      "¿Por qué cada área tiene una versión diferente del mismo número?",
    layer: "01 / CONECTAR",
  },
  {
    id: "cloud",
    name: "Cloud y soluciones",
    discipline: "Cloud & Solutions Architecture",
    description: "Infraestructura al servicio de la operación.",
    detail:
      "Elegimos e integramos infraestructura de acuerdo con volumen, disponibilidad, seguridad y costos. Cada decisión técnica responde a una necesidad concreta.",
    result: "Arquitectura operable, con responsabilidades y costos visibles.",
    question: "¿Cómo sostenemos esta solución cuando aumente el volumen?",
    layer: "01 / CONECTAR",
  },
  {
    id: "analitica",
    name: "BI y analítica",
    discipline: "BI & Analytics Engineering",
    description: "La misma pregunta. Una respuesta confiable.",
    detail:
      "Transformamos datos en métricas compartidas, modelos analíticos e interfaces de decisión. Acordamos qué significa cada indicador y cómo se calcula.",
    result: "Indicadores consistentes, desde la fuente hasta la decisión.",
    question: "¿Cómo vamos contra presupuesto este mes?",
    layer: "02 / ENTENDER",
  },
  {
    id: "ciencia",
    name: "Ciencia de datos",
    discipline: "Data Science",
    description: "Anticipar para decidir con más contexto.",
    detail:
      "Analizamos patrones, construimos pronósticos y evaluamos escenarios. Contrastamos los modelos con una referencia y con la realidad del negocio.",
    result: "Pronósticos y escenarios con supuestos y límites explícitos.",
    question: "¿Qué demanda debemos prepararnos para atender?",
    layer: "02 / ENTENDER",
  },
  {
    id: "ia",
    name: "IA y machine learning",
    discipline: "AI / ML Engineering",
    description: "Llevar los modelos a una operación real.",
    detail:
      "Implementamos modelos, inteligencia documental y agentes cuando existe un caso viable. Definimos permisos, evaluación, supervisión humana y monitoreo.",
    result: "IA integrada, evaluable y con trazabilidad.",
    question: "¿Qué decisiones o tareas pueden apoyarse en un modelo?",
    layer: "03 / ACTUAR",
  },
  {
    id: "automatizacion",
    name: "Automatización",
    discipline: "Automation",
    description: "Menos intervención. Más control.",
    detail:
      "Conectamos sistemas y reglas para ejecutar procesos repetitivos. Incorporamos controles, alertas y manejo de excepciones para que el equipo se enfoque donde aporta criterio.",
    result: "Flujos operativos con responsables y excepciones visibles.",
    question: "¿Qué proceso sigue dependiendo de copiar y pegar?",
    layer: "03 / ACTUAR",
  },
  {
    id: "gobierno",
    name: "Gobierno de datos",
    discipline: "Data Governance",
    description: "Confianza que se puede explicar.",
    detail:
      "Definimos responsables, acceso, calidad y linaje de información. Documentamos el conocimiento para reducir la dependencia de personas individuales.",
    result: "Datos con responsables, permisos y definiciones conocidas.",
    question: "¿Podemos explicar de dónde salió este resultado?",
    layer: "TRANSVERSAL",
  },
];

export const businessCases = [
  {
    name: "Finanzas",
    question: "¿Cómo vamos contra presupuesto este mes?",
    sources: ["ERP", "Presupuesto", "Bancos"],
    disciplines: ["Ingeniería de datos", "BI y analítica", "Gobierno de datos"],
    decision: "Identificar desviaciones y enfocar la revisión.",
    detail:
      "Unir presupuesto y ejecución bajo las mismas reglas, con trazabilidad hasta el movimiento de origen.",
  },
  {
    name: "Ventas",
    question: "¿Qué está cambiando en el desempeño comercial?",
    sources: ["CRM", "ERP", "Objetivos"],
    disciplines: ["Ingeniería de datos", "BI y analítica", "Ciencia de datos"],
    decision: "Priorizar productos, canales y oportunidades.",
    detail:
      "Relacionar actividad comercial, facturación y objetivos para distinguir cambios reales de diferencias de medición.",
  },
  {
    name: "Inventario",
    question: "¿Qué producto se está quedando inmóvil?",
    sources: ["ERP", "Almacenes", "Ventas"],
    disciplines: ["Ingeniería de datos", "Ciencia de datos", "BI y analítica"],
    decision: "Ajustar reposición y liberar capacidad.",
    detail:
      "Cruzar existencias, rotación y demanda con reglas comunes para orientar las decisiones de abastecimiento.",
  },
  {
    name: "Operaciones",
    question: "¿Dónde estamos perdiendo tiempo o capacidad?",
    sources: ["Operación", "ERP", "APIs"],
    disciplines: ["Arquitectura de datos", "BI y analítica", "Automatización"],
    decision: "Intervenir en los cuellos de botella.",
    detail:
      "Conectar eventos operativos y tiempos de proceso para entender dónde se acumula la fricción.",
  },
  {
    name: "Pronósticos",
    question: "¿Qué necesitaremos antes de que ocurra?",
    sources: ["Históricos", "Demanda", "Contexto"],
    disciplines: [
      "Ciencia de datos",
      "IA y machine learning",
      "Cloud y soluciones",
    ],
    decision: "Preparar capacidad con escenarios de demanda.",
    detail:
      "Evaluar patrones y escenarios con supuestos explícitos, seguimiento del error y revisión de negocio.",
  },
  {
    name: "Automatización",
    question: "¿Qué proceso aún depende de trabajo manual?",
    sources: ["Archivos", "APIs", "Sistemas"],
    disciplines: ["Ingeniería de datos", "Automatización", "Gobierno de datos"],
    decision: "Automatizar lo repetitivo y revisar excepciones.",
    detail:
      "Convertir un proceso documentado en un flujo con validaciones y puntos de intervención humana.",
  },
];

export const operatingSteps = [
  {
    title: "Priorizar",
    text: "Elegimos una decisión importante y acordamos cómo reconocer una mejora.",
    output: "Prioridad y criterio de éxito",
  },
  {
    title: "Entender",
    text: "Mapeamos el proceso, sus responsables, sus reglas y los datos disponibles.",
    output: "Contexto compartido",
  },
  {
    title: "Conectar",
    text: "Preparamos fuentes, permisos y definiciones para construir sobre una base confiable.",
    output: "Base de información",
  },
  {
    title: "Construir",
    text: "Desarrollamos por sprints con un resultado utilizable como objetivo de cada ciclo.",
    output: "Incremento usable",
  },
  {
    title: "Validar",
    text: "Contrastamos la solución con usuarios, datos y condiciones reales de operación.",
    output: "Validación con el negocio",
  },
  {
    title: "Medir",
    text: "Revisamos adopción y desempeño frente a los criterios acordados.",
    output: "Evidencia para decidir",
  },
  {
    title: "Repriorizar",
    text: "Ajustamos el roadmap. La siguiente iniciativa aprovecha lo que ya construimos.",
    output: "Siguiente prioridad",
  },
];

export const objectives = [
  "Data & AI Office",
  "Datos / arquitectura",
  "BI / Analytics",
  "Data Science / Forecasting",
  "AI / Machine Learning",
  "Automatización",
  "No estoy seguro todavía",
];
