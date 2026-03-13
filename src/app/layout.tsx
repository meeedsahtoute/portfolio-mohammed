import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mohammed Assahtout | Full Stack Developer",
  description: "Futuristic Developer Portfolio of Mohammed Assahtoute - Full Stack Web Developer based in Nador, Morocco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#050505] text-white min-h-screen selection:bg-purple-500/30 selection:text-white`}>
        <ParticleBackground />
        <main className="relative z-10 w-full flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
