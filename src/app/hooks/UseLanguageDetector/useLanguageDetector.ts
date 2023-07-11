"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function useLanguageDetector() {
  const pathname = usePathname();
  const lang = useMemo(() => {
    const matchedString = pathname.match(/\/en|\/es/) || ["/en"];
    return matchedString[0].substring(1, 3);
  }, [pathname]);

  return {
    lang,
  };
}
