"use client";

import { useState, useCallback } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useWebSocketContext } from "@/app/providers/WebSocketProvider/webSocketProvider";
import Input from "../Input/input";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useWebSocketContext();

  const handleSendMessage = useCallback(() => {
    sendMessage?.(JSON.stringify({ user: "Sergio", message }));
    setMessage("");
  }, [message, sendMessage, setMessage]);

  return (
    <div className="input flex gap-2">
      <Input
        onChangeValue={setMessage}
        value={message}
        placeholder="Enter your message here..."
        name="message"
      />
      <PaperAirplaneIcon
        className="w-10 text-primary"
        onClick={handleSendMessage}
      />
    </div>
  );
}
