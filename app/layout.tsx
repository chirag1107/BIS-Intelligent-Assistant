import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIS Intelligent Assistant — AI Guide to Indian Standards & Certification",
  description:
    "AI-powered assistant for Bureau of Indian Standards (BIS) specifications, mandatory ISI mark schemes, CRS registration, laboratory testing procedures, and compliance workflows.",
  keywords: [
    "BIS",
    "Bureau of Indian Standards",
    "ISI Mark",
    "Manakonline",
    "CRS Registration",
    "Indian Standards",
    "SIH 2026",
    "Smart India Hackathon",
    "Compliance Assistant",
    "Product Testing",
  ],
  authors: [{ name: "patilpranav72 / Lynox" }],
  creator: "Lynox",
  publisher: "Bureau of Indian Standards Assistant",
};

export const viewport: Viewport = {
  themeColor: "#1a3a6b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 overflow-hidden m-0 p-0 flex flex-col">
        {children}
      </body>
    </html>
  );
}
