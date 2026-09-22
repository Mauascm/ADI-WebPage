# ADI — Data & AI Office

Sitio público en español de Advanced Data Intelligence. Presenta a ADI como una capacidad externa y continua de Datos e IA, integrada al negocio.

## Ejecutar

Node.js 20.9+ y npm. La raíz de la aplicación sigue siendo `ADI/`.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Se conserva Next.js App Router, TypeScript, Tailwind y el despliegue estándar de Vercel. `package-lock.json` fija la instalación. La dependencia PostCSS de Next 15 tiene un override a una versión corregida, sin migrar de major de Next.

## Arquitectura pública

| Ruta | Propósito |
| --- | --- |
| `/` | Narrativa Datos → Decisiones → Resultados |
| `/data-ai-office` | Capacidad externa, disciplinas y continuidad |
| `/capacidades` | Ocho disciplinas con relevancia de negocio |
| `/modelo` | Priorización, sprints, capacidad finita y conocimiento acumulado |
| `/experiencia` | Escenarios ilustrativos, sin atribuciones o métricas inventadas |
| `/contacto` | Captura de contacto y correo directo |

Redirecciones permanentes 308: `/servicios` → `/capacidades`; `/metodologia` → `/modelo`. Incluye canonical por página, OpenGraph, imagen social, Organization JSON-LD, robots y sitemap.

## Configuración

Copiar `.env.example` a `.env.local` y definir según el entorno:

- `NEXT_PUBLIC_SITE_URL`: dominio público definitivo para canonical, sitemap y metadata. El fallback conserva `https://adi-data.vercel.app`.
- `CONTACT_WEBHOOK_URL`: endpoint privado que recibe el formulario. Debe persistir o gestionar el contacto antes de responder con éxito. Sin configuración, la API devuelve 503 y la interfaz indica que el mensaje no fue enviado.
- `NEXT_PUBLIC_ADI_CALENDAR_URL`: calendario opcional. El enlace se muestra únicamente si hay URL.
- `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`: integración de voz opcional. Revisar previamente que el agente tenga el posicionamiento actualizado. Sin esta variable, no carga scripts externos de ElevenLabs.

El webhook recibe `nombre`, `empresa`, `email`, `objetivo`, `mensaje`, `source` y `receivedAt`. Se conservó `POST /api/contact`. Valida tipos, campos, longitudes, email y objetivo. No registra el contenido en consola. Un rechazo, error de red o timeout produce 502; el formulario conserva lo escrito. Solo una respuesta HTTP satisfactoria del webhook permite mostrar envío confirmado. El endpoint tiene timeout de 10 segundos.

La API confirma aceptación por el destino configurado, no lectura por una persona ni entrega final de un proveedor de email. El correo directo abre el cliente de correo con el contexto escrito. La protección antiabuso y retención de datos deben configurarse en el destino y/o la plataforma según el entorno de producción.

## Sistema visual

- Fondo `#080e14`; superficies `#0c141d` y `#101c27`.
- Texto `#eff3f4`; secundario `#9baab5`; acento `#75deed`.
- Inter para cuerpo/UI y Space Grotesk para titulares, con `next/font`.
- Tipografía editorial, líneas estructurales, bordes discretos y una sección clara para las decisiones de negocio.
- Las dos imágenes originales del logo se conservan sin modificaciones; se presenta el PNG original con proporción y transparencia intactas.
- Movimiento CSS/SVG finito, activado con los cambios de prioridad. Se respeta `prefers-reduced-motion` y el contenido no depende de animaciones para verse.

## Componentes

`lib/site-content.ts` contiene navegación, disciplinas, casos de uso, etapas y objetivos. `components/ui/editorial.tsx` reúne títulos y enlaces; `components/sections/office-story.tsx` compone la narrativa sin una página monolítica.

En `components/visuals/`:

- `OfficeSystem`: mapa interactivo Sistemas → ADI → Decisiones; se transforma de horizontal a vertical en móvil.
- `DecisionDistance`: compara información fragmentada y base compartida.
- `CapabilityExplorer`: disclosures nativos accesibles con disciplinas y preguntas de negocio.
- `BusinessExplorer`: selección de seis frentes de decisión.
- `OperatingCycle`: siete etapas con resultado por ciclo.
- `CapabilityCompound`: progresión conceptual de capacidad acumulada.

Se eliminaron las secciones antiguas, testimonios y nombres de ejemplo. Los escenarios publicados se identifican expresamente como ilustrativos. No hay cifras comerciales, promesas cuantitativas ni clientes atribuidos sin evidencia.

## Verificación del contacto

Después de compilar:

```sh
node tests/contact.mjs
```

La prueba inicia servidores de producción temporales en localhost y un webhook simulado local. Comprueba validación, ausencia de configuración, aceptación, rechazo y timeout sin enviar datos a servicios reales.

Con el sitio iniciado en localhost:3000, `node tests/routes.mjs` comprueba páginas, enlaces, metadata, redirecciones y assets. Se puede indicar otra URL mediante `ADI_QA_URL`. El alcance y los resultados de la revisión visual están en `docs/QA.md`.
