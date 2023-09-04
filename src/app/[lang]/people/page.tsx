import List from "@/app/components/List/list";
import Username from "@/app/components/Username/username";
import { useTranslation } from "@/app/i18n";
import Chat from "@/app/components/Chat/chat";

interface PageParams {
  params: {
    lang: string;
  };
}

export default async function PeoplePage({ params: { lang } }: PageParams) {
  const { t } = await useTranslation(lang, "people");

  return (
    <div className="people h-full flex">
      <List
        title={t("list.title")}
        renderItem={(item: any) => <Username label={item.label} />}
        keyExtractor={(item: any) => item?.id}
        data={[
          { id: 1, label: "Jose Mendez" },
          { id: 2, label: "Juan Pinto" },
        ]}
      />
      <Chat />
    </div>
  );
}
