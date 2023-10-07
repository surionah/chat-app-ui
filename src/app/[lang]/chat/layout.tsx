"use client";

import { WebSocketProvider } from "@/app/providers/WebSocketProvider/webSocketProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <WebSocketProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WebSocketProvider>
  );
}
