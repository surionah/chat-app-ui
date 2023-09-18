"use client";

import { useEffect } from "react";
import ChatInput from "../ChatInput/chatInput";
import { useAtom } from "jotai";
import { messagesList } from "@/app/state";
import { useWebSocketContext } from "@/app/providers/WebSocketProvider/webSocketProvider";

export default function Chat() {
  const { lastMessage } = useWebSocketContext();
  const [messages, setMessages] = useAtom(messagesList);

  useEffect(() => {
    setMessages((prev) => [...prev, lastMessage?.data]);
  }, [lastMessage, setMessages]);

  return (
    <section className="w-full h-full bg-black dark:bg-white p-8 flex flex-col">
      <div className="flex-1">
        {messages?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <ChatInput />
    </section>
  );
}
