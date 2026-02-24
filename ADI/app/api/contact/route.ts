import { NextResponse } from "next/server";

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  objetivo?: string;
  mensaje?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.nombre || !body.empresa || !body.email || !body.objetivo || !body.mensaje) {
    return NextResponse.json(
      {
        message: "Faltan campos requeridos para procesar la solicitud.",
      },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        source: "adi-web-contact-form",
        receivedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          message: "No se pudo procesar la solicitud en este momento. Intenta de nuevo en unos minutos.",
        },
        { status: 502 },
      );
    }
  } else {
    // Fallback mientras no haya integracion real (email, CRM o workflow).
    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  return NextResponse.json({
    message: "Solicitud recibida. Te contactaremos para agendar el diagnóstico.",
  });
}

