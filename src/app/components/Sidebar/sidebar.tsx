import Link from "next/link";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <aside className="h-full flex flex-col bg-white dark:bg-black p-4 gap-4 shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]">
      <Link
        href="/people"
        className="text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary flex items-center gap-2"
      >
        <UserIcon className="h-8 w-8" />
        People
      </Link>
      <Link
        href="/groups"
        className="text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary flex items-center gap-2"
      >
        <UserGroupIcon className="h-8 w-8" />
        Groups
      </Link>
    </aside>
  );
}
