// app/(admin)/layout.tsx
import React from 'react'
import AdminSidebar from '@/components/Navbar/AdminSidebar'
import '../globals.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-800">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
