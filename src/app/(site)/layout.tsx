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
      <body className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
      </body>
    </html>
  );
}

