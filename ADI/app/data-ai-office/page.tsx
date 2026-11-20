import { PageIntro, Eyebrow } from "@/components/ui/editorial";
import { OfficeSystem } from "@/components/visuals/office-system";
import {
  TeamSection,
  ContinuitySection,
} from "@/components/sections/office-story";
import { CTASection } from "@/components/sections/cta-section";
import { PlansPreview } from "@/components/sections/plans-preview";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Data & AI Office | ADI",
  description:
    "Una capacidad externa de Datos e IA que se integra a tu empresa: especialistas, coordinación y continuidad sin construir todo un departamento desde cero.",
  path: "/data-ai-office",
});
export default function OfficePage() {
  return (
    <>
      <PageIntro
        number="01"
        label="DATA & AI OFFICE"
        title={
          <>
            Tu próxima capacidad
            <br />
            <span>organizacional.</span>
          </>
        }
        description="ADI es el equipo externo de Datos e IA que se integra a tu negocio. Una relación continua para conectar información, construir soluciones y acompañar las decisiones."
      />
      <section className="wrap diagram-section">
        <OfficeSystem />
      </section>
      <section className="section wrap">
        <div className="section-split">
          <div>
            <Eyebrow>INTEGRADOS A TU CONTEXTO</Eyebrow>
            <h2>
              Conocemos el negocio.
              <br />
              Construimos sobre él.
            </h2>
          </div>
          <div className="section-aside">
            <p>
              Trabajamos con dirección, operación y TI. Tu empresa conserva las
              prioridades y el criterio de negocio; ADI coordina la
              arquitectura, la ejecución y la continuidad técnica.
            </p>
            <p>
              Los especialistas se involucran según la necesidad. Las
              decisiones, definiciones e integraciones permanecen en una base
              documentada y compartida.
            </p>
          </div>
        </div>
        <div className="principles">
          {[
            [
              "01",
              "Una relación",
              "Una coordinación común entre el negocio y las disciplinas técnicas.",
            ],
            [
              "02",
              "Distintas disciplinas",
              "La combinación de capacidades que requiere cada iniciativa.",
            ],
            [
              "03",
              "Memoria compartida",
              "Contexto, reglas y documentación que permanecen entre ciclos.",
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
      <TeamSection />
      <ContinuitySection />
      <section className="section wrap top-rule">
        <div className="section-split">
          <div>
            <Eyebrow>CUÁNDO TIENE SENTIDO</Eyebrow>
            <h2>
              La complejidad ya existe.
              <br />
              Integra la capacidad.
            </h2>
          </div>
          <div className="fit-quadrants" aria-label="Cuatro situaciones en las que ADI puede ayudar">
            <div><span className="micro">01 / DATOS</span><strong>Información dispersa</strong><p>Vive en varios sistemas y áreas.</p></div>
            <div><span className="micro">02 / REPORTES</span><strong>Trabajo manual</strong><p>Conciliar versiones consume tiempo.</p></div>
            <div><span className="micro">03 / EQUIPO</span><strong>Capacidad especializada</strong><p>TI sostiene la operación; faltan perfiles de datos.</p></div>
            <div><span className="micro">04 / SIGUIENTE PASO</span><strong>IA con base confiable</strong><p>Quieres llevar analítica o IA a la práctica.</p></div>
          </div>
        </div>
      </section>
      <PlansPreview />
      <CTASection />
    </>
  );
}
