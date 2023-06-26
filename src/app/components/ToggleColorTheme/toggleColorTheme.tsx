"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

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
    <div className="w-36 flex justify-around text-black dark:text-white">
      <p>{t("color_theme.label")}</p>
      <div
        onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
        className="bg-white w-8 rounded-2xl border-2 border-primary h-6"
      >
        <div className="w-4 rounded-2xl h-full dark:bg-primary border-2 border-primary dark:ml-3"></div>
      </div>
    </div>
  );
}
