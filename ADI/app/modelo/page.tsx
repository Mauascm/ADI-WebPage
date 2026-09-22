import { PageIntro, Eyebrow } from "@/components/ui/editorial";
import { OperatingCycle } from "@/components/visuals/operating-cycle";
import { CapabilityCompound } from "@/components/visuals/capability-compound";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Modelo de capacidad continua | ADI",
  description:
    "Capacidad recurrente de Datos e IA, prioridades compartidas y sprints con resultados utilizables. Un roadmap que evoluciona con tu negocio.",
  path: "/modelo",
});
export default function ModelPage() {
  return (
    <>
      <PageIntro
        number="03"
        label="EL MODELO"
        title={
          <>
            Una prioridad a la vez.
            <br />
            <span>Una capacidad que crece.</span>
          </>
        }
        description="Una relación continua con capacidad acordada, especialistas según la iniciativa y un roadmap que se ajusta al negocio."
      />
      <section className="wrap">
        <OperatingCycle />
      </section>
      <section className="section wrap">
        <div className="section-split">
          <div>
            <Eyebrow>CÓMO SE ORGANIZA LA RELACIÓN</Eyebrow>
            <h2>
              Claridad para avanzar.
              <br />
              Criterio para priorizar.
            </h2>
          </div>
          <p className="section-aside">
            La capacidad es finita y se asigna intencionalmente. Acordamos qué
            entra en cada ciclo, qué espera y qué necesita resolverse antes.
          </p>
        </div>
        <div className="principles">
          {[
            [
              "01 / ACORDAR",
              "Capacidad recurrente",
              "Definimos alcance, disponibilidad, responsabilidades y forma de seguimiento de acuerdo con tu contexto.",
            ],
            [
              "02 / PRIORIZAR",
              "Un roadmap compartido",
              "Ordenamos iniciativas por valor, viabilidad y dependencias. Las nuevas solicitudes se evalúan contra lo ya acordado.",
            ],
            [
              "03 / EJECUTAR",
              "Sprints con propósito",
              "Buscamos un resultado utilizable en cada sprint. Validamos con el negocio y documentamos lo construido.",
            ],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span className="micro">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tinted">
        <div className="wrap continuity-grid">
          <div>
            <Eyebrow>EL EFECTO ACUMULADO</Eyebrow>
            <h2>
              El siguiente paso
              <br />
              no empieza de cero.
            </h2>
            <p className="lead">
              La primera iniciativa descubre fuentes y reglas. Las siguientes
              pueden reutilizar integraciones, definiciones y arquitectura.
            </p>
            <p className="body-copy">
              El conocimiento se documenta, se comparte y evoluciona. Así
              reducimos la dependencia de personas individuales y preservamos
              contexto entre iniciativas.
            </p>
          </div>
          <CapabilityCompound />
        </div>
      </section>
      <section className="section wrap faq">
        <Eyebrow>PREGUNTAS SOBRE EL MODELO</Eyebrow>
        <h2>Antes de empezar.</h2>
        {[
          [
            "¿Cómo elegimos la primera iniciativa?",
            "Partimos de una decisión o fricción operativa relevante. Revisamos impacto, datos disponibles y dependencias; con eso definimos una primera prioridad viable.",
          ],
          [
            "¿Qué pasa si todavía no hay claridad?",
            "Podemos empezar con un diagnóstico acotado para entender fuentes, procesos y viabilidad. Su alcance se acuerda antes de ejecutar.",
          ],
          [
            "¿Esto sustituye a mi equipo de TI?",
            "Trabajamos junto a TI y a las áreas de negocio. Acordamos accesos, responsabilidades y criterios de operación para complementar las capacidades existentes.",
          ],
          [
            "¿Puedo solicitar cualquier cosa en cualquier momento?",
            "Puedes plantear nuevas necesidades. La capacidad no es ilimitada: las solicitudes se priorizan y se acuerda cómo afectan al roadmap y a los compromisos del ciclo.",
          ],
          [
            "¿Dónde queda el conocimiento?",
            "En documentación, definiciones y repositorios acordados con tu empresa. La continuidad incluye mantener accesible el contexto y preparar una transferencia ordenada cuando corresponda.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <CTASection />
    </>
  );
}
