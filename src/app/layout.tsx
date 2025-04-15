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
      <body className="font-[sans] bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Navbar />
          <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
