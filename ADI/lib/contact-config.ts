export const contactConfig = {
  email: "contacto@adi-mx.com",
  // URL pública de la página de reservas creada en Google Calendar.
  calendarUrl: process.env.NEXT_PUBLIC_ADI_CALENDAR_URL?.trim() ?? "",
};

export const contactMailto = `mailto:${contactConfig.email}`;
