import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/providers/Providers";
import { Toaster } from "@/components/ui/toaster";

import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} bg-slate-50`}>
        <Navbar />
        <main className="flex flex-col  grainy-light min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
