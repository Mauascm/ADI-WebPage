"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-content";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (event.shiftKey && document.activeElement === links[0]) {
          event.preventDefault();
          trigger.current?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === links[links.length - 1]
        ) {
          event.preventDefault();
          trigger.current?.focus();
        } else if (
          event.shiftKey &&
          document.activeElement === trigger.current
        ) {
          event.preventDefault();
          links[links.length - 1].focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-wrap wrap">
        <Link
          href="/"
          className="brand"
          aria-label="ADI — Inicio"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/branding/adi-logo-noback.png"
            width={84}
            height={84}
            alt="ADI"
            priority
          />
          <span>
            Advanced Data
            <br />
            Intelligence
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="nav-cta">
          Conversemos <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={trigger}
          className="menu-trigger"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        ref={menu}
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Navegación móvil"
        hidden={!open}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={path === link.href ? "page" : undefined}
          >
            <span>0{index + 1}</span>
            {link.label}
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
        <Link href="/contacto" onClick={() => setOpen(false)}>
          Conversemos <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
        <p>Datos → Decisiones → Resultados</p>
      </nav>
    </header>
  );
}
