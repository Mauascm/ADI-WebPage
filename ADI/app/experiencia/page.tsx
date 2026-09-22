import { PageIntro, Eyebrow } from "@/components/ui/editorial";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Escenarios de aplicación | ADI",
  description:
    "Cómo conectar datos, analítica y automatización con decisiones en inventario, operaciones y finanzas. Escenarios de aplicación de un Data & AI Office.",
  path: "/experiencia",
});
const scenarios = [
  {
    sector: "RETAIL / INVENTARIO",
    title: "De existencias dispersas a decisiones de reposición.",
    context:
      "Ventas e inventario en distintas fuentes dificultan identificar productos inmóviles y necesidades de abastecimiento.",
    approach:
      "Integrar movimientos, acordar reglas de rotación y construir una vista compartida de existencias y demanda.",
    evidence: [
      "Integración con validaciones",
      "Definiciones de rotación",
      "Trazabilidad de los movimientos",
    ],
    result: "Qué reponer, dónde y con qué prioridad.",
  },
  {
    sector: "OPERACIONES / LOGÍSTICA",
    title: "Del reporte aislado al contexto operativo.",
    context:
      "Los indicadores por área no explican dónde se acumulan retrasos o se pierde capacidad.",
    approach:
      "Unificar eventos operativos, definir tiempos y estados comparables y diseñar seguimiento por responsabilidad.",
    evidence: [
      "Modelo de eventos",
      "Indicadores por proceso",
      "Alertas y responsables",
    ],
    result: "En qué punto intervenir y quién debe actuar.",
  },
  {
    sector: "FINANZAS / AUTOMATIZACIÓN",
    title: "De conciliar todo a revisar lo que importa.",
    context:
      "Controles y conciliaciones recurrentes consumen tiempo en identificar diferencias entre fuentes.",
    approach:
      "Documentar reglas, automatizar cruces y dirigir las excepciones hacia una revisión humana con evidencia.",
    evidence: [
      "Reglas documentadas",
      "Registro de excepciones",
      "Flujo de revisión",
    ],
    result: "Qué diferencias requieren atención y por qué.",
  },
];
export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        number="04"
        label="EXPERIENCIA APLICADA"
        title={
          <>
            El criterio técnico,
            <br />
            <span>puesto en contexto.</span>
          </>
        }
        description="Así se traduce una capacidad de Datos e IA en trabajo concreto. Escenarios de aplicación para entender qué construir y qué decisión apoyar."
      />
      <section className="wrap scenarios">
        <p className="scenario-note">
          Escenarios ilustrativos; no representan casos de clientes ni
          resultados medidos.
        </p>
        {scenarios.map((item, i) => (
          <article className="scenario" key={item.sector}>
            <div className="scenario-index">0{i + 1}</div>
            <div>
              <Eyebrow>{item.sector}</Eyebrow>
              <h2>{item.title}</h2>
              <div className="scenario-columns">
                <div>
                  <h3>El punto de partida</h3>
                  <p>{item.context}</p>
                </div>
                <div>
                  <h3>La intervención</h3>
                  <p>{item.approach}</p>
                </div>
              </div>
              <div className="evidence">
                <span className="micro">LO QUE QUEDA</span>
                {item.evidence.map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </div>
              <p className="scenario-decision">
                <span>La decisión →</span>
                {item.result}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="section wrap">
        <div className="section-split">
          <div>
            <Eyebrow>CRITERIOS DE ENTREGA</Eyebrow>
            <h2>
              La solución debe poder
              <br />
              operarse y explicarse.
            </h2>
          </div>
          <ul className="editorial-list">
            <li>Datos y reglas con trazabilidad.</li>
            <li>Validación con responsables del negocio.</li>
            <li>Documentación y transferencia de contexto.</li>
            <li>Seguimiento acordado de adopción y desempeño.</li>
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
