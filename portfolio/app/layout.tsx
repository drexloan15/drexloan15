import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/drexloan15" : "");
const siteUrl = "https://drexloan15.github.io/drexloan15";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jean Puccio — Desarrollador Full Stack",
  description:
    "Desarrollador full stack en Lima, Perú. Diseño, construyo y despliego productos web completos para entornos Windows y Linux.",
  authors: [{ name: "Jean Puccio" }],
  alternates: { canonical: `${siteUrl}/` },
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${siteUrl}/`,
    title: "Jean Puccio — Desarrollador Full Stack",
    description: "Del problema a producción: interfaces, servicios, datos e infraestructura.",
    siteName: "Jean Puccio — Portafolio",
  },
  twitter: {
    card: "summary",
    title: "Jean Puccio — Desarrollador Full Stack",
    description: "Del problema a producción: interfaces, servicios, datos e infraestructura.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#f4f3ee" },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const preferred = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.dataset.theme = saved || preferred;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
