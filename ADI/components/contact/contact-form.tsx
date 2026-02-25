"use client";

import { Loader2, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactConfig } from "@/lib/contact-config";

const objectives = [
  "Automatización",
  "KPIs/Dashboards",
  "Data Science/MLOps",
  "Web",
  "Marketing",
  "Marca",
];

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  objetivo: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  objetivo: objectives[0],
  mensaje: "",
};

function validateForm(values: FormState) {
  const errors: FormErrors = {};

  if (!values.nombre.trim()) {
    errors.nombre = "Ingresa tu nombre.";
  }

  if (!values.empresa.trim()) {
    errors.empresa = "Ingresa el nombre de tu empresa.";
  }

  if (!values.email.trim()) {
    errors.email = "Ingresa tu email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Ingresa un email válido.";
  }

  if (!values.objetivo.trim()) {
    errors.objetivo = "Selecciona un objetivo.";
  }

  if (values.mensaje.trim().length < 20) {
    errors.mensaje = "Cuéntanos un poco más (mínimo 20 caracteres).";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consulta ADI - ${form.objetivo || "Diagnóstico"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\nObjetivo: ${form.objetivo}\n\nMensaje:\n${form.mensaje}`,
    );

    // Reemplazar este correo por el email oficial de recepción.
    return `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setServerMessage(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      const data = (await response.json()) as { message: string };
      setServerMessage(data.message);
      setForm(initialForm);
    } catch {
      setServerMessage("No pudimos enviar tu mensaje ahora. Puedes usar el correo directo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="nombre"
            label="Nombre"
            value={form.nombre}
            onChange={(value) => handleChange("nombre", value)}
            placeholder="Tu nombre"
            error={errors.nombre}
          />
          <Field
            id="empresa"
            label="Empresa"
            value={form.empresa}
            onChange={(value) => handleChange("empresa", value)}
            placeholder="Nombre de tu empresa"
            error={errors.empresa}
          />
        </div>

        <Field
          id="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={(value) => handleChange("email", value)}
          placeholder="nombre@empresa.com"
          error={errors.email}
        />

        <div className="space-y-1.5">
          <label htmlFor="objetivo" className="text-sm font-medium text-fg">
            Objetivo principal
          </label>
          <select
            id="objetivo"
            name="objetivo"
            value={form.objetivo}
            onChange={(event) => handleChange("objetivo", event.target.value)}
            className="h-12 w-full rounded-xl border border-border/70 bg-black/25 px-4 text-sm text-fg outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {objectives.map((item) => (
              <option key={item} value={item} className="bg-slate-900 text-fg">
                {item}
              </option>
            ))}
          </select>
          {errors.objetivo ? <p className="text-sm text-red-300">{errors.objetivo}</p> : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="mensaje" className="text-sm font-medium text-fg">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={(event) => handleChange("mensaje", event.target.value)}
            placeholder="Cuéntanos el contexto, los dolores actuales y qué quieres lograr."
            rows={5}
            className="w-full rounded-xl border border-border/70 bg-black/25 px-4 py-3 text-sm text-fg outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
          />
          {errors.mensaje ? <p className="text-sm text-red-300">{errors.mensaje}</p> : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Enviar solicitud
              </>
            )}
          </Button>

          <a
            href={mailtoHref}
            className="inline-flex h-12 items-center rounded-full border border-border/80 px-6 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-primary"
          >
            Enviar por correo directo
          </a>
        </div>

        {serverMessage ? <p className="text-sm text-primary">{serverMessage}</p> : null}
      </form>
    </Card>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
};

function Field({ id, label, value, onChange, placeholder, error, type = "text" }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-border/70 bg-black/25 px-4 text-sm text-fg outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
