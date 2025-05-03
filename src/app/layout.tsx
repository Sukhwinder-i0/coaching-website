'use client'

import { ReactNode, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import LoginPopup from "@/components/LoginPopup";
import './globals.css'
import { useAdmin } from "@/store/useAdminStore";
import Heading from "@/components/Heading";
import Item from "@/components/Navbar/Item";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  const { isAdmin, setIsAdmin } = useAdmin()

  return (
    <html lang="en">
      <body className="font-[sans] bg-gradient-to-r from-slate-700 to-slate-800">
        <LoginPopup />
        {isAdmin ?
          <div className="fixed backdrop-blur-lg flex shadow-md shadow-slate-700 justify-between items-center py-2 w-full top-0 px-4 border-slate-600">
           <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-slate-300">Admin Panel</h3>
            <p className="text-sm italic text-slate-700">Manage VisionIIT</p>
           </div>
          <div>
            <Item href="#" text="Courses" />
            <Item href="#" text="Faculties" />
            <Item href="#" text="Toppers" />
             
          </div>
          </div>  
          : <Navbar />
        }
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
