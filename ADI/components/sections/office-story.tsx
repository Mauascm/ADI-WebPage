import { ArrowRight, Check } from "lucide-react";
import { SectionTitle, TextLink, Eyebrow } from "@/components/ui/editorial";
import { DecisionDistance } from "@/components/visuals/decision-distance";
import { CapabilityCompound } from "@/components/visuals/capability-compound";
import { CapabilityExplorer } from "@/components/visuals/capability-explorer";
import { BusinessExplorer } from "@/components/visuals/business-explorer";
import { OperatingCycle } from "@/components/visuals/operating-cycle";

export function ProblemSection() {
  return (
    <section className="section wrap" id="distancia">
      <div className="section-split">
        <SectionTitle
          number="01"
          label="LA DISTANCIA"
          title={
            <>
              Tener datos no es
              <br />
              tener una respuesta.
            </>
          }
        />
        <p className="section-aside">
          Tu empresa ya tiene sistemas, información y personas que conocen el
          negocio. Pero responder una pregunta todavía puede exigir buscar,
          cruzar y reconciliar versiones.
        </p>
      </div>
      <DecisionDistance />
    </section>
  );
}
export function TeamSection() {
  return (
    <section className="section section-tinted">
      <div className="wrap">
        <div className="section-split">
          <SectionTitle
            number="02"
            label="OTRA FORMA DE CONSTRUIR"
            title={
              <>
                Necesitas la capacidad.
                <br />
                <span>No toda la complejidad.</span>
              </>
            }
          />
          <p className="section-aside">
            Crear un equipo interno es una decisión estratégica. Cuando aún no
            necesitas una organización completa, ADI integra las disciplinas que
            tu negocio requiere.
          </p>
        </div>
        <div className="team-comparison">
          <div className="internal-team">
            <span className="micro">CONSTRUIR INTERNAMENTE</span>
            <h3>Una organización que desarrollar.</h3>
            <div className="role-grid">
              {[
                "Ingeniería de datos",
                "Ciencia de datos",
                "BI y analítica",
                "Cloud",
                "IA / ML",
                "Arquitectura",
              ].map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <p>
              Reclutamiento, evaluación técnica, coordinación, desarrollo y
              continuidad del equipo.
            </p>
          </div>
          <div className="adi-team">
            <span className="micro">INTEGRAR ADI</span>
            <h3>
              Una relación.
              <br />
              Una capacidad compartida.
            </h3>
            <ul>
              {[
                "Especialistas según la iniciativa",
                "Coordinación técnica y de negocio",
                "Conocimiento que permanece",
                "Capacidad acordada y priorizada",
              ].map((text) => (
                <li key={text}>
                  <Check size={15} aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
            <TextLink href="/data-ai-office">
              Conoce tu Data & AI Office
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ContinuitySection() {
  return (
    <section className="section wrap">
      <div className="continuity-grid">
        <div>
          <SectionTitle
            number="03"
            label="CAPACIDAD QUE PERMANECE"
            title={
              <>
                Cada iniciativa parte
                <br />
                de una base mejor.
              </>
            }
            description="Fuentes, reglas y decisiones dejan de vivir en proyectos aislados. Se convierten en contexto compartido para tu siguiente prioridad."
          />
          <TextLink href="/modelo">Así construimos continuidad</TextLink>
        </div>
        <CapabilityCompound />
      </div>
    </section>
  );
}
export function CapabilitiesSection() {
  return (
    <section className="section wrap top-rule">
      <div className="section-split">
        <SectionTitle
          number="04"
          label="CAPACIDADES"
          title={
            <>
              El equipo que
              <br />
              cada iniciativa necesita.
            </>
          }
        />
        <div className="section-aside">
          <p>
            Ingeniería, analítica, arquitectura, automatización e IA. Distintas
            disciplinas trabajando con el mismo contexto de negocio.
          </p>
          <TextLink href="/capacidades">Explorar las ocho capacidades</TextLink>
        </div>
      </div>
      <CapabilityExplorer compact />
    </section>
  );
}
export function BusinessSection() {
  return (
    <section className="section light-section">
      <div className="wrap">
        <SectionTitle
          number="05"
          label="EL NEGOCIO AL CENTRO"
          title={
            <>
              Un equipo.
              <br />
              Distintos frentes de decisión.
            </>
          }
        />
        <BusinessExplorer />
      </div>
    </section>
  );
}
export function ModelSection() {
  return (
    <section className="section wrap">
      <div className="section-split">
        <SectionTitle
          number="06"
          label="MODELO OPERATIVO"
          title={
            <>
              Prioridades claras.
              <br />
              Avance continuo.
            </>
          }
        />
        <div className="section-aside">
          <p>
            Acordamos capacidad recurrente, priorizamos contigo y activamos
            especialistas según cada iniciativa. El alcance es finito; el
            aprendizaje se acumula.
          </p>
          <TextLink href="/modelo">Cómo funciona la relación</TextLink>
        </div>
      </div>
      <OperatingCycle />
    </section>
  );
}
export function AISection() {
  return (
    <section className="section ai-section">
      <div className="wrap ai-grid">
        <div>
          <Eyebrow>07 / INTELIGENCIA CON CRITERIO</Eyebrow>
          <h2>
            No hacemos IA
            <br />
            por hacer <span>IA.</span>
          </h2>
          <p className="lead">
            La IA es una capa de capacidad.
            <br />
            No un punto de partida obligatorio.
          </p>
        </div>
        <div className="ai-foundation">
          <p>
            Primero, una decisión que mejorar. Después, los datos, reglas,
            permisos y contexto que permiten hacerlo con confianza.
          </p>
          <div className="foundation-stack">
            {[
              "IA aplicada a una prioridad",
              "Contexto y trazabilidad",
              "Reglas y permisos",
              "Datos confiables",
            ].map((item, i) => (
              <div key={item}>
                <span>0{4 - i}</span>
                {item}
                {i === 0 && <ArrowRight size={16} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <p className="figure-note">
            Pronósticos · Anomalías · Inteligencia documental · Agentes ·
            Optimización
          </p>
        </div>
      </div>
    </section>
  );
}
export function ExperienceSection() {
  return (
    <section className="section wrap proof-section">
      <Eyebrow>08 / DEL CRITERIO A LA OPERACIÓN</Eyebrow>
      <div className="section-split">
        <h2>
          El trabajo se demuestra
          <br />
          en lo que queda funcionando.
        </h2>
        <div className="section-aside">
          <p>
            Integraciones documentadas. Métricas con definición. Modelos
            evaluados. Procesos que el equipo puede operar y explicar.
          </p>
          <TextLink href="/experiencia">
            Explorar escenarios de aplicación
          </TextLink>
        </div>
      </div>
    </section>
  );
}
