import { ArrowDown } from "lucide-react";
import { ActionLink, Eyebrow } from "@/components/ui/editorial";
import { OfficeSystem } from "@/components/visuals/office-system";
export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-heading">
        <Eyebrow>ADI — DATA & AI OFFICE</Eyebrow>
        <h1>
          Tu equipo de <span className="hero-emphasis">Datos + IA.</span>
          <br />
          <span>Sin construirlo desde cero.</span>
        </h1>
        <p>
          Tu equipo externo de Datos e IA, integrado a tu negocio.
          <br className="desktop-break" /> Conectamos tu información con las
          decisiones que importan.
        </p>
        <div className="hero-actions">
          <ActionLink href="/contacto">Conversemos</ActionLink>
          <ActionLink href="/data-ai-office" secondary>
            Cómo funciona
          </ActionLink>
        </div>
      </div>
      <OfficeSystem />
      <div className="hero-bottom">
        <span>UNA RELACIÓN. MÚLTIPLES DISCIPLINAS.</span>
        <span>
          DATOS <i>→</i> DECISIONES <i>→</i> RESULTADOS
        </span>
        <a href="#distancia" aria-label="Explorar el modelo de ADI">
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
