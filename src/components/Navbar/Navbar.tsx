'use client'

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Item from './Item';
import Logo from './Logo';
import Button from '../Button';
import { LuLogIn } from 'react-icons/lu';
import { UseAdmin } from '@/store/useAdminStore';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Batches', path: '/batches' },
  { text: 'Faculty', path: '/faculty' },
  { text: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { isAdmin } = UseAdmin();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-white shadow-md px-4 py-1 text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-black text-xl font-bold cursor-pointer">
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
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-3 text-black px-4">
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
