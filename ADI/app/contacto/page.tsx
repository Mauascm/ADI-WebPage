import { PageIntro, Eyebrow } from "@/components/ui/editorial";
import { ContactForm } from "@/components/contact/contact-form";
import { contactConfig, contactMailto } from "@/lib/contact-config";
import { buildMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
export const metadata = buildMetadata({
  title: "Conversemos sobre tu primera prioridad | ADI",
  description:
    "Cuéntanos qué decisión o problema operativo quieres resolver. Empecemos una conversación sobre la capacidad de Datos e IA que tu empresa necesita.",
  path: "/contacto",
});
export default function ContactPage() {
  return (
    <>
      <PageIntro
        number="05"
        label="CONVERSEMOS"
        title={
          <>
            ¿Qué decisión merece
            <br />
            <span>una mejor respuesta?</span>
          </>
        }
        description="No necesitas tener una solución definida. Cuéntanos qué está pasando en tu operación y qué te gustaría poder decidir con más claridad."
      />
      <section className="wrap contact-layout">
        <aside>
          <Eyebrow>LA PRIMERA CONVERSACIÓN</Eyebrow>
          <h2>
            Empecemos
            <br />
            por tu contexto.
          </h2>
          <ol className="contact-steps">
            <li>
              <span>01</span>La prioridad y su impacto en el negocio.
            </li>
            <li>
              <span>02</span>Las personas, sistemas y datos involucrados.
            </li>
            <li>
              <span>03</span>Un siguiente paso que tenga sentido.
            </li>
          </ol>
          <div className="contact-direct">
            <span className="micro">TAMBIÉN PUEDES ESCRIBIRNOS</span>
            <a href={contactMailto}>
              {contactConfig.email}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            {contactConfig.calendarUrl && (
              <a
                href={contactConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una conversación
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
