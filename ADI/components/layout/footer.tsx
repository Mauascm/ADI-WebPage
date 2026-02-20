import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/site-content";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-black/20 pb-10 pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-2">
            <p className="font-display text-xl text-fg">ADI | Advanced Data Intelligence</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Automatización, analítica avanzada y productos digitales para convertir operación manual en ventaja
              competitiva.
            </p>
            {/* Reemplazar email y dirección de contacto oficial */}
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/90">
              contacto@adi-data.com | Ciudad de México
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Sitemap</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-muted-foreground transition hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Redes</p>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ADI. Todos los derechos reservados.</p>
          <p>Aviso legal básico: información de referencia, sujeta a alcance y propuesta formal.</p>
        </div>
      </Container>
    </footer>
  );
}
