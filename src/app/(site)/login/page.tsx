'use client'

import React, { useState } from 'react';
import { LuLogIn, LuUserPlus } from 'react-icons/lu'; 
import { useModalOpen } from '@/store/useModalStore';
import { ImCross } from 'react-icons/im';
import { RxCross2 } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import InputBox from '@/components/InputBox';
import SelectBox from '@/components/SelectBox';
import Button from '@/components/Button';



const LoginPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prevState: boolean) => !prevState);

  const {isModalOpen,toggleModalOpen} = useModalOpen()

  return (
    <>
    {isModalOpen &&  <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 ">
      <div className="max-w-md w-full bg-slate-900 rounded-lg p-6 space-y-4 relative border-l-4 border-blue-500">
        
        <SelectBox />

        {!isLogin && <InputBox type="text" placeholder="Full Name" />}
        <InputBox type="email" placeholder="Email" />
        
        <InputBox type="password" placeholder="Password" />

        <p className="text-center text-sm text-white">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            className="text-blue-400 hover:underline cursor-pointer ml-1"
            onClick={toggleLogin}
            >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>

        <div className='flex w-full justify-between'>
       
        <Button
          text={isLogin ? 'Login' : 'Signup'}
          icon={isLogin ? <LuLogIn /> : <LuUserPlus />}
        />
        <Button
          className='bg-red-600 text-white border border-red-600 hover:shadow-md hover:shadow-red-400'
          text="Close"
          icon={<IoClose />}
          onClick={toggleModalOpen}
        />
           
        </div>

      </div>
    </div>
  }
    </>
  );
};

export default LoginPopup
