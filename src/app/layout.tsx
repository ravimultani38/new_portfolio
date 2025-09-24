import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Toaster } from "sonner";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harpreet Singh | Full-Stack Developer",
  description: "Full-stack developer specializing in creating modern, high-performance web applications with React, Next.js, and Node.js.",
  keywords: ["Harpreet Singh", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Harpreet Singh | Full-Stack Developer",
    description: "Modern web applications built with cutting-edge technology.",
    url: "https://harpreetsingh.co", // Change to your domain
    siteName: "Harpreet Singh's Portfolio",
    images: [
      {
        url: "/og-image.png", // Create an open graph image (1200x630) and add it to your /public folder
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PageTransition>{children}</PageTransition>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}