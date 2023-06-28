import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-full flex flex-col bg-white dark:bg-black p-4 gap-4 shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]">
      <Link
        href="/people"
        className="text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary"
      >
        People
      </Link>
      <Link
        href="/groups"
        className="text-black dark:text-white hover:underline hover:text-primary dark:hover:text-primary"
      >
        Groups
      </Link>
    </aside>
  );
}
