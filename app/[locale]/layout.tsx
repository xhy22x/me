import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { getStaticParams } from "@/locales/server";

export const metadata: Metadata = {
  title: "xhy22x",
  description: "Personal portfolio of xhy22x",
};

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ 
  children: React.ReactNode; 
  params: Promise<{ locale: string; }> 
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
