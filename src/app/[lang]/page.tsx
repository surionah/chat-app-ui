import { useTranslation } from "@/app/i18n";
import EnterForm from "../components/EnterForm/enterForm";

interface PageParams {
  params: {
    lang: string;
  };
}

export default async function HomePage({ params: { lang } }: PageParams) {
  const { t } = await useTranslation(lang, "home");

  return (
    // <div className="bg-white dark:bg-black">
    //   <p className="text-primary">
    //     {t("title")}
    //     <span className="font-bold"> surionah</span>
    //   </p>
    // </div>
    <EnterForm />
  );
}
