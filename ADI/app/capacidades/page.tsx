import { PageIntro, Eyebrow } from "@/components/ui/editorial";
import { CapabilityExplorer } from "@/components/visuals/capability-explorer";
import { BusinessSection, AISection } from "@/components/sections/office-story";
import { CTASection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Capacidades de Datos e IA | ADI",
  description:
    "Ingeniería y arquitectura de datos, BI, ciencia de datos, cloud, automatización, gobierno e IA. Disciplinas conectadas con tus decisiones de negocio.",
  path: "/capacidades",
});
export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        number="02"
        label="CAPACIDADES"
        title={
          <>
            Distintas disciplinas.
            <br />
            <span>Un mismo contexto.</span>
          </>
        }
        description="Cada prioridad necesita una combinación diferente de especialidades. Las integramos alrededor de la decisión que quieres mejorar."
      />
      <section className="wrap capability-page">
        <div className="capability-legend">
          <span className="micro">LA CAPACIDAD</span>
          <span className="micro">ABRE UNA DISCIPLINA PARA EXPLORARLA ↓</span>
        </div>
        <CapabilityExplorer />
      </section>
      <section className="section wrap">
        <div className="section-split">
          <div>
            <Eyebrow>LA CONEXIÓN ES EL VALOR</Eyebrow>
            <h2>
              Un pronóstico no termina
              <br />
              en un modelo.
            </h2>
          </div>
          <p className="section-aside">
            Necesita fuentes confiables, reglas del negocio, infraestructura,
            una interfaz de decisión y seguimiento. ADI conecta esas disciplinas
            para llevarlo a la operación.
          </p>
        </div>
        <div className="horizontal-flow">
          {["Fuentes", "Reglas", "Modelos", "Operación", "Decisiones"].map(
            (step, i) => (
              <div key={step}>
                <span className="micro">0{i + 1}</span>
                <h3>{step}</h3>
                <span aria-hidden="true">→</span>
              </div>
            ),
          )}
        </div>
      </section>
      <BusinessSection />
      <AISection />
      <CTASection />
    </>
  );
}
