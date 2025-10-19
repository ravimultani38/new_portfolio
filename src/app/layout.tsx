import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Toaster } from "sonner";
import { PageTransition } from "@/components/page-transition";
import { AnimatedBackground } from "@/components/animated-background";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://harpreetbuilds.com'),
  title: "Harpreet Singh | Full-Stack Developer",
  description: "Full-stack developer specializing in creating modern, high-performance web applications with React, Next.js, and Node.js.",
  keywords: ["Harpreet Singh", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Harpreet Singh | Full-Stack Developer",
    description: "Modern web applications built with cutting-edge technology.",
    url: "https://harpreetbuilds.com",
    siteName: "Harpreet Singh's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`} suppressHydrationWarning>
      {/* Removed overflow-x-hidden from body */}
      <body className="font-sans pb-16 md:pb-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ensure background is truly outside the main flow */}
          <AnimatedBackground />
          <ScrollProgressIndicator />

          {/* Apply overflow-x-hidden to the main content wrapper */}
          <div className="min-h-screen relative z-10 overflow-x-hidden">
             <Header />
             <PageTransition>{children}</PageTransition>
             <Toaster richColors position="top-right" />
          </div>

          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}