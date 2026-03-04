import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/provider";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Cesar | Full Stack Developer",
  description:
    "Portafolio profesional de Cesar - Desarrollador Full Stack especializado en TypeScript, Next.js y PostgreSQL. 3D interactive portfolio experience.",
  keywords: ["developer", "full stack", "TypeScript", "Next.js", "portfolio", "3D"],
  openGraph: {
    title: "Cesar | Full Stack Developer",
    description: "Interactive 3D portfolio — TypeScript, Next.js, PostgreSQL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${_inter.variable} ${_spaceGrotesk.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
