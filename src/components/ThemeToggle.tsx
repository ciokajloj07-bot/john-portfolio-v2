"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        console.log("Current theme:", resolvedTheme);
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
