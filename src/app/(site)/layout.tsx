import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="">
      <body className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-50 flex-grow container mx-auto p-4">{children}</main>
      <Footer />
      </body>
    </html>
  );
}

