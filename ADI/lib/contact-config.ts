export const contactConfig = {
  email: "contacto@adi-mx.com",
  // Ejemplo: "https://cal.com/adi/diagnostico" o URL de Calendly.
  calendarUrl: process.env.NEXT_PUBLIC_ADI_CALENDAR_URL ?? "",
};

export const contactMailto = `mailto:${contactConfig.email}`;

