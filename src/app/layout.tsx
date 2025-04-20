import { ReactNode } from "react";
import Footer from "@/components/Footer";
import './globals.css'
import Navbar from "@/components/Navbar/Navbar";


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[sans] bg-gradient-to-r from-slate-700 to-slate-800">
        <Navbar />
          <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
