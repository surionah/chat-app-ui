"use client";

import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Input() {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleSendMessage = () => {
    console.log(message);
  };

  return (
    <div className="input flex gap-2">
      <input
        className="appearance-none rounded-md flex-1 px-4"
        onChange={handleChangeMessage}
      />
      <PaperAirplaneIcon
        className="w-10 text-primary"
        onClick={handleSendMessage}
      />
    </div>
  );
}
