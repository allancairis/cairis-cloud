import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cairis.cloud"),
  title: {
    default: "Allan Cairis | Arquitetura, DevSecOps e IA em escala corporativa",
    template: "%s | Allan Cairis"
  },
  description:
    "Presenca executiva de Allan Cairis: arquitetura de software, DevSecOps, cloud, automacao com IA, governanca tecnica e transformacao digital para ambientes criticos.",
  applicationName: "Allan Cairis",
  authors: [{ name: "Allan Cairis" }],
  creator: "Allan Cairis",
  publisher: "Allan Cairis",
  keywords: [
    "Allan Cairis",
    "arquitetura de software",
    "DevSecOps",
    "IA aplicada",
    "automacao",
    "Azure DevOps",
    "Kubernetes",
    "engenharia de plataforma",
    "observabilidade",
    "governanca tecnica",
    "transformacao digital"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cairis.cloud",
    title: "Allan Cairis | Arquitetura, Seguranca e IA",
    description:
      "Perfil executivo e hands-on em arquitetura, DevSecOps, automacao inteligente e estrategia tecnologica.",
    siteName: "Allan Cairis"
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Cairis | Arquitetura, DevSecOps e IA",
    description: "Transformando complexidade tecnologica em vantagem estrategica."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
