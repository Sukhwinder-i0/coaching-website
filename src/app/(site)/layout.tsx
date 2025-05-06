'use client'

import { ReactNode, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import '../globals.css'
import { useAdmin } from "@/store/useAdminStore";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  const { isAdmin, setIsAdmin } = useAdmin()

  return (
    <html lang="en">
      <body className="font-[sans] bg-gradient-to-r from-slate-700 to-slate-800">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
