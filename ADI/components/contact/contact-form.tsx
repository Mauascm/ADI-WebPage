"use client";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { objectives } from "@/lib/site-content";
import { contactConfig } from "@/lib/contact-config";

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  objetivo: string;
  mensaje: string;
};
type Errors = Partial<Record<keyof FormState, string>>;
const emptyForm: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  objetivo: "No estoy seguro todavía",
  mensaje: "",
};

export function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const update = (field: keyof FormState, value: string) => {
    setValues((old) => ({ ...old, [field]: value }));
    setErrors((old) => ({ ...old, [field]: undefined }));
    setStatus(null);
  };
  const mailto = `mailto:${contactConfig.email}?subject=${encodeURIComponent("Consulta ADI — " + values.objetivo)}&body=${encodeURIComponent(`Nombre: ${values.nombre}\nEmpresa: ${values.empresa}\nEmail: ${values.email}\n\n${values.mensaje}`)}`;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const nextErrors: Errors = {};
    if (!values.nombre.trim()) nextErrors.nombre = "Ingresa tu nombre.";
    if (!values.empresa.trim()) nextErrors.empresa = "Ingresa tu empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      nextErrors.email = "Ingresa un email válido.";
    if (values.mensaje.trim().length < 20)
      nextErrors.mensaje = "Cuéntanos un poco más (mínimo 20 caracteres).";
    setErrors(nextErrors);
    setStatus(null);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(15000),
      });
      const data = (await response.json()) as {
        message?: string;
        delivered?: boolean;
      };
      const ok = response.ok && data.delivered === true;
      setStatus({
        ok,
        message:
          data.message ||
          "No pudimos enviar tu mensaje. Intenta de nuevo o usa el correo directo.",
      });
      if (ok) setValues(emptyForm);
    } catch {
      setStatus({
        ok: false,
        message:
          "No pudimos confirmar el envío. Conservamos tu mensaje; puedes intentar de nuevo o enviarlo por correo directo.",
      });
    } finally {
      setPending(false);
    }
  }
  return (
    <form
      className="contact-form"
      ref={formRef}
      onSubmit={submit}
      noValidate
      aria-busy={pending}
    >
      <div className="form-heading">
        <span className="micro">TU PRIMERA PRIORIDAD</span>
        <span>Todos los campos son necesarios</span>
      </div>
      <div className="form-grid">
        {(
          [
            {
              id: "nombre",
              label: "Nombre",
              placeholder: "Tu nombre",
              autocomplete: "name",
            },
            {
              id: "empresa",
              label: "Empresa",
              placeholder: "Tu organización",
              autocomplete: "organization",
            },
            {
              id: "email",
              label: "Email de contacto",
              placeholder: "nombre@empresa.com",
              autocomplete: "email",
            },
          ] as const
        ).map((field) => (
          <div
            className={field.id === "email" ? "field field-full" : "field"}
            key={field.id}
          >
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.id === "email" ? "email" : "text"}
              autoComplete={field.autocomplete}
              value={values[field.id]}
              maxLength={field.id === "email" ? 254 : 150}
              required
              placeholder={field.placeholder}
              onChange={(event) => update(field.id, event.target.value)}
              aria-invalid={!!errors[field.id]}
              aria-describedby={
                errors[field.id] ? `${field.id}-error` : undefined
              }
            />
            {errors[field.id] && (
              <p className="field-error" id={`${field.id}-error`}>
                {errors[field.id]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor="objetivo">¿Qué te gustaría explorar?</label>
        <select
          id="objetivo"
          name="objetivo"
          value={values.objetivo}
          onChange={(event) => update("objetivo", event.target.value)}
          required
        >
          {objectives.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensaje">Cuéntanos el contexto</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          minLength={20}
          maxLength={5000}
          value={values.mensaje}
          placeholder="¿Qué decisión o proceso quieres mejorar? ¿Qué lo hace difícil hoy?"
          onChange={(event) => update("mensaje", event.target.value)}
          aria-invalid={!!errors.mensaje}
          aria-describedby={
            errors.mensaje ? "mensaje-error mensaje-help" : "mensaje-help"
          }
        />
        <span className="field-help" id="mensaje-help">
          Comparte un contexto general, sin datos sensibles ni confidenciales.
        </span>
        {errors.mensaje && (
          <p className="field-error" id="mensaje-error">
            {errors.mensaje}
          </p>
        )}
      </div>
      <button className="button form-submit" type="submit" disabled={pending}>
        {pending ? (
          <>
            Enviando <Loader2 size={17} className="spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Enviar mensaje <ArrowUpRight size={17} aria-hidden="true" />
          </>
        )}
      </button>
      {status && (
        <p
          className={`form-status ${status.ok ? "success" : ""}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
      <a href={mailto} className="form-mailto">
        Prefiero enviarlo desde mi correo{" "}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <p className="field-help">
        Usaremos los datos que compartas para atender tu consulta.
      </p>
    </form>
  );
}
