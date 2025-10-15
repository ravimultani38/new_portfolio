import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4 flex justify-end items-center gap-4">
      <Link href="/blog">
        <Button variant="ghost">Blog</Button>
      </Link>
      <ThemeToggle />
    </header>
  );
}