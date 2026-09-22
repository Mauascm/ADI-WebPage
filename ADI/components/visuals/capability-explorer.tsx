import { ArrowUpRight, Plus } from "lucide-react";
import { capabilities } from "@/lib/site-content";
export function CapabilityExplorer({ compact = false }: { compact?: boolean }) {
  return (
    <div className="capability-list">
      {(compact
        ? capabilities.filter((_, i) => [0, 3, 4, 5].includes(i))
        : capabilities
      ).map((item, i) => (
        <details key={item.id} className="capability-item" id={item.id}>
          <summary>
            <span className="capability-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="capability-name">
              {item.name}
              <small>{item.discipline}</small>
            </span>
            <span className="capability-description">{item.description}</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="capability-detail">
            <div>
              <span className="micro">{item.layer}</span>
              <p>{item.detail}</p>
            </div>
            <div>
              <span className="micro">EN EL NEGOCIO</span>
              <h3>{item.question}</h3>
              <p>{item.result}</p>
              <a className="text-link" href="/contacto">
                Explorar esta prioridad{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
