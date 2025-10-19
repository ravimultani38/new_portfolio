"use client";

import Link from "next/link";
import { Home, Briefcase, Mail, Rss } from "lucide-react"; // Import necessary icons
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Utility for conditional class names

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#projects", label: "Projects", icon: Briefcase }, // Assuming projects is an ID on the home page
  { href: "/blog", label: "Blog", icon: Rss },
  { href: "/#contact", label: "Contact", icon: Mail }, // Assuming contact is an ID on the home page
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          // Check if the current path matches the item's href
          // For hash links, check if the base path is home ('/')
          const isActive = item.href.includes('#') 
            ? pathname === '/' 
            : pathname === item.href || (item.href === '/blog' && pathname.startsWith('/blog/'));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}