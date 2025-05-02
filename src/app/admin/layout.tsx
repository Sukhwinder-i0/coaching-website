'use client'

import { ReactNode, useState } from "react";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Item from "@/components/Navbar/Item";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html lang="en">
      <body className="font-[sans] bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="border-b-2 border-slate-600">
        <Heading title="Admin Panel" description="Manage Vision IIT" />
        <div>
          <Item href="#" text="Courses" />
          <Item href="#" text="Faculties" />
          <Item href="#" text="Toppers" />
           
        </div>
        </div>
        
        
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
