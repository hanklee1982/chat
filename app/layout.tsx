import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/lib/i18n";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrayChat - 虾聊 | AI创业工作平台",
  description: "专为一人公司创业者、个人创作者、小微企业主打造的专属AI聊天工作平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
