"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { businessCases } from "@/lib/site-content";
export function BusinessExplorer() {
  const [selected, setSelected] = useState(0);
  const item = businessCases[selected];
  return (
    <div className="business-explorer">
      <div className="business-tabs" aria-label="Seleccionar área de negocio">
        {businessCases.map((option, i) => (
          <button
            type="button"
            key={option.name}
            onClick={() => setSelected(i)}
            aria-pressed={i === selected}
          >
            <span>0{i + 1}</span>
            {option.name}
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="business-detail" aria-live="polite">
        <span className="micro">
          UNA PREGUNTA QUE IMPORTA / {item.name.toUpperCase()}
        </span>
        <h3>{item.question}</h3>
        <p>{item.detail}</p>
        <div className="business-disciplines">
          {item.disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="business-outcome">
          <span className="micro">LA DECISIÓN</span>
          <p>{item.decision}</p>
          <Link
            href="/contacto"
            aria-label={`Conversar sobre ${item.name.toLowerCase()}`}
          >
            <ArrowUpRight size={24} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
