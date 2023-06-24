import { useTranslation } from "../i18n";

interface PageParams {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: PageParams) {
  const { t } = await useTranslation(lang);

  return (
    <main>
      <p>
        {t("title")}
        <span className="font-bold"> surionah</span>
      </p>
    </main>
  );
}
