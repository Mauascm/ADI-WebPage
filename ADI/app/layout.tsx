import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { ElevenLabsConvaiWidget } from "@/components/integrations/elevenlabs-convai-widget";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buildMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "ADI | Data, Automatización y Analítica Avanzada",
    description:
      "Consultora especializada en automatización, dashboards, data science y productos digitales para mejorar eficiencia y rentabilidad.",
    path: "/",
  }),
  icons: {
    icon: [{ url: "/branding/adi-logo-noback.png?v=2", type: "image/png" }],
    shortcut: "/branding/adi-logo-noback.png?v=2",
    apple: "/branding/adi-logo-noback.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-radial-tech font-sans text-fg antialiased`}
      >
        <a
          href="#contenido"
          className="sr-only rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Saltar al contenido
        </a>
        <div className="pointer-events-none fixed inset-0 -z-20 tech-grid" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 -z-10 tech-noise" aria-hidden="true" />
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <ElevenLabsConvaiWidget />
      </body>
    </html>
  );
}
