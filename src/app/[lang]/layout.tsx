import "../../globals.css";
import { Roboto_Mono } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Roboto_Mono({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata = {
  title: "Chat app UI",
  description: "Small chat app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
