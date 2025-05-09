'use client'

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Item from './Item';
import Logo from './Logo';
import Button from '../Button';
import { LuLogIn } from 'react-icons/lu';
import { useAdmin } from '@/store/useAdminStore';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Batches', path: '/batches' },
  { text: 'Faculty', path: '/faculty' },
  { text: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { isAdmin } = useAdmin();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-gray-900 shadow-md px-4 sm:px-10 py-2 text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold cursor-pointer">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-5 text-white">
          {!isAdmin &&
            navItems.map((item) => (
              <Item
                key={item.path}
                text={item.text}
                href={item.path}
                isActive={pathname === item.path}
              />
            ))}
          <Button text="Login" icon={<LuLogIn />} onClick={() => router.push('/login')} />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-3 text-white px-4">
          {!isAdmin &&
            navItems.map((item) => (
              <Item
                key={item.path}
                text={item.text}
                href={item.path}
                isActive={pathname === item.path}
              />
            ))}
          <Button text="Login" icon={<LuLogIn />} onClick={() => router.push('/login')} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
