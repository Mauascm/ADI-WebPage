# ADI · guía breve para usar el material comercial

## Qué enviar y cuándo

- **Antes de una reunión:** el [one pager en PDF](./ADI_One_Pager_Comercial.pdf) da una vista rápida de las tres ofertas y abre la conversación sobre una prioridad concreta.
- **Durante la reunión:** la [presentación de seis láminas](./ADI_Presentacion_Comercial_6_Paginas.pdf) sigue la secuencia problema → capacidad → forma de trabajo → planes → siguiente paso.
- **Después:** compartir la página específica que responda al interés del prospecto: [Data & AI Office](https://adi-web-page.vercel.app/data-ai-office), [capacidades](https://adi-web-page.vercel.app/capacidades), [modelo](https://adi-web-page.vercel.app/modelo), [capacitaciones](https://adi-web-page.vercel.app/capacitacion) o [planes](https://adi-web-page.vercel.app/planes).

## Guion para la presentación

| Lámina | Idea para explicar | Pregunta para descubrir la prioridad |
| --- | --- | --- |
| 1 · Propuesta | ADI integra un equipo externo de Datos e IA al contexto de la empresa. | ¿Qué decisión hoy requiere información que cuesta reunir? |
| 2 · Oportunidad | Los datos existen, pero fuentes y definiciones separadas hacen lenta la respuesta. | ¿Dónde se reconcilian versiones o archivos manualmente? |
| 3 · Capacidades | Se combinan disciplinas según la iniciativa, desde ingeniería hasta gobierno e IA. | ¿Qué capacidad falta hoy para llevar una respuesta a la operación? |
| 4 · Relación | El Data & AI Office es continuo; capacitación y gobernanza también pueden abrir una ruta de trabajo. | ¿Les conviene empezar por una solución, formación o una revisión de riesgos? |
| 5 · Planes | Essential $70,000; Growth $135,000; Intelligence $219,000; AI $319,000 MXN más IVA al mes; Enterprise a medida. La lámina resume las capacidades de cada uno. | ¿Qué nivel de capacidad parece adecuado para la primera prioridad? |
| 6 · Siguiente paso | La primera conversación permite acotar una iniciativa y preparar una propuesta concreta. | ¿Cuál sería una primera iniciativa valiosa y viable para evaluar juntos? |

Los ejemplos de finanzas, inventario y operaciones son **escenarios ilustrativos**, no casos de clientes ni resultados medidos. Los cuatro precios mensuales del Data & AI Office son fijos, en MXN más IVA; los límites de fuentes y áreas son referencias comerciales y el alcance se acuerda en contrato.

## Archivos editables

- [One pager en PowerPoint](./ADI_One_Pager_Comercial.pptx), tamaño A4 vertical.
- [Presentación en PowerPoint](./ADI_Presentacion_Comercial_6_Paginas.pptx), formato 16:9.
- [HTML del one pager](./one-pager.html) y [HTML de la presentación](./presentacion-6-paginas.html) para ajustar el diseño de los PDF; ambos usan [ventas.css](./ventas.css).

Para reconstruir los PowerPoint: entrar a esta carpeta, ejecutar `npm install` y luego `npm run build:pptx`. Los logotipos de `assets/` son copias PNG transparentes generadas desde los SVG originales del sitio, que no fueron modificados. Los PDF se imprimen desde los HTML con Chrome, activando la opción de imprimir fondos.
