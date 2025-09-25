import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4 flex justify-end">
      <ThemeToggle />
    </header>
  );
}