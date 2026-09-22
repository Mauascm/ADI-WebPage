import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={secondary ? "button button-secondary" : "button"}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function PageIntro({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>
        {number} / {label}
      </Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </section>
  );
}

export function SectionTitle({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-title">
      <Eyebrow>
        {number} / {label}
      </Eyebrow>
      <h2>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}
