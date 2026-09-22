import { ActionLink, Eyebrow } from "@/components/ui/editorial";
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>LA SIGUIENTE DECISIÓN</Eyebrow>
          <h2>
            No necesitas definir
            <br />
            toda la transformación.
            <br />
            <span>Solo la primera prioridad.</span>
          </h2>
        </div>
        <div>
          <p>
            Empecemos por una decisión importante o un problema operativo que
            hoy merece una mejor respuesta.
          </p>
          <ActionLink href="/contacto">
            Conversemos sobre tu prioridad
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
