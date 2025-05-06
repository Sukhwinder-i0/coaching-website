'use client'

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Item from './Item';
import Logo from './Logo';
import Button from '../Button';
import { LuLogIn } from 'react-icons/lu';
import { useModalOpen } from '@/store/useModalStore';
import { useAdmin } from '@/store/useAdminStore';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Batches', path: '/batches' },
  { text: 'Faculty', path: '/faculty' },
  { text: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { isModalOpen, toggleModalOpen } = useModalOpen();
  const { isAdmin } = useAdmin();
  const pathname = usePathname();

  const router =  useRouter()

  return (
    <>
      <nav className="fixed top-0 z-10 w-full flex justify-between items-center bg-gray-900 px-14 py-1 shadow-md text-sm">
        <div className="text-white text-xl font-bold cursor-pointer">
          <Logo />
        </div>

        <div className="flex justify-center items-center gap-3">
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
      </nav>

      
    </>
  );
};

export default Navbar;
