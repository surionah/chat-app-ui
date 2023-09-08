"use client";

import ToggleColorTheme from "../ToggleColorTheme/toggleColorTheme";
import Link from "next/link";
import ToggleLanguage from "../ToggleLanguage/toggleLanguage";
import { useAtom } from "jotai";
import { isConnectedToWs } from "@/app/state";

export default function Header() {
  const [isConnected] = useAtom(isConnectedToWs);

  return (
    <div className="w-screen h-12 flex justify-between items-center bg-white dark:bg-black shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]">
      <div className="flex gap-4 items-center">
        <Link
          className="text-primary dark:text-primary ml-4 font-bold text-lg"
          href="/"
        >
          Chat App UI
        </Link>
        <span
          className={`w-4 h-4 rounded-lg ${
            isConnected ? "bg-secondary" : "bg-black dark:bg-white"
          }`}
        ></span>
      </div>
      <div className="mr-4 flex gap-6">
        <ToggleLanguage />
        <ToggleColorTheme />
      </div>
    </div>
  );
}
