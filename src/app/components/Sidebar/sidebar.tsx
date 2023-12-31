"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "@/app/i18n/client";
import useLanguageDetector from "@/app/hooks/UseLanguageDetector/useLanguageDetector";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { lang } = useLanguageDetector();
  const { t } = useTranslation(lang, "common");

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useLayoutEffect(() => {
    setIsCollapsed(false);
  }, []);

  return (
    <aside
      className={`h-full flex flex-col justify-between items-center bg-white dark:bg-black p-6 shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]`}
    >
      <div className="flex flex-col gap-6">
        <Link
          href="/chat/people"
          className={`${
            pathname.includes("people") && "text-primary dark:!text-primary"
          } text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary flex items-center gap-2`}
        >
          <UserIcon className="w-8" />
          {!isCollapsed && t("sidebar.links.people")}
        </Link>
        <Link
          href="/chat/groups"
          className={`${
            pathname.includes("groups") && "text-primary dark:!text-primary"
          } text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary flex items-center gap-2`}
        >
          <UserGroupIcon className="w-8" />
          {!isCollapsed && t("sidebar.links.groups")}
        </Link>
      </div>
      {isCollapsed ? (
        <ChevronDoubleRightIcon
          className="w-8 text-black dark:text-white"
          onClick={handleToggleCollapse}
        />
      ) : (
        <ChevronDoubleLeftIcon
          className="w-8 text-black dark:text-white"
          onClick={handleToggleCollapse}
        />
      )}
    </aside>
  );
}
