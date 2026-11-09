export function trainingContactHref(program: string) {
  const params = new URLSearchParams({
    objetivo: "Capacitación",
    programa: program,
  });
  return `/contacto?${params.toString()}`;
}

export const trainingPlatforms = [
  {
    id: "copilot",
    name: "Microsoft 365 Copilot",
    title: "Microsoft 365 Copilot",
    description:
      "Contrata la ruta integral o comienza con uno de sus dos primeros programas.",
    meta: "Cotizable · Ruta integral de 33 h",
    steps: [
      {
        label: "01 / 12 h · Disponible por separado",
        title: "Domina",
        description: "Analiza información y crea entregables de trabajo con Copilot.",
        program: "Microsoft 365 Copilot · Domina (12 h)",
      },
      {
        label: "02 / 12 h · Disponible por separado",
        title: "Construye Agentes",
        description:
          "Diseña y prueba un agente para una necesidad concreta en el entorno de Microsoft 365 habilitado por tu empresa.",
        program: "Microsoft 365 Copilot · Construye Agentes (12 h)",
      },
      {
        label: "03 / 9 h · Dentro de la ruta",
        title: "Aplica al negocio",
        description: "Usa lo aprendido en un caso de tu área o proceso.",
      },
    ],
    program: "Microsoft 365 Copilot · Ruta integral (33 h)",
    action: "Cotizar la ruta integral",
  },
  {
    id: "gemini",
    name: "Gemini",
    title: "Adopción de Gemini para equipos",
    description:
      "Practica con las tareas, los documentos y los flujos de trabajo que tu equipo realiza con Gemini.",
    meta: "Ruta a medida",
    program: "Adopción de Gemini para equipos",
    action: "Consultar la ruta de Gemini",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    title: "Adopción de ChatGPT para equipos",
    description:
      "Practica formas de incorporar ChatGPT a tareas como el análisis de información, la preparación de documentos y la revisión de resultados.",
    meta: "Ruta a medida",
    program: "Adopción de ChatGPT para equipos",
    action: "Consultar la ruta de ChatGPT",
  },
  {
    id: "claude",
    name: "Claude",
    title: "Adopción de Claude para equipos",
    description:
      "Trabaja con Claude en ejercicios de síntesis, revisión de documentos y preparación de entregables según el rol de cada participante.",
    meta: "Ruta a medida",
    program: "Adopción de Claude para equipos",
    action: "Consultar la ruta de Claude",
  },
] as const;

export const standardTrainingSteps = [
  {
    label: "01 / Domina",
    title: "Uso en el trabajo",
    description: "Practica con tareas y herramientas acordes al rol.",
  },
  {
    label: "02 / Construye",
    title: "Ejercicio aplicado",
    description: "Diseña una forma de trabajo que el equipo pueda repetir y evaluar.",
  },
  {
    label: "03 / Aplica",
    title: "Caso del equipo",
    description: "Prueba lo aprendido con un proceso acordado.",
  },
];

export const businessTrainingGroups = [
  {
    label: "Especializaciones de Supply Chain",
    programs: [
      {
        id: "almacenes",
        title: "IA generativa aplicada a Almacenes",
        description:
          "Organiza incidencias, estandariza listas de verificación y mejora el traspaso de información entre turnos.",
        deliverable: "Un reporte de incidencias con lista de seguimiento.",
      },
      {
        id: "compras",
        title: "IA generativa aplicada a Compras",
        description:
          "Estructura requerimientos, compara ofertas y prepara preguntas y argumentos para negociar con proveedores.",
        deliverable: "Una matriz comparativa de propuestas con criterios acordados.",
      },
    ],
  },
  {
    label: "Operaciones y mejora",
    programs: [
      {
        id: "manufactura",
        title: "IA aplicada a Manufactura y Mantenimiento",
        description:
          "Analiza indicadores y desviaciones, documenta procedimientos y prepara reportes para priorizar acciones operativas.",
        deliverable:
          "Un reporte de desviaciones con prioridades y acciones para revisión técnica.",
      },
      {
        id: "proyectos",
        title: "IA aplicada a Productividad, Mejora Continua y Proyectos",
        description:
          "Estructura problemas, revisa indicadores y prepara el seguimiento de avances, acuerdos y pendientes.",
        deliverable:
          "Un reporte de proyecto con indicadores, responsables y próximos pasos.",
      },
    ],
  },
  {
    label: "Áreas especializadas",
    programs: [
      {
        id: "formacion-interna",
        title: "IA generativa para Capacitación y Entrenamiento",
        description:
          "Diseña temarios, materiales y evaluaciones con IA a partir de una necesidad de formación interna.",
        deliverable:
          "Una secuencia didáctica con materiales y una evaluación para revisión pedagógica.",
      },
      {
        id: "ehs",
        title: "Agentes de IA para Medio Ambiente, Salud y Seguridad (EHS)",
        description:
          "Diseña y prueba un agente para consultar documentación autorizada o preparar borradores de reportes. El equipo responsable del área revisa sus respuestas.",
        deliverable:
          "Un prototipo de agente con casos de prueba y criterios de validación.",
      },
    ],
  },
];

