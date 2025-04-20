'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Item from './Item'
import Logo from './Logo'
import Button from '../Button'
import { Rocket } from 'lucide-react'

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Courses', path: '/courses' },
  { text: 'Faculty', path: '/faculty' },
  { text: 'Contact', path: '/contact' }
]

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-10 w-full flex justify-between items-center bg-gray-900 px-14 py-1 shadow-md text-sm">
      <div
        className="text-white text-xl font-bold cursor-pointer"
        onClick={() => router.push('/')}
      >
        <Logo />
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Item
            key={item.path}
            text={item.text}
            isActive={pathname === item.path}
            onClick={() => router.push(item.path)}
          />
        ))}
        <Button text='Join Now' icon={<Rocket />}/>
      </div>
     
    </nav>
  )
}

export default Navbar
