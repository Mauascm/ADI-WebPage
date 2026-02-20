# ADI Website (Next.js + Tailwind + Framer Motion)

Sitio web de **ADI (Advanced Data Intelligence)** con diseño premium-tech, copy en español y arquitectura lista para deploy en Vercel.

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- lucide-react
- next/font (Inter + Space Grotesk)

## Requisitos

- Node.js 20+
- npm 10+ (o equivalente con pnpm/yarn)

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Abrir en `http://localhost:3000`.

## Rutas incluidas

- `/` Home
- `/servicios`
- `/metodologia`
- `/contacto`
- `POST /api/contact` (mock de envío exitoso)

## Estructura principal

```text
app/
  api/contact/route.ts
  contacto/page.tsx
  metodologia/page.tsx
  servicios/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  contact/contact-form.tsx
  layout/footer.tsx
  layout/navbar.tsx
  sections/*
  ui/*
lib/
  metadata.ts
  site-content.ts
  utils.ts
```

## Personalización rápida (branding y contenido)

1. Colores y estilo base:
- Editar variables CSS en `app/globals.css` (`--bg`, `--primary`, `--border`, etc.).
- Ajustar sombras/animaciones en `tailwind.config.ts`.

2. Copy y contenido:
- Editar textos globales y datos de secciones en `lib/site-content.ts`.
- Ajustar titulares por página en `app/page.tsx`, `app/servicios/page.tsx`, `app/metodologia/page.tsx`, `app/contacto/page.tsx`.

3. Metadata SEO / OG:
- Modificar helper en `lib/metadata.ts` (dominio base).
- Ajustar título/descripción por ruta en cada `page.tsx`.

4. Links y datos reales:
- Reemplazar placeholders de redes, email y calendario en:
  - `components/layout/footer.tsx`
  - `components/contact/contact-form.tsx`
  - `app/contacto/page.tsx`
  - `app/api/contact/route.ts`

## Accesibilidad y performance

- Navegación con foco visible y soporte teclado.
- Contraste optimizado para dark mode premium.
- Animaciones con respeto a `prefers-reduced-motion`.
- Uso de `next/font` para carga eficiente de tipografías.

## Deploy (Vercel)

1. Subir el repositorio a GitHub/GitLab/Bitbucket.
2. Importar proyecto en Vercel.
3. Build command: `npm run build`.
4. Output: estándar de Next.js (auto-detectado).

## Nota sobre entorno actual

En este entorno no hay `node`/`npm` instalados, por eso no fue posible ejecutar `lint/build` aquí. El proyecto quedó estructurado para correr directamente al instalar dependencias en tu máquina.
