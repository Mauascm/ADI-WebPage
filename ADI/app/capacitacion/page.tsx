import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/editorial";
import { PlatformExplorer } from "@/components/training/platform-explorer";
import {
  businessTrainingGroups,
  executiveTrainingAgenda,
  technicalTrainingFamilies,
  trainingContactHref,
} from "@/lib/training-content";
import { buildMetadata } from "@/lib/metadata";
import "./training.css";

export const metadata = buildMetadata({
  title: "Capacitación en Datos e IA | ADI",
  description:
    "Programas de capacitación aplicada en datos e inteligencia artificial para empresas, equipos técnicos y directivos.",
  path: "/capacitacion",
});

function TrainingLink({
  program,
  children,
  secondary = false,
}: {
  program: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={trainingContactHref(program)}
      className={secondary ? "button button-secondary" : "button"}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

export default function TrainingPage() {
  return (
    <div className="training-page">
      <section className="training-hero wrap" aria-labelledby="training-title">
        <div className="training-hero-copy">
          <Eyebrow>ADI / CAPACITACIÓN</Eyebrow>
          <h1 id="training-title">
            Capacitación en
            <br />
            <span>Datos + IA.</span>
          </h1>
          <p className="lead">
            Aplica datos e IA a un reto real de tu organización. Al terminar,
            tendrás un entregable que podrás probar y mejorar.
          </p>
          <div className="training-actions">
            <a className="button" href="#empresas">
              Opciones para mi empresa <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#directivos">
              Para directivos <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="training-index" aria-label="Explora la capacitación">
          <div className="training-index-head">
            <span className="micro">SISTEMA DE CAPACITACIÓN</span>
            <span className="micro">ADI / 01</span>
          </div>
          <p className="training-index-label">PARA EMPRESAS</p>
          {[
            ["01", "Adopción de IA para equipos", "#adopcion"],
            ["02", "IA aplicada a áreas de negocio", "#areas"],
            ["03", "TI, Datos y Desarrollo", "#tecnica"],
          ].map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
          <p className="training-index-label">PARA DIRECTIVOS</p>
          <a href="#directivos">
            <span>04</span>
            Estrategia de IA para directivos
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <div className="training-index-foot">
            DATOS <span>→</span> DECISIONES <span>→</span> RESULTADOS
          </div>
        </aside>
      </section>

      <div className="wrap training-rail">
        <span className="micro">FORMACIÓN APLICADA</span>
        <a href="#empresas">
          Explorar las rutas <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>

      <section className="training-chooser wrap" id="empresas">
        <Eyebrow>PARA EMPRESAS</Eyebrow>
        <h2>¿Qué necesita tu equipo?</h2>
        <div className="training-chooser-grid">
          {[
            {
              number: "01",
              label: "ADOPCIÓN DE IA",
              title: "Aprovechar la plataforma de IA de tu empresa",
              href: "#adopcion",
            },
            {
              number: "02",
              label: "IA POR ÁREA",
              title: "Resolver un reto de un área de negocio",
              href: "#areas",
            },
            {
              number: "03",
              label: "TI, DATOS Y DESARROLLO",
              title: "Desarrollar capacidades técnicas",
              href: "#tecnica",
            },
          ].map((item) => (
            <a className="training-choice" href={item.href} key={item.number}>
              <span className="micro">
                {item.number} / {item.label}
              </span>
              <strong>{item.title}</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="section wrap training-section" id="adopcion">
        <div className="training-section-head">
          <div>
            <Eyebrow>01 / PARA EMPRESAS</Eyebrow>
            <h2>Adopción de IA para equipos.</h2>
          </div>
          <p className="lead">
            Incorpora la plataforma de IA que usa tu empresa al trabajo diario.
            Diseñamos la ruta según los roles, sus tareas y las herramientas
            disponibles.
          </p>
        </div>
        <PlatformExplorer />
      </section>

      <section className="section training-light" id="areas">
        <div className="wrap">
          <div className="training-section-head">
            <div>
              <Eyebrow>02 / PARA EMPRESAS</Eyebrow>
              <h2>IA aplicada a áreas de negocio.</h2>
            </div>
            <p className="lead">
              Capacita a tu equipo alrededor de un proceso de su área y de las
              decisiones que toma con la información disponible.
            </p>
          </div>
          <div className="training-feature-grid">
            <div>
              <span className="training-offer-label">COTIZABLE</span>
              <h3>IA generativa aplicada a Supply Chain</h3>
              <p>
                Trabajamos con casos de planeación, inventarios y logística. Los
                ejercicios se ajustan a la función y al contexto de tu equipo.
              </p>
              <div className="training-feature-actions">
                <TrainingLink program="IA generativa aplicada a Supply Chain">
                  Solicitar cotización
                </TrainingLink>
                <a href="#programas-por-area" className="training-inline-link">
                  Ver todos los programas
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <details className="training-facts">
                <summary>Ver ficha del programa</summary>
                <dl>
                  <div>
                    <dt>Perfil</dt>
                    <dd>
                      Equipos de planeación, inventarios, logística y responsables
                      de coordinar decisiones entre esas áreas.
                    </dd>
                  </div>
                  <div>
                    <dt>Requisitos</dt>
                    <dd>
                      Una plataforma de IA autorizada y un caso de práctica.
                      Podemos usar datos de ejemplo o información autorizada.
                    </dd>
                  </div>
                  <div>
                    <dt>Alcance base</dt>
                    <dd>
                      Seleccionamos un problema del proceso, organizamos la
                      información, contrastamos alternativas y documentamos
                      criterios de decisión. Duración y modalidad se acuerdan
                      según el caso y el grupo.
                    </dd>
                  </div>
                  <div>
                    <dt>Práctica y entregable</dt>
                    <dd>
                      En inventarios, el equipo analiza excepciones y prepara
                      una recomendación de reposición con supuestos, criterios y
                      puntos para revisión humana.
                    </dd>
                  </div>
                </dl>
                <div className="training-supply-fit">
                  <h4>Elige según la decisión de tu equipo</h4>
                  <p>
                    <strong>Supply Chain:</strong> coordinar planeación,
                    reposición y logística entre áreas.
                  </p>
                  <p>
                    <strong>Almacenes:</strong> dar seguimiento a incidencias,
                    listas de verificación y pendientes entre turnos.
                  </p>
                  <p>
                    <strong>Compras:</strong> comparar ofertas y preparar una
                    negociación con proveedores.
                  </p>
                </div>
              </details>
            </div>
            <aside className="training-case">
              <span className="micro">EJEMPLO DE PRÁCTICA / INVENTARIOS</span>
              <h3>¿Qué conviene reponer primero?</h3>
              <ol>
                {[
                  "Identificar excepciones en un conjunto de datos de inventario.",
                  "Contrastar existencias, demanda y restricciones de reposición.",
                  "Explicar qué priorizar y qué información hace falta para decidir.",
                ].map((step, i) => (
                  <li key={step}>
                    <span>0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p>
                <strong>Entregable de ejemplo.</strong> Recomendación de
                reposición con criterios de decisión.
              </p>
            </aside>
          </div>

          <div className="training-catalog" id="programas-por-area">
            <div className="training-section-head">
              <div>
                <Eyebrow>EXPLORA POR FUNCIÓN</Eyebrow>
                <h3>Programas por área</h3>
              </div>
              <p>
                Programas que podemos adaptar al reto de tu equipo, con un
                ejemplo de lo que podría producir.
              </p>
            </div>
            <div className="training-catalog-grid">
              {businessTrainingGroups.map((group) => (
                <div className="training-catalog-group" key={group.label}>
                  <span className="micro">{group.label}</span>
                  {group.programs.map((program) => (
                    <details id={`programa-${program.id}`} key={program.id}>
                      <summary>{program.title}</summary>
                      <div className="training-catalog-detail">
                        <span className="training-offer-label">A MEDIDA</span>
                        <p>{program.description}</p>
                        <p>
                          <strong>Ejemplo de entregable.</strong>{" "}
                          {program.deliverable}
                        </p>
                        <Link href={trainingContactHref(program.title)}>
                          Consultar este programa
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    </details>
                  ))}
                </div>
              ))}
            </div>
            <p className="training-environment">
              <strong>Adaptación al entorno de tu empresa.</strong> Trabajamos
              con herramientas de IA autorizadas. Acordamos casos, ejercicios y
              entregables según roles, licencias y permisos disponibles. Si el
              programa incluye agentes o fuentes internas, definimos el alcance
              de esas prácticas con tu equipo.
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap training-section" id="tecnica">
        <div className="training-section-head">
          <div>
            <Eyebrow>03 / PARA EMPRESAS</Eyebrow>
            <h2>Capacitación para TI, Datos y Desarrollo.</h2>
          </div>
          <p className="lead">
            Diseñamos capacitación a medida para equipos que necesitan
            construir, integrar, operar o proteger soluciones de datos e IA.
          </p>
        </div>
        <div className="training-families">
          {technicalTrainingFamilies.map((family, i) => (
            <details key={family.title}>
              <summary>
                <span>0{i + 1}</span>
                {family.title}
              </summary>
              <div className="training-family-body">
                <p>{family.description}</p>
                <span className="micro">EJEMPLOS DE PROGRAMAS A MEDIDA</span>
                <div className="training-examples">
                  {family.examples.map((example) => (
                    <article key={example.title}>
                      <h3>{example.title}</h3>
                      <dl>
                        <div>
                          <dt>Perfil</dt>
                          <dd>{example.profile}</dd>
                        </div>
                        <div>
                          <dt>Requisito de entrada</dt>
                          <dd>{example.requirement}</dd>
                        </div>
                        <div>
                          <dt>Resultado</dt>
                          <dd>{example.result}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
        <TrainingLink program="Capacitación a medida para TI, Datos y Desarrollo">
          Cuéntanos qué necesita tu equipo
        </TrainingLink>
      </section>

      <section className="section training-method" id="como-disenamos">
        <div className="wrap">
          <div className="training-section-head">
            <div>
              <Eyebrow>CAPACITACIÓN A MEDIDA</Eyebrow>
              <h2>Cómo diseñamos tu programa.</h2>
            </div>
            <p className="lead">
              Acordamos contigo qué necesita aprender el equipo y cómo lo
              practicará en su entorno de trabajo.
            </p>
          </div>
          <ol className="training-method-steps">
            {[
              [
                "Definimos el reto",
                "Identificamos el proceso, los roles y el resultado que tu equipo necesita producir.",
              ],
              [
                "Revisamos el entorno",
                "Confirmamos herramientas autorizadas, accesos, nivel del grupo y fuentes para las prácticas.",
              ],
              [
                "Acordamos la práctica",
                "Proponemos la ruta, los ejercicios y el entregable para comprobar lo aprendido.",
              ],
            ].map(([title, description], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href={trainingContactHref("Diseñar un programa de capacitación a medida")}
            className="training-inline-link"
          >
            Conversemos sobre tu programa
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section training-executive" id="directivos">
        <div className="wrap training-executive-grid">
          <div>
            <Eyebrow>04 / PARA DIRECTIVOS Y DUEÑOS DE NEGOCIO</Eyebrow>
            <h2>
              Estrategia de <span>IA</span> para directivos.
            </h2>
            <p className="lead">
              Decide dónde invertir en IA, qué capacidades necesita tu
              organización y qué iniciativa merece pasar a piloto.
            </p>
            <p>
              Para dueños, directores y responsables de decisiones de inversión
              o adopción. Puedes trabajar con una oportunidad de tu organización
              o partir de un caso guiado.
            </p>
            <div className="training-executive-output">
              <span className="micro">PROYECTO APLICADO</span>
              <h3>Un caso de inversión y un plan de piloto</h3>
              <p>
                Define el problema, estima costos y beneficios, identifica
                riesgos y establece indicadores para decidir si continuar.
              </p>
            </div>
            <div className="training-formats">
              <article>
                <span className="micro">REGISTRO DE INTERÉS</span>
                <h3>Edición abierta</h3>
                <p>
                  Trabaja en tu caso y contrasta decisiones con otros
                  participantes. Tu resultado es un caso de inversión y un plan
                  de piloto.
                </p>
              </article>
              <article>
                <span className="micro">A MEDIDA</span>
                <h3>Grupo privado</h3>
                <p>
                  Tu equipo directivo alinea una propuesta de piloto con
                  responsables, indicadores y criterios para avanzar.
                </p>
              </article>
            </div>
            <div className="training-actions">
              <TrainingLink program="Estrategia de IA para directivos · Edición abierta">
                Registrar interés
              </TrainingLink>
              <TrainingLink
                program="Estrategia de IA para directivos · Grupo privado"
                secondary
              >
                Grupo privado
              </TrainingLink>
            </div>
          </div>
          <div className="training-agenda">
            <h3>Qué trabajarás en el programa</h3>
            <ol>
              {executiveTrainingAgenda.map((item, i) => (
                <li key={item.title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section training-contact" id="conversemos">
        <div className="wrap training-contact-grid">
          <div>
            <Eyebrow>CONVERSEMOS</Eyebrow>
            <h2>¿Qué quieres desarrollar con ADI?</h2>
            <p>
              Consulta una propuesta para tu empresa o deja tu interés en la
              próxima edición del programa ejecutivo.
            </p>
          </div>
          <div className="training-contact-options">
            <Link href={trainingContactHref("Capacitación para mi empresa")}>
              <span className="micro">PARA EMPRESAS</span>
              <strong>Conversemos sobre tu equipo</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <Link href={trainingContactHref("Estrategia de IA para directivos · Edición abierta")}>
              <span className="micro">EDICIÓN EJECUTIVA ABIERTA</span>
              <strong>Registrar mi interés</strong>
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <p>
              Nos cuentas tu contexto en el formulario de ADI. Si el envío
              directo no está disponible, podrás escribirnos por correo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
