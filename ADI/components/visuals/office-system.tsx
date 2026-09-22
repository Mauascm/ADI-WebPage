"use client";
import { useState } from "react";
import { ArrowRight, Database, Layers3, Workflow } from "lucide-react";
import { businessCases } from "@/lib/site-content";

export function OfficeSystem() {
  const [selected, setSelected] = useState(0);
  const item = businessCases[selected];
  return (
    <div
      className="office-system"
      aria-label="Explora cómo ADI conecta información y decisiones"
    >
      <div className="system-top">
        <span className="micro">EL SISTEMA DETRÁS DE LA DECISIÓN</span>
        <span className="system-caption">
          <i /> Modelo ilustrativo
        </span>
      </div>
      <div className="system-body" key={selected}>
        <div className="system-sources">
          <span className="micro">01 / TU INFORMACIÓN</span>
          <div className="source-list">
            {item.sources.map((source, i) => (
              <div
                className="source"
                key={source}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Database size={14} aria-hidden="true" />
                <span>{source}</span>
                <i />
              </div>
            ))}
          </div>
          <span className="system-note">Sistemas que ya utilizas</span>
        </div>
        <div className="signal-connector" aria-hidden="true">
          <svg viewBox="0 0 100 180" preserveAspectRatio="none">
            <path d="M0 35 H28 Q45 35 45 55 V70 Q45 90 65 90 H100 M0 90 H100 M0 145 H28 Q45 145 45 125 V110 Q45 90 65 90" />
            <path className="travel" d="M0 90 H100" />
          </svg>
          <span>→</span>
        </div>
        <div className="system-core">
          <div className="core-title">
            <Layers3 size={22} aria-hidden="true" />
            <span>
              ADI<span>DATA & AI OFFICE</span>
            </span>
            <span className="core-cross" aria-hidden="true">
              +
            </span>
          </div>
          <div className="core-disciplines">
            {item.disciplines.map((discipline) => (
              <span key={discipline}>
                <i />
                {discipline}
              </span>
            ))}
          </div>
          <div className="core-foundation">
            Contexto compartido <span>·</span> Capacidad continua
          </div>
        </div>
        <div className="signal-connector connector-out" aria-hidden="true">
          <svg viewBox="0 0 100 180" preserveAspectRatio="none">
            <path d="M0 90 H100" />
            <path className="travel" d="M0 90 H100" />
          </svg>
          <span>→</span>
        </div>
        <div className="system-decision">
          <span className="micro">02 / TU SIGUIENTE DECISIÓN</span>
          <Workflow size={22} className="decision-icon" aria-hidden="true" />
          <p>{item.decision}</p>
          <span className="system-note">Información lista para actuar</span>
        </div>
      </div>
      <div className="system-controls">
        <span className="micro">
          EXPLORA UNA PRIORIDAD <ArrowRight size={13} aria-hidden="true" />
        </span>
        <div className="priority-buttons">
          {businessCases.slice(0, 4).map((option, i) => (
            <button
              type="button"
              key={option.name}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {item.name}: {item.sources.join(", ")} se conectan mediante{" "}
        {item.disciplines.join(", ")} para {item.decision.toLowerCase()}
      </p>
    </div>
  );
}
