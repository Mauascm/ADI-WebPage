import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { ActionLink, Eyebrow } from "@/components/ui/editorial";
import { comparisonGroups, planContactHref, plans } from "@/lib/plans-content";
import { buildMetadata } from "@/lib/metadata";
import "./plans.css";

export const metadata = buildMetadata({
  title: "Planes Data & AI Office | ADI",
  description:
    "Cinco formas de integrar un Data & AI Office a tu negocio. Conoce los planes Essential, Growth, Intelligence, AI y Enterprise, sus capacidades y precios mensuales en MXN.",
  path: "/planes",
});

const governanceServices = [
  "Diagnóstico de obligaciones por jurisdicción y evaluación de cumplimiento.",
  "Identificación de riesgos legales y regulatorios relacionados con IA.",
  "Políticas de gobernanza, transparencia, privacidad y uso responsable.",
  "Revisión de contratos de proveedores de tecnología, datos e IA.",
  "Documentación, plan de remediación y acompañamiento en su ejecución.",
];

export default function PlansPage() {
  return (
    <>
      <section className="plans-hero wrap">
        <div className="plans-hero-copy">
          <Eyebrow>ADI / PLANES DATA & AI OFFICE</Eyebrow>
          <h1>
            La capacidad que necesitas.
            <br />
            {" "}
            <span>Al ritmo de tu negocio.</span>
          </h1>
          <p>
            Toda la capacidad de un departamento de datos e inteligencia
            artificial, sin la complejidad de construirlo desde cero.
            Especialistas, coordinación y continuidad en un plan que responde a
            tus prioridades.
          </p>
          <div className="plans-hero-actions">
            <ActionLink href="#planes">Explora los planes</ActionLink>
            <Link href="#comparativa" className="plans-plain-link">
              Compara capacidades <ArrowDown size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="plans-hero-visual" aria-hidden="true">
          <span className="plans-visual-top">UN EQUIPO · CINCO FORMAS DE CRECER</span>
          <div className="plans-visual-steps">
            {plans.map((plan, index) => (
              <div key={plan.name} className="plans-visual-step">
                <span>0{index + 1}</span>
                <strong>{plan.name}</strong>
                <i />
              </div>
            ))}
          </div>
          <span className="plans-visual-bottom">DATOS → DECISIONES → RESULTADOS</span>
        </div>
      </section>

      <section id="planes" className="plans-section wrap">
        <div className="plans-section-head">
          <div>
            <Eyebrow>ELIGE TU PUNTO DE PARTIDA</Eyebrow>
            <h2>Un modelo. Distintas escalas.</h2>
          </div>
          <p>
            Cuatro bandas mensuales definidas y una solución Enterprise
            diseñada para tu contexto.
          </p>
        </div>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <article
              className={`plan-card ${plan.name === "Intelligence" ? "plan-card-featured" : ""}`}
              key={plan.name}
            >
              <div className="plan-card-top">
                <span>0{index + 1} / 05</span>
                {plan.name === "Intelligence" && <span className="plan-badge">Gobernanza + analítica</span>}
              </div>
              <h3>ADI {plan.name}</h3>
              <p className="plan-card-summary">{plan.summary}</p>
              <div className="plan-card-price">
                <span>{plan.name === "Enterprise" ? "INVERSIÓN" : "BANDA MENSUAL"}</span>
                <strong>{plan.range}</strong>
                {plan.name !== "Enterprise" && <small>MXN + IVA / mes</small>}
              </div>
              <ul>
                {plan.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={15} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link href={planContactHref(plan.name)} className="plan-card-link">
                Hablemos de {plan.name} <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="plans-price-note">
          Precios en MXN más IVA. Las bandas, límites de fuentes y áreas son una
          referencia comercial; el alcance, la complejidad y las condiciones se
          definen en cada contrato. Las capacidades no implican desarrollos
          ilimitados.
        </p>
      </section>

      <section id="comparativa" className="plans-compare-section">
        <div className="wrap">
          <div className="plans-section-head">
            <div>
              <Eyebrow>QUÉ INCLUYE CADA PLAN</Eyebrow>
              <h2>Compara con claridad.</h2>
            </div>
            <p>
              Del orden de tus datos a la implementación de IA. La capacidad
              se amplía conforme crecen tus necesidades.
            </p>
          </div>
          <div className="plans-table-scroll" role="region" aria-label="Comparativa de planes" tabIndex={0}>
            <table className="plans-table">
              <caption className="sr-only">Comparativa de capacidades de los cinco planes ADI</caption>
              <thead>
                <tr>
                  <th scope="col">Capacidad</th>
                  {plans.map((plan) => (
                    <th scope="col" key={plan.name}>ADI {plan.name}</th>
                  ))}
                </tr>
              </thead>
              {comparisonGroups.map((group) => (
                <tbody key={group.title}>
                  <tr className="plans-table-group">
                    <th scope="rowgroup" colSpan={6}>{group.title}</th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={plans[index].name} className={value === "—" ? "plans-table-empty" : ""}>
                          {value === "—" ? <span aria-label="No incluido">—</span> : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="plans-table-note">
            “Incluido” indica una capacidad disponible dentro del alcance
            contratado; su volumen y entregables se acuerdan según la
            complejidad de cada iniciativa. Desliza la tabla en pantallas
            pequeñas.
          </p>
        </div>
      </section>

      <section id="gobernanza" className="plans-governance wrap">
        <div className="plans-governance-intro">
          <Eyebrow>UNA LÍNEA DE SERVICIO PROPIA</Eyebrow>
          <h2>
            AI Governance
            <br />
            <span>& Legal Compliance.</span>
          </h2>
          <p>
            Ayudamos a las organizaciones a evaluar riesgos, definir políticas
            y organizar su uso de datos e IA frente a las obligaciones
            aplicables en sus jurisdicciones. Puede integrarse desde ADI
            Intelligence o contratarse como consultoría independiente.
          </p>
          <ActionLink href="/contacto?objetivo=AI%20Governance%20%2F%20Compliance">
            Explorar consultoría independiente
          </ActionLink>
        </div>
        <div className="plans-governance-services">
          <span className="plans-small-label">ÁMBITOS DE TRABAJO</span>
          <ul>
            {governanceServices.map((service, index) => (
              <li key={service}>
                <span>0{index + 1}</span>
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="plans-governance-levels">
          <article>
            <span>ADI INTELLIGENCE</span>
            <h3>Consultoría integral.</h3>
            <p>
              Diagnóstico, evaluación, documentación, asesoría y plan de
              adecuación para una jurisdicción principal.
            </p>
          </article>
          <article>
            <span>ADI AI</span>
            <h3>Consultoría + implementación.</h3>
            <p>
              Suma controles técnicos, supervisión de sistemas de IA y
              seguimiento operativo. Hasta dos jurisdicciones, sujeto a
              evaluación.
            </p>
          </article>
          <p>
            La cobertura se determina por jurisdicción y contrato. La
            intervención jurídica requiere profesionales habilitados donde
            corresponda. No se ofrece una garantía absoluta de cumplimiento;
            litigios, certificaciones y representación ante autoridades no
            están incluidos salvo acuerdo expreso.
          </p>
        </div>
      </section>

      <section className="plans-closing">
        <div className="wrap plans-closing-inner">
          <div>
            <Eyebrow>CONSTRUYAMOS TU SIGUIENTE ETAPA</Eyebrow>
            <h2>Tu Data & AI Office, a tu medida.</h2>
          </div>
          <ActionLink href="/contacto?objetivo=Data%20%26%20AI%20Office">
            Conversemos sobre tu plan
          </ActionLink>
        </div>
      </section>
    </>
  );
}
