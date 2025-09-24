// src/components/hero-section.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center text-center min-h-screen -mt-16">
      {/* We use -mt-16 to pull the section up to compensate for the header's height */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Harpreet Singh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Full-Stack Developer
        </p>
        <p className="max-w-xl mx-auto pt-2">
          Crafting elegant, high-performance web solutions from concept to
          deployment.
        </p>
        <div className="pt-4">
          <Link href="#projects">
            <Button size="lg">View My Work</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}