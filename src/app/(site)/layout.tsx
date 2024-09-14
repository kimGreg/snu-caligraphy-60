import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../globals.css";

import { Roboto, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google"; 

const notoSansKr = Noto_Sans_KR({
    // preload: true, 기본값
    subsets: ["latin"], // 또는 preload: false
    weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  });

const notoSerifKr = Noto_Serif_KR({
    // preload: true, 기본값
    subsets: ["latin"], // 또는 preload: false
    weight: ["200", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
})
  
  const roboto = Roboto({
    subsets: ["latin"], // preload에 사용할 subsets입니다.
    weight: ["100", "400", "700"],
    variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" className={notoSerifKr.className}>
      <body className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
      </body>
    </html>
  );
}

