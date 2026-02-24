import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Convirtamos tu operación en un sistema que escala",
  description = "Empezamos con una conversación clara del problema, datos disponibles y prioridades para definir la mejor ruta.",
  primaryLabel = "Solicitar diagnóstico",
  primaryHref = "/contacto",
  secondaryLabel = "Ver servicios",
  secondaryHref = "/servicios",
}: CTASectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-bg/80 to-bg p-8 shadow-glow sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -right-16 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="max-w-3xl font-display text-3xl leading-tight text-fg sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
