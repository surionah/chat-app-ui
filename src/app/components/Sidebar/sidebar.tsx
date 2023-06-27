import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen flex flex-col bg-primary dark:bg-primary border-r-2 border-primary shadow-primary shadow-lg p-4 gap-4">
      <Link
        href="/people"
        className="text-black dark:text-white hover:underline"
      >
        People
      </Link>
      <Link
        href="/groups"
        className="text-black dark:text-white hover:underline"
      >
        Groups
      </Link>
    </aside>
  );
}
