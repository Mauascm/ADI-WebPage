"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="rounded-2xl border border-border/70 bg-bg/70 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ir al inicio"
              title="ADI - Advanced Data Intelligence"
            >
              <span className="relative flex h-10 w-12 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-white/[0.03] shadow-soft">
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <Image
                  src="/branding/adi-logo-noback.png"
                  alt=""
                  width={768}
                  height={768}
                  priority
                  className="relative h-12 w-12 scale-[1.65] object-contain drop-shadow-[0_0_12px_rgba(111,220,255,0.22)]"
                  aria-hidden="true"
                />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-display text-sm tracking-[0.18em] text-fg sm:text-base">ADI</span>
                <span className="hidden text-[11px] leading-tight text-muted-foreground 2xl:block">
                  Advanced Data Intelligence
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      active && "text-fg",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300",
                        active && "scale-x-100",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <ButtonLink href="/servicios" variant="secondary" size="md">
                Ver servicios
              </ButtonLink>
              <ButtonLink href="/contacto" size="md">
                Solicitar diagnóstico
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-fg transition hover:border-primary/60 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={cn(
              "grid transition-all duration-300 md:hidden",
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <nav className="space-y-1 border-t border-border/70 pt-3" aria-label="Navegación móvil">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-fg",
                        active && "bg-white/5 text-fg",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-3 flex flex-col gap-2 pb-2">
                  <ButtonLink href="/servicios" variant="secondary" onClick={() => setOpen(false)}>
                    Ver servicios
                  </ButtonLink>
                  <ButtonLink href="/contacto" onClick={() => setOpen(false)}>
                    Solicitar diagnóstico
                  </ButtonLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
