"use client"; // Required for usePathname and Framer Motion

import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Rss } from "lucide-react"; // Import Home and Rss icons

export function Header() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  // Animation for button hover/tap
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <header className="sticky top-0 z-50 w-full p-4 flex justify-end items-center gap-4">
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {isBlogPage ? (
          <Link href="/">
            <Button variant="ghost">
              <Home className="mr-2 h-4 w-4" /> {/* Home icon */}
              Home
            </Button>
          </Link>
        ) : (
          <Link href="/blog">
            <Button variant="ghost">
              <Rss className="mr-2 h-4 w-4" /> {/* Blog/RSS icon */}
              Blog
            </Button>
          </Link>
        )}
      </motion.div>

      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <ThemeToggle />
      </motion.div>
    </header>
  );
}