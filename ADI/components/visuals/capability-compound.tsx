const stages = [
  { label: "01 / BASE", title: "Fuentes y reglas", detail: "Conectamos y documentamos." },
  { label: "02 / USO", title: "Métricas compartidas", detail: "La información guía decisiones." },
  { label: "03 / OPERACIÓN", title: "Procesos y modelos", detail: "Validamos y monitoreamos." },
  { label: "04 / SIGUIENTE CICLO", title: "Capacidad reutilizable", detail: "La próxima prioridad aprovecha la base." },
];

export function CapabilityCompound() {
  return (
    <figure className="continuity-cycle compound" aria-label="Ciclo de capacidad acumulada: fuentes y reglas, métricas compartidas, procesos y modelos, capacidad reutilizable; cada ciclo fortalece el contexto compartido">
      <svg className="continuity-cycle-track" viewBox="0 0 500 500" aria-hidden="true">
        <defs>
          <marker id="cycle-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M 1 1 L 7 4.5 L 1 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </marker>
        </defs>
        <circle cx="250" cy="250" r="174" className="continuity-cycle-ring" />
        <path d="M 250 76 A 174 174 0 0 1 424 250" markerEnd="url(#cycle-arrow)" />
        <path d="M 424 250 A 174 174 0 0 1 250 424" markerEnd="url(#cycle-arrow)" />
        <path d="M 250 424 A 174 174 0 0 1 76 250" markerEnd="url(#cycle-arrow)" />
        <path d="M 76 250 A 174 174 0 0 1 250 76" markerEnd="url(#cycle-arrow)" />
      </svg>
      <div className="continuity-cycle-center">
        <span className="micro">ADI / MEMORIA COMPARTIDA</span>
        <strong>Lo que aprendemos permanece.</strong>
        <span className="continuity-cycle-loop" aria-hidden="true">↻</span>
      </div>
      {stages.map((stage, index) => (
        <div className={`continuity-cycle-stage continuity-cycle-stage-${index + 1}`} key={stage.label}>
          <span className="micro">{stage.label}</span>
          <strong>{stage.title}</strong>
          <p>{stage.detail}</p>
        </div>
      ))}
      <figcaption className="compound-note figure-note">
        Cada ciclo deja una base mejor para la siguiente prioridad.
      </figcaption>
    </figure>
  );
}
