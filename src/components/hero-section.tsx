"use client";

import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, FileDown } from "lucide-react";
import React from "react";

export function HeroSection() {
  // Staggered animation setup
  const title = "Harpreet Singh".split(" ");
  const subtitle = "Full-Stack Developer".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Parallax effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX_bg = useTransform(y, [0, 500], [20, -20]);
  const rotateY_bg = useTransform(x, [0, 500], [-20, 20]);
  const rotateX_fg = useTransform(y, [0, 500], [10, -10]);
  const rotateY_fg = useTransform(x, [0, 500], [-10, 10]);
  
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-screen -mt-16 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      
      <motion.div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10"
        style={{ rotateX: rotateX_bg, rotateY: rotateY_bg }}
      >
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/30 filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/30 filter blur-3xl animate-blob animation-delay-2000"></div>
      </motion.div>

      <motion.div 
        className="relative z-10 grid items-center gap-8 px-4 md:grid-cols-2 md:gap-16"
        style={{ rotateX: rotateX_fg, rotateY: rotateY_fg }}
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/profile-photo.jpg"
            alt="Harpreet Singh's Photo"
            width={280}
            height={280}
            className="rounded-full aspect-square object-cover border-4 border-primary/50 shadow-lg"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter font-display"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {title.map((word, index) => (
              <motion.span key={index} variants={itemVariants} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mt-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitle.map((word, index) => (
              <motion.span key={index} variants={itemVariants} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.p>
          
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          >
              <p className="max-w-xl pt-4">
                Crafting elegant, high-performance web solutions from concept to
                deployment.
              </p>
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                  <Link href="https://github.com/ravimultani38" target="_blank">
                      <Button variant="outline" size="icon"><Github className="h-5 w-5"/></Button>
                  </Link>
                   <Link href="https://linkedin.com/in/ravimultani38" target="_blank">
                      <Button variant="outline" size="icon"><Linkedin className="h-5 w-5"/></Button>
                  </Link>
                  <a href="/Harpreet-Singh-Resume.pdf" download>
                      <Button>Download Resume <FileDown className="ml-2 h-5 w-5"/></Button>
                  </a>
              </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}