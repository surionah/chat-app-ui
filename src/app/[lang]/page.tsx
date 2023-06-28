import { useTranslation } from "@/app/i18n";
import ToggleColorTheme from "../components/ToggleColorTheme/toggleColorTheme";

interface PageParams {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: PageParams) {
  const { t } = await useTranslation(lang);

  return (
    <div className="bg-white dark:bg-black">
      <p className="text-primary">
        {t("title")}
        <span className="font-bold"> surionah</span>
      </p>
    </div>
  );
}
