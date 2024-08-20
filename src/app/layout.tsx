import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigations/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResuAi",
  description: "Analyze your resume using AI-powered tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark "> 
      <body className={inter.className}>
        <Header />
        <hr  className="w-[90%] mx-auto rounded-full border-[#464646]" />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
