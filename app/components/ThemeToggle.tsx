"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    if (theme === "system") {
      setTheme("light");
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition cursor-pointer dark:bg-transparent"
    >
      {theme === "dark" ? (
        <span aria-hidden>
          <FaSun />
        </span>
      ) : (
        <span aria-hidden>
          <FaMoon />
        </span>
      )}
    </button>
  );
}
