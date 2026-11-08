import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "ReviewBoost: Google Review Automation on WhatsApp (Demo)",
  description: "Send a one-tap Google review link on WhatsApp after every visit and watch reviews grow. Interactive 3D demo by Neovia AI.",
};

export const viewport: Viewport = { themeColor: "#1F2340", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
