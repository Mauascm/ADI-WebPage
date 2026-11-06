import type { Metadata } from "next";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://adi-data.vercel.app"
).replace(/\/$/, "");
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "ADI — Data & AI Office",
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: "/branding/adi-social.png",
          width: 1200,
          height: 630,
          alt: "ADI — Data & AI Office",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/branding/adi-social.png"],
    },
  };
}
