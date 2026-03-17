import type { Metadata } from "next";
import { Press_Start_2P, VT323, Orbitron } from "next/font/google";
import "./globals.css";
import { Scanlines } from "@/components/ui/scanlines";
import { Particles } from "@/components/ui/particles";
import { ModalWrapper } from "@/components/modal-wrapper";

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-terminal",
  weight: "400",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-futuristic",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camilo - Retro Arcade Portfolio",
  description: "Frontend Developer portfolio with a retro arcade aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} ${orbitron.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Particles />
        <Scanlines />
        <ModalWrapper>{children}</ModalWrapper>
      </body>
    </html>
  );
}
