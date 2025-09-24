
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="p-4 flex justify-end">
      <ThemeToggle />
    </header>
  );
}