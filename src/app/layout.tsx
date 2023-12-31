import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Nav from "@/components/navbar/Nav";

const rubik = Rubik({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
