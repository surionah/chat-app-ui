import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Chat app UI",
  description: "Small chat app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
