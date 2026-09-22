import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site-content";
import { contactConfig, contactMailto } from "@/lib/contact-config";
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <div>
          <Link
            className="brand footer-brand"
            href="/"
            aria-label="ADI — Inicio"
          >
            <Image
              src="/branding/adi-logo-noback.png"
              width={100}
              height={100}
              alt="ADI"
            />
            <span>
              Advanced Data
              <br />
              Intelligence
            </span>
          </Link>
          <p>
            La capacidad detrás de
            <br />
            tu próxima decisión.
          </p>
        </div>
        <nav aria-label="Navegación del pie">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto">Contacto</Link>
        </nav>
        <div className="footer-contact">
          <span className="micro">HABLEMOS DE TU NEGOCIO</span>
          <a href={contactMailto}>{contactConfig.email} ↗</a>
          <p>Ciudad de México</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ADI · Advanced Data Intelligence
        </span>
        <span>DATA → DECISIONS → RESULTS</span>
      </div>
    </footer>
  );
}
