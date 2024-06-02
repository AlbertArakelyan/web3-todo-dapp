import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import Header from '@/components/common/Header';

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethereum Todo dApp",
  description: "Ethererum giver todolist decentralized app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
