// components/admin/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Button from '../Button'
import { PiSignOutBold } from 'react-icons/pi'
import { useAdmin } from '@/store/useAdminStore'

const navItems = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Batches', path: '/admin/batches' },
  { name: 'Faculties', path: '/admin/faculties' },
  { name: 'Toppers', path: '/admin/toppers' }
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const {setIsAdmin} = useAdmin()

  return (
    <aside className="w-1/8 flex flex-col items-start justify-between bg-slate-900 text-white min-h-screen p-4 pb-8 space-y-4">
      <div className='space-y-4'>
     <div className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-bold text-slate-300">Admin Panel</h3>
        <p className="text-xs italic text-slate-700">Manage VisionIIT</p>
      </div>
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <div
            className={clsx(
              'text-xs py-2 px-4 rounded hover:bg-slate-800 transition',
              pathname === item.path && 'bg-slate-800'
            )}
          >
            {item.name}
          </div>
        </Link>
      ))}
      </div>
      <Button 
        text='Signout' 
        icon={<PiSignOutBold />} 
        onClick={() => setIsAdmin(false)}
        className='w-2/3 text-xs py-1'
        />
    </aside>
  )
}
