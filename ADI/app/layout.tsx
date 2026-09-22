import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { ElevenLabsConvaiWidget } from "@/components/integrations/elevenlabs-convai-widget";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buildMetadata, siteUrl } from "@/lib/metadata";
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
    title: "ADI | Tu Data & AI Office",
    description:
      "Una capacidad continua de Datos e IA, integrada a tu negocio. Ingeniería, analítica, automatización e inteligencia artificial para mejores decisiones.",
  }),
  icons: {
    icon: "/branding/adi-logo-noback.png",
    apple: "/branding/adi-logo-noback.png",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADI — Advanced Data Intelligence",
    url: siteUrl,
    logo: `${siteUrl}/branding/adi-logo-noback.png`,
    description:
      "Data & AI Office: capacidad externa y continua de Datos e Inteligencia Artificial.",
  };
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ElevenLabsConvaiWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
