"use client";

import { useAtom } from "jotai";
import { nickname } from "@/app/state";

export default function ChatPage() {
  const [username] = useAtom(nickname);

  return (
    <div className="flex align-middle justify-center">{`Welcome to Chat App ${username}`}</div>
  );
}
