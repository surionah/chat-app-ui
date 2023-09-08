"use client";

import React, { createContext, useContext } from "react";
import useWebSocket from "react-use-websocket";
import { useAtom } from "jotai";
import { isConnectedToWs } from "@/app/state";

const socketUrl = "ws://localhost:8000/ws";

interface WebSocketsEvents {
  lastMessage: MessageEvent | null;
  sendMessage: (data: any) => void;
}

const WebSocketContext = createContext<WebSocketsEvents | null>(null);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [_, setIsConnected] = useAtom(isConnectedToWs);
  const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
    onOpen: () => setIsConnected(true),
    shouldReconnect: (closeEvent) => true,
    onClose: () => setIsConnected(false),
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
