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

  await new Promise((resolve) => setTimeout(resolve, 700));

  return NextResponse.json({
    message: "Solicitud recibida. Te contactaremos para agendar el diagnóstico.",
    // Reemplazar esta respuesta por integración real (email, CRM o webhook).
  });
}
