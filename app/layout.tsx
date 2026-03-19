import type { Metadata } from "next";
import { Press_Start_2P, VT323, Orbitron } from "next/font/google";
import "./globals.css";
import { Scanlines } from "@/components/ui/scanlines";
import { Particles } from "@/components/ui/particles";
import { ModalWrapper } from "@/components/modal-wrapper";
import { socialLinks } from "@/lib/portfolio-data";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://camilo-portafolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Camilo Maria | Full Stack Developer",
    template: "%s | Camilo Maria",
  },
  description:
    "Software Engineer with 2+ years building applications. Full Stack Developer specializing in React, TypeScript, and Node.js. Based in Providence, RI.",
  keywords: [
    "React",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Tailwind CSS",
    "JavaScript",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Node.js",
    "Providence RI",
  ],
  authors: [{ name: "Camilo Maria" }],
  creator: "Camilo Maria",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Camilo Maria Portfolio",
    title: "Camilo Maria | Full Stack Developer",
    description:
      "Software Engineer with 2+ years building applications. Full Stack Developer specializing in React, TypeScript, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Camilo Maria Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CamiloMaria",
    creator: "@CamiloMaria",
    title: "Camilo Maria | Full Stack Developer",
    description: "Software Engineer with 2+ years building applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    url: "https://camilo-portafolio.vercel.app",
    name: "Camilo Maria",
    jobTitle: "Full Stack Developer",
    description: "Software Engineer with 2+ years building applications.",
    email: "camilo_jose08@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Providence",
      addressRegion: "RI",
      addressCountry: "US",
    },
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "NestJS",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
