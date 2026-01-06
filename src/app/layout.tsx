'use client'

import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <html lang="en">
      <body className=" bg-[#ECF9FF]">
        <Navbar />
        <main className="min-h-auto">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
