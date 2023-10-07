"use client";

import List from "@/app/components/List/list";
import Username from "@/app/components/Username/username";
import { useTranslation } from "@/app/i18n/client";
import Chat from "@/app/components/Chat/chat";
import { useQuery } from "@tanstack/react-query";
import peopleService from "../../../../services/people";

interface PageParams {
  params: {
    lang: string;
  };
}

export default function PeoplePage({ params: { lang } }: PageParams) {
  const { t } = useTranslation(lang, "people");
  const { data: people } = useQuery({
    queryKey: ["get-groups"],
    queryFn: peopleService.getPeople,
  });

  return (
    <div className="people h-full flex">
      <List
        title={t("list.title")}
        renderItem={(item: any) => <Username label={item.label} />}
        keyExtractor={(item: any) => item?.id}
        data={
          people
            ? people.map((user: any) => ({
                id: user.userid,
                label: user.username,
              }))
            : []
        }
      />
      <Chat />
    </div>
  );
}
