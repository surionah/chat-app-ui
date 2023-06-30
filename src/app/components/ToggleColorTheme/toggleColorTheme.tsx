"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { MoonIcon } from "@heroicons/react/24/solid";

interface ToggleColorThemeProps {
  lang: string;
}

export default function ToggleColorTheme({ lang }: ToggleColorThemeProps) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const { t } = useTranslation(lang, "common");

  useLayoutEffect(() => {
    setIsDarkModeEnabled(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  useEffect(() => {
    if (isDarkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <div className="w-12 flex justify-around text-black dark:text-white">
      <MoonIcon
        className="w-6 h-6 dark:text-primary text-white stroke-primary stroke-2 hover:cursor-pointer"
        onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
      />
    </div>
  );
}
