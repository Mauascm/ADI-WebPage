"use client";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { operatingSteps } from "@/lib/site-content";
export function OperatingCycle() {
  const [selected, setSelected] = useState(0);
  const step = operatingSteps[selected];
  return (
    <div className="operating-cycle">
      <div className="cycle-steps" aria-label="Explorar el ciclo de trabajo">
        {operatingSteps.map((item, i) => (
          <button
            type="button"
            key={item.title}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
          >
            <span>0{i + 1}</span>
            {item.title}
            {i === 6 ? (
              <RotateCcw size={15} aria-hidden="true" />
            ) : (
              <ArrowRight size={15} aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
      <div className="cycle-detail" aria-live="polite">
        <span className="cycle-number" aria-hidden="true">
          0{selected + 1}
        </span>
        <div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
        <div className="cycle-output">
          <span className="micro">LO QUE QUEDA</span>
          <p>{step.output}</p>
        </div>
      </div>
      <div className="cycle-baseline">
        <span />
        <span>
          Un resultado utilizable por sprint. Una base mejor para el siguiente.
        </span>
        <RotateCcw size={15} aria-hidden="true" />
      </div>
    </div>
  );
}
