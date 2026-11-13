import type { Metadata } from "next";
import "./globals.css";
import Loading from "./components/loading"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react";
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
    <html lang={locale} className="h-full antialiased snap-y snap-proximity scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Providers locale={locale}>
            <Suspense fallback={<Loading />}>
              <Navbar locale={locale} />
              {children}
              <Footer />
            </Suspense>
        </Providers>
      </body>
    </html>
  );
}
