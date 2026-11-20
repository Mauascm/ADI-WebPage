# Conectar la agenda de Google Calendar

La página de contacto ya muestra el botón **Agendar una llamada** cuando `NEXT_PUBLIC_ADI_CALENDAR_URL` tiene una URL pública de reservas. Sin esa URL, el botón permanece oculto y el contacto por correo y formulario sigue disponible.

## Recuperar el vínculo existente

1. En una computadora, abre [Google Calendar](https://calendar.google.com/) con la cuenta que administra las citas de ADI.
2. En la barra izquierda, busca **Páginas de reservas**. Coloca el cursor sobre la agenda que quieres usar y haz clic en **Copiar vínculo**.
3. Abre el vínculo en una ventana privada para comprobar que una persona externa pueda ver horarios y reservar.
4. Comparte esa URL para incluirla en la web.

Si no aparece una página de reservas, Google indica que puede crearse desde **Crear → Agenda de citas**, definiendo duración, disponibilidad y forma de reunión. Después vuelve a **Páginas de reservas** y copia el vínculo.

## Configuración técnica

En desarrollo local, agrega a `ADI/.env.local`:

```env
NEXT_PUBLIC_ADI_CALENDAR_URL=https://calendar.app.google/tu-enlace-real
```

En Vercel, configura la misma variable en las variables de entorno del proyecto y vuelve a desplegar. No se debe usar la URL de un evento individual ni un enlace para añadir un evento; debe ser el vínculo de la **página de reservas**.

Fuentes: [compartir una agenda de citas](https://support.google.com/calendar/answer/10733297?hl=es-419) y [crear una agenda de citas](https://support.google.com/calendar/answer/10729749?hl=es) de la Ayuda de Google Calendar.
