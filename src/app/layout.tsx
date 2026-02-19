import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AsproFunnel - La infraestructura de crecimiento para network marketing",
  description: "El sistema que convierte tu organización en una máquina de prospección. Funnels, publicidad y automatización con IA—llave en mano para miles de distribuidores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${inter.variable} font-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
