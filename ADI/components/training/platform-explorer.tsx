"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  standardTrainingSteps,
  trainingContactHref,
  trainingPlatforms,
} from "@/lib/training-content";

export function PlatformExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = {
      ArrowRight: (index + 1) % trainingPlatforms.length,
      ArrowLeft:
        (index - 1 + trainingPlatforms.length) % trainingPlatforms.length,
      Home: 0,
      End: trainingPlatforms.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="training-platform">
      <div
        className="training-platform-tabs"
        role="tablist"
        aria-label="Plataformas para la adopción de IA"
      >
        {trainingPlatforms.map((platform, index) => (
          <button
            key={platform.id}
            id={`training-tab-${platform.id}`}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            role="tab"
            aria-controls={`training-panel-${platform.id}`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            {platform.name}
          </button>
        ))}
      </div>
      {trainingPlatforms.map((platform, index) => {
        const steps =
          "steps" in platform ? platform.steps : standardTrainingSteps;
        return (
          <div
            key={platform.id}
            id={`training-panel-${platform.id}`}
            className="training-platform-panel"
            role="tabpanel"
            aria-labelledby={`training-tab-${platform.id}`}
            tabIndex={0}
            hidden={selected !== index}
          >
            <div className="training-platform-intro">
              <div>
                <span className="micro">RUTA DE ADOPCIÓN / {platform.name}</span>
                <h3>{platform.title}</h3>
                <p>{platform.description}</p>
              </div>
              <span className="training-platform-meta">{platform.meta}</span>
            </div>
            <ol className="training-platform-steps">
              {steps.map((step) => (
                <li key={step.title}>
                  <span className="micro">{step.label}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  {"program" in step && (
                    <Link href={trainingContactHref(step.program)}>
                      Cotizar este módulo
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                </li>
              ))}
            </ol>
            {platform.id === "copilot" && (
              <details className="training-facts">
                <summary>Ver ficha de Microsoft 365 Copilot</summary>
                <dl>
                  <div>
                    <dt>Perfil</dt>
                    <dd>
                      Equipos administrativos, de negocio y de operación que
                      trabajan con Microsoft 365. La entrada a Construye Agentes
                      se acuerda según la experiencia del grupo.
                    </dd>
                  </div>
                  <div>
                    <dt>Requisitos</dt>
                    <dd>
                      Cuenta de trabajo y acceso a Copilot. Antes de impartir,
                      acordamos licencias, permisos y fuentes autorizadas.
                    </dd>
                  </div>
                  <div>
                    <dt>Alcance base</dt>
                    <dd>
                      Domina y Construye Agentes se pueden contratar por
                      separado (12 h cada uno). La ruta integral suma Aplica al
                      negocio (9 h), para un total de 33 h.
                    </dd>
                  </div>
                  <div>
                    <dt>Práctica y entregable</dt>
                    <dd>
                      En Domina, un análisis o documento revisado. En
                      Construye, un agente con casos de prueba. En Aplica, un
                      caso de trabajo documentado para validación del equipo.
                    </dd>
                  </div>
                </dl>
              </details>
            )}
            <Link
              href={trainingContactHref(platform.program)}
              className="button"
            >
              {platform.action}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
