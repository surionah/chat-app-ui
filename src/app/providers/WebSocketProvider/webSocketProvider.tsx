"use client";

import React, { createContext, useContext } from "react";
import useWebSocket from "react-use-websocket";

const socketUrl = "ws://localhost:8000/ws";

interface WebSocketsEvents {
  lastMessage: MessageEvent | null;
  sendMessage: (data: any) => void;
}

const WebSocketContext = createContext<WebSocketsEvents | null>(null);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
    onOpen: () => console.log("opened"),
    shouldReconnect: (closeEvent) => true,
  });

  return (
    <WebSocketContext.Provider value={{ lastMessage, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

const useWebSocketContext = () => {
  const webSocketContext = useContext(WebSocketContext);

  return {
    ...webSocketContext,
  };
};

export { WebSocketProvider, useWebSocketContext };
