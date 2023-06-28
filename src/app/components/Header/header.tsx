import ToggleColorTheme from "../ToggleColorTheme/toggleColorTheme";

interface HeaderProps {
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <div className="w-screen h-12 flex justify-between items-center bg-white dark:bg-black shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px]">
      <p className="text-black dark:text-white ml-4">Chat App UI</p>
      <div className="mr-4">
        <ToggleColorTheme lang={lang} />
      </div>
    </div>
  );
}
