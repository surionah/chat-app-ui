"use client";

import React, { useState, useCallback } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useWebSocketContext } from "@/app/providers/WebSocketProvider/webSocketProvider";

export default function Input() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useWebSocketContext();

  const handleChangeMessage = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleSendMessage = useCallback(() => {
    sendMessage?.(message);
    setMessage("");
  }, [message, sendMessage, setMessage]);

  const handleEnterKeyEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.key === "Enter" && handleSendMessage();
  };

  return (
    <div className="input flex gap-2">
      <input
        className="appearance-none rounded-md flex-1 px-4"
        onChange={handleChangeMessage}
        value={message}
        onKeyUp={handleEnterKeyEvent}
      />
      <PaperAirplaneIcon
        className="w-10 text-primary"
        onClick={handleSendMessage}
      />
    </div>
  );
}
