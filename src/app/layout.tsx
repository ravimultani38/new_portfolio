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
      {/* This is the most stable layout configuration:
        - `overflow-x-hidden` on the body prevents horizontal scroll issues.
        - `pb-16 md:pb-0` creates space for the mobile nav, preventing content from being hidden.
      */}
      <body className="font-sans pb-16 md:pb-0 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* These components are fixed/absolute and sit outside the main content flow */}
          <AnimatedBackground />
          <ScrollProgressIndicator />

         
          <div className="relative z-10">
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