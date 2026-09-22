"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
export function DecisionDistance() {
  const [connected, setConnected] = useState(false);
  return (
    <div className="distance">
      <div className="segmented" aria-label="Comparar formas de decidir">
        <button
          type="button"
          aria-pressed={!connected}
          onClick={() => setConnected(false)}
        >
          Información fragmentada
        </button>
        <button
          type="button"
          aria-pressed={connected}
          onClick={() => setConnected(true)}
        >
          Con Data & AI Office
        </button>
      </div>
      <div className={`distance-track ${connected ? "is-connected" : ""}`}>
        {(connected
          ? ["Preguntar", "Base compartida", "Decidir"]
          : ["Preguntar", "Buscar", "Cruzar", "Validar", "Decidir"]
        ).map((step, i) => (
          <div className="distance-step" key={step}>
            <span className="step-point">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </div>
        ))}
      </div>
      <p aria-live="polite">
        {connected
          ? "Las fuentes, reglas y validaciones permanecen conectadas. La siguiente pregunta empieza más cerca de una respuesta."
          : "Cuando cada respuesta exige reconstruir el camino, la decisión espera. Y el trabajo vuelve a empezar."}
      </p>
    </div>
  );
}
