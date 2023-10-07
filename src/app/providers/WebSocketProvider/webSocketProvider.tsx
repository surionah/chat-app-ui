"use client";

import React, { createContext, useContext, useRef, useCallback } from "react";
import useWebSocket from "react-use-websocket";
import { useAtom } from "jotai";
import { isConnectedToWs, nickname } from "@/app/state";

const SOCKET_URL = "ws://localhost:8000/ws";

interface WebSocketsEvents {
  lastJsonMessage: MessageEvent<any> | null;
  sendMessage: (data: any) => void;
}

const WebSocketContext = createContext<WebSocketsEvents | null>(null);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [_, setIsConnected] = useAtom(isConnectedToWs);
  const [username] = useAtom(nickname);
  const userId = useRef(Date.now());

  const socketUrl = useCallback(() => {
    return new Promise<string>((resolve) => {
      if (username !== "") {
        resolve(SOCKET_URL);
      }
    });
  }, [username]);

  const { sendMessage, lastJsonMessage } = useWebSocket<MessageEvent>(
    socketUrl,
    {
      queryParams: {
        username: username,
        userid: userId.current,
      },
      onOpen: () => setIsConnected(true),
      shouldReconnect: (closeEvent) => true,
      onClose: () => setIsConnected(false),
    }
  );

  return (
    <WebSocketContext.Provider value={{ sendMessage, lastJsonMessage }}>
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