export const technicalTrainingFamilies = [
  {
    title: "IA y automatización",
    description:
      "Construcción de agentes y automatización de flujos de trabajo, con ejercicios de prueba, seguimiento y aprobaciones.",
    examples: [
      {
        title: "Construcción y prueba de agentes de IA",
        profile: "Equipos de automatización y TI.",
        requirement: "Definir una tarea, un entorno de práctica y las fuentes autorizadas.",
        result: "Prototipo con instrucciones y una matriz de pruebas de respuestas.",
      },
      {
        title: "Automatización de flujos con IA",
        profile: "Analistas de procesos y equipos de automatización.",
        requirement: "Conocer un flujo de trabajo recurrente del equipo.",
        result: "Diseño del flujo con entradas, pasos y puntos de aprobación.",
      },
    ],
  },
  {
    title: "Analítica, BI y toma de decisiones",
    description:
      "Power BI para operaciones, diseño de indicadores y pronósticos aplicados a decisiones de planeación.",
    examples: [
      {
        title: "Power BI aplicado a operaciones",
        profile: "Analistas de operaciones y responsables de indicadores.",
        requirement:
          "Manejo de datos tabulares y acceso a un entorno de práctica de Power BI.",
        result: "Tablero con indicadores definidos para seguir un proceso.",
      },
      {
        title: "Forecasting con Python para planeación",
        profile: "Analistas de datos y planeación con experiencia en Python.",
        requirement:
          "Manipulación básica de datos en Python y un conjunto de series de práctica.",
        result: "Comparación documentada de pronósticos, errores y supuestos.",
      },
    ],
  },
  {
    title: "Ingeniería, calidad y gobierno de datos",
    description:
      "Flujos de datos, reglas de calidad y preparación de fuentes para proyectos de analítica e IA.",
    examples: [
      {
        title: "Calidad de datos para analítica e IA",
        profile: "Analistas, responsables de datos y equipos de BI.",
        requirement: "Interpretar un conjunto de datos tabular.",
        result:
          "Reglas documentadas para detectar y reportar problemas en una fuente.",
      },
      {
        title: "Gobierno de datos para equipos técnicos",
        profile: "Equipos de datos, TI y responsables de fuentes.",
        requirement:
          "Identificar un conjunto de datos y quién lo produce y utiliza.",
        result:
          "Ficha de gobierno con responsabilidades, accesos y criterios de uso.",
      },
    ],
  },
  {
    title: "Desarrollo e integración de soluciones",
    description:
      "Conexión de aplicaciones y agentes con APIs, bases de datos y sistemas internos.",
    examples: [
      {
        title: "APIs y datos para soluciones de IA",
        profile: "Desarrolladores y equipos de integración.",
        requirement:
          "Conocer conceptos básicos de APIs y contar con un entorno de prueba.",
        result:
          "Integración de práctica con un contrato de datos, permisos y pruebas de intercambio.",
      },
      {
        title: "Arquitectura de soluciones con IA",
        profile: "Arquitectos, líderes técnicos y responsables de diseño.",
        requirement:
          "Experiencia básica en diseño de sistemas o flujos de datos.",
        result:
          "Diagrama de arquitectura con decisiones de integración, permisos y puntos de validación.",
      },
    ],
  },
  {
    title: "Ciberseguridad aplicada a datos e IA",
    description:
      "Uso seguro de IA, protección de información y evaluación de riesgos en aplicaciones y agentes.",
    examples: [
      {
        title: "Ciberseguridad para trabajar con IA",
        profile: "Colaboradores y responsables de áreas que usan herramientas de IA.",
        requirement:
          "Conocer las herramientas autorizadas por su organización.",
        result:
          "Lista de verificación para decidir qué información se puede compartir y cuándo pedir revisión.",
      },
      {
        title: "Seguridad de aplicaciones y agentes de IA",
        profile: "Equipos de desarrollo, TI y seguridad.",
        requirement:
          "Entender el flujo de datos y permisos de un agente y contar con un entorno de prueba.",
        result:
          "Matriz de riesgos y pruebas de permisos, exposición de datos e instrucciones maliciosas.",
      },
    ],
  },
];

export const executiveTrainingAgenda = [
  {
    title: "Entender el potencial y los límites",
    description:
      "Distingue qué problemas puede resolver la IA. Examina casos de distintos sectores y sus implicaciones para costos, productividad y decisiones.",
  },
  {
    title: "Elegir dónde aplicar IA",
    description:
      "Identifica oportunidades en la cadena de valor y compáralas según su impacto, la disponibilidad de datos y la dificultad de implementación.",
  },
  {
    title: "Liderar la adopción",
    description:
      "Evalúa cuándo construir una solución, comprarla o trabajar con un socio. Define responsabilidades, capacidades del equipo y criterios para el uso responsable.",
  },
  {
    title: "Competir con IA",
    description:
      "Explora oportunidades para mejorar procesos, productos o servicios. Diseña un piloto con indicadores y criterios para decidir si ajustarlo o ampliarlo.",
  },
];
