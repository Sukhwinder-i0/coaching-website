import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; 

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
