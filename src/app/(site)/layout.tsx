import Header from '../components/Header';
import "../globals.css";

import { Noto_Serif_KR } from "next/font/google"; 

const notoSerifKr = Noto_Serif_KR({
    // preload: true, 기본값
    subsets: ["latin"], // 또는 preload: false
    weight: ["200", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
    display: "swap"
})
  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={notoSerifKr.className}>
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <div className="pb-14"></div>
        <main className="flex-grow container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

