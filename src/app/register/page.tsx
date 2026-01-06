'use client'

import React, { useState } from 'react';
import { LuUserPlus } from 'react-icons/lu'; 
import { IoClose } from 'react-icons/io5';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [type, setType] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (!res.ok) {
        const { error } = await res.json();
        alert(`Error: ${error}`);
        return;
      }

      alert('Signup successful!');
      router.push('/login');
    } catch (err) {
      console.log(err)
      alert('Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 ">
      <div className="max-w-md w-full bg-blue-100 rounded-lg p-6 space-y-4 relative border-l-4 border-blue-500">

      {/* <SelectBox 
        value={type} 
        onChange={setType} 
      /> */}

        <InputBox 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <InputBox 
          type="email" 
          placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          type="password" placeholder="Password" 
          value={password} onChange={(e) => 
          setPassword(e.target.value)} 
        />

        <p className="text-center text-sm text-gray-700">
          Already have an account?
          <button
            className="text-blue-400 hover:underline cursor-pointer ml-1"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </p>

        <div className='flex w-full justify-between'>
          <Button text='Signup' icon={<LuUserPlus />} onClick={handleSignup} />
          <Button
            className='bg-red-600 text-white hover:bg-red-800'
            text="Close"
            icon={<IoClose />}
            onClick={() => router.push('/')}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
