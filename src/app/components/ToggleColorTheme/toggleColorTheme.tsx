"use client";

import { useEffect, useState } from "react";

export default function ToggleColorTheme() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDarkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <button
      onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
      className={
        isDarkModeEnabled ? "bg-white text-black" : "bg-black text-white"
      }
    >
      Toggle Color
    </button>
  );
}
