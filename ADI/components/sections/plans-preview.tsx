import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/editorial";

export function PlansPreview() {
  return (
    <section className="plans-preview wrap" aria-labelledby="plans-preview-title">
      <div>
        <Eyebrow>PLANES DATA & AI OFFICE</Eyebrow>
        <h2 id="plans-preview-title">
          Una capacidad continua.
          <br />
          <span>Un plan para cada etapa.</span>
        </h2>
        <p>
          Desde Business Intelligence hasta IA y gobernanza. Conoce cinco
          formas de integrar el equipo que tu negocio necesita.
        </p>
      </div>
      <Link href="/planes" className="plans-preview-link">
        <span>
          <small>DESDE</small>
          <strong>$50,000 MXN</strong>
          <small>+ IVA / MES</small>
        </span>
        <span>
          Explorar planes <ArrowUpRight size={19} aria-hidden="true" />
        </span>
      </Link>
    </section>
  );
}
