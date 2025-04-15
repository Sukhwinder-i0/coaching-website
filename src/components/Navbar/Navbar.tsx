
'use client'
import React from 'react'
import Item from './Item'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-gray-900 px-6 py-2 shadow-md text-sm">
      <div className="text-white text-xl font-bold">
        <Logo />
      </div>
      <div className="flex gap-4">
        <Item text="Home" isActive onClick={() => console.log('Home')} />
        <Item text="Courses" onClick={() => console.log('Courses')} />
        <Item text="Faculty" onClick={() => console.log('Faculty')} />
        <Item text="Contact" onClick={() => console.log('Contact')} />
        
      </div>
      
    </nav>
  )
}

export default Navbar
