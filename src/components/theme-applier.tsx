"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeApplier({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const htmlEl = document.documentElement;
    // Clear previous theme classes
    htmlEl.classList.remove("light", "dark");

    // Add the new theme class
    if (resolvedTheme) {
      htmlEl.classList.add(resolvedTheme);
    }
  }, [resolvedTheme]);

  return <>{children}</>;
}