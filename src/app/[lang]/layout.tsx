import { Roboto_Mono } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Sidebar from "../components/Sidebar/sidebar";
import Header from "../components/Header/header";
import "../../globals.css";

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
      <body className={`${inter.className} h-screen`}>
        <Header />
        <div className="flex h-[calc(100%_-_3rem)]">
          <Sidebar />
          <main className="w-full h-full bg-white dark:bg-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
