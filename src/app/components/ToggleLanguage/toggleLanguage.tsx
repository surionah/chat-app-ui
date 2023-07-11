"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import useLanguageDetector from "@/app/hooks/UseLanguageDetector/useLanguageDetector";

export default function ToggleLanguage() {
  const pathname = usePathname();
  const { push } = useRouter();
  const { lang } = useLanguageDetector();
  const { t } = useTranslation(lang, "common");

  const isEnglishSelected = useMemo(() => lang === "en", [lang]);

  const handleToggleLanguage = () => {
    let newPathname;
    if (isEnglishSelected) {
      newPathname = pathname.replace("/en", "/es");
    } else {
      newPathname = pathname.replace("/es", "/en");
    }
    push(newPathname);
  };

  return (
    <div
      className="flex gap-1 hover:cursor-pointer"
      onClick={handleToggleLanguage}
    >
      <p
        className={`text-black dark:text-white ${
          isEnglishSelected && "text-primary dark:!text-primary"
        }`}
      >
        {t("header.en")}
      </p>
      -
      <p
        className={`text-black dark:text-white ${
          !isEnglishSelected && "text-primary dark:!text-primary"
        }`}
      >
        {t("header.es")}
      </p>
    </div>
  );
}
