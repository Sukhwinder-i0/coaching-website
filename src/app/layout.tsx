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
      <body className="font-[sans] bg-gradient-to-r from-slate-700 to-slate-800">
        <Navbar />
        <main className="min-h-auto">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
