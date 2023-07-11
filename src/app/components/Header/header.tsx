import ToggleColorTheme from "../ToggleColorTheme/toggleColorTheme";
import Link from "next/link";
import ToggleLanguage from "../ToggleLanguage/toggleLanguage";

export default function Header() {
  return (
    <div className="w-screen h-12 flex justify-between items-center bg-white dark:bg-black shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]">
      <Link
        className="text-primary dark:text-primary ml-4 font-bold text-lg"
        href="/"
      >
        Chat App UI
      </Link>
      <div className="mr-4 flex gap-6">
        <ToggleLanguage />
        <ToggleColorTheme />
      </div>
    </div>
  );
}
