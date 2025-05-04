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
    <aside className="w-auto flex flex-col items-between justify-between bg-slate-900 text-white min-h-screen p-4 pb-8 space-y-4 border-r-4 border-slate-500 rounded-r-xl ">
      <div className='space-y-6'>
     <div className="flex w-full flex-col pb-2 items-start gap-1 border-b border-dashed border-slate-400">
        <h3 className="text-xl font-bold text-slate-200">Admin Panel</h3>
        <p className="text-xs italic text-slate-500">Manage VisionIIT</p>
      </div>
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <div
            className={clsx(
              'text-xs py-2 px-4 rounded hover:bg-slate-800 transition',
              pathname === item.path && 'bg-slate-600'
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
        className='w-auto text-xs py-1'
        />
    </aside>
  )
}
