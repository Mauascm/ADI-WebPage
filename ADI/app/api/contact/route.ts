import { NextResponse } from "next/server";
import { objectives } from "@/lib/site-content";
type ContactPayload = {
  nombre: string;
  empresa: string;
  email: string;
  objetivo: string;
  mensaje: string;
};
const keys: (keyof ContactPayload)[] = [
  "nombre",
  "empresa",
  "email",
  "objetivo",
  "mensaje",
];
export async function POST(request: Request) {
  let input: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20000)
      return NextResponse.json(
        { message: "El mensaje es demasiado largo." },
        { status: 413 },
      );
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { message: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }
  if (!input || typeof input !== "object" || Array.isArray(input))
    return NextResponse.json(
      { message: "Revisa los campos del formulario." },
      { status: 400 },
    );
  const record = input as Record<string, unknown>;
  if (
    keys.some(
      (key) =>
        typeof record[key] !== "string" || !(record[key] as string).trim(),
    )
  )
    return NextResponse.json(
      { message: "Completa todos los campos requeridos." },
      { status: 400 },
    );
  const body = Object.fromEntries(
    keys.map((key) => [key, (record[key] as string).trim()]),
  ) as ContactPayload;
  if (
    body.nombre.length > 150 ||
    body.empresa.length > 150 ||
    body.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
    body.mensaje.length < 20 ||
    body.mensaje.length > 5000 ||
    !objectives.includes(body.objetivo)
  ) {
    return NextResponse.json(
      {
        message:
          "Revisa tu email, objetivo y mensaje (entre 20 y 5,000 caracteres).",
      },
      { status: 400 },
    );
  }
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl)
    return NextResponse.json(
      {
        delivered: false,
        message:
          "El envío por formulario no está disponible por el momento. Tu mensaje no se ha enviado. Usa la opción de correo directo.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source: "adi-web-contact-form",
        receivedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Webhook rejected request");
    return NextResponse.json({
      delivered: true,
      message:
        "Tu solicitud fue enviada correctamente. Gracias por compartir tu contexto.",
    });
  } catch {
    return NextResponse.json(
      {
        delivered: false,
        message:
          "No pudimos confirmar el envío. Intenta de nuevo o usa el correo directo.",
      },
      { status: 502 },
    );
  }
}
