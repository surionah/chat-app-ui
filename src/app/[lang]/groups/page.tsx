import List from "@/app/components/List/list";
import { useTranslation } from "@/app/i18n";

interface PageParams {
  params: {
    lang: string;
  };
}

export default async function GroupsPage({ params: { lang } }: PageParams) {
  const { t } = await useTranslation(lang, "groups");

  return (
    <div className="groups h-full">
      <List
        title={t("list.title")}
        renderItem={(item: any) => <div>{item.label}</div>}
        keyExtractor={(item: any) => item?.id}
        data={[
          { id: 1, label: "Vengadores" },
          { id: 2, label: "Amigos de farra" },
        ]}
      />
    </div>
  );
}
