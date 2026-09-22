export function CapabilityCompound() {
  const levels = [
    {
      label: "Base",
      title: "Fuentes y reglas",
      text: "Entendemos, conectamos y documentamos.",
      width: "40%",
    },
    {
      label: "Uso",
      title: "Métricas compartidas",
      text: "La información entra en las decisiones.",
      width: "60%",
    },
    {
      label: "Operación",
      title: "Procesos y modelos",
      text: "Automatizamos, validamos y monitoreamos.",
      width: "80%",
    },
    {
      label: "Escala",
      title: "Capacidad reutilizable",
      text: "Nuevas iniciativas aprovechan la base.",
      width: "100%",
    },
  ];
  return (
    <div className="compound">
      {levels.map((level, i) => (
        <div className="compound-row" key={level.label}>
          <span className="micro">
            0{i + 1} / {level.label}
          </span>
          <div className="compound-bar" style={{ width: level.width }}>
            <span>{level.title}</span>
            <span aria-hidden="true">+</span>
          </div>
          <p>{level.text}</p>
        </div>
      ))}
      <p className="figure-note">
        Progresión conceptual. Las prioridades y el ritmo dependen de cada
        organización.
      </p>
    </div>
  );
}
