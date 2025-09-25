import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Toaster } from "sonner";
import { PageTransition } from "@/components/page-transition";
import { AnimatedBackground } from "@/components/animated-background";
import { ThemeApplier } from "@/components/theme-applier";

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
  metadataBase: new URL('https://harpreetsingh.co'),
  title: "Harpreet Singh | Full-Stack Developer",
  description: "Full-stack developer specializing in creating modern, high-performance web applications with React, Next.js, and Node.js.",
  keywords: ["Harpreet Singh", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Harpreet Singh | Full-Stack Developer",
    description: "Modern web applications built with cutting-edge technology.",
    url: "https://harpreetsingh.co",
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
      <body>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeApplier>
            <AnimatedBackground />
            <div className="font-sans">
              <Header />
              <PageTransition>{children}</PageTransition>
              <Toaster richColors position="top-right" />
            </div>
          </ThemeApplier>
        </ThemeProvider>
      </body>
    </html>
  );
}