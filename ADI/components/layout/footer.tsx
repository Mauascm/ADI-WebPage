import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { contactConfig } from "@/lib/contact-config";
import { navLinks } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-black/20 pb-10 pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-4 rounded-2xl border border-border/60 bg-white/[0.02] px-3 py-2 transition hover:border-primary/35"
              aria-label="ADI - Advanced Data Intelligence"
            >
              <span className="relative flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-black/20">
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <Image
                  src="/branding/adi-logo-noback.png"
                  alt=""
                  fill
                  sizes="96px"
                  className="object-contain p-1 drop-shadow-[0_0_18px_rgba(111,220,255,0.2)]"
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-lg tracking-[0.14em] text-fg">ADI</span>
                <span className="text-xs text-muted-foreground">Advanced Data Intelligence</span>
              </span>
            </Link>

            <p className="max-w-md text-sm text-muted-foreground">
              Automatización, analítica avanzada y productos digitales para convertir operación manual en ventaja
              competitiva.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/90">
              {contactConfig.email} | Ciudad de México
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
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ADI. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

