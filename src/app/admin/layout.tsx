// app/(admin)/layout.tsx or app/admin/layout.tsx
'use client'

import React from 'react'
import AdminSidebar from '@/components/Navbar/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-800">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
