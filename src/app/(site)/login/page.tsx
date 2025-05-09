'use client';

import React, { useState } from 'react';
import { LuLogIn } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import SelectBox from '@/components/SelectBox';
import { signIn } from 'next-auth/react';

const Page = () => {
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      userType: type,
    });

    if (result?.error) {
      alert(`Login failed: ${result.error}`);
      return;
    }

    alert('Login successful');
    if (type === 'admin') {
      router.push('/admin');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50">
      <div className="max-w-md w-full bg-slate-900 rounded-lg p-6 space-y-4 relative border-l-4 border-blue-500">
        
        <InputBox
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-center text-sm text-white">
          Don't have an account?
          <button
            className="text-blue-400 hover:underline cursor-pointer ml-1"
            onClick={() => router.push('/register')}
          >
            Signup
          </button>
        </p>
        <div className="flex w-full justify-between">
          <Button text="Login" icon={<LuLogIn />} onClick={handleLogin} />
          <Button
            className="bg-red-600 text-white border border-red-600 hover:shadow-md hover:shadow-red-400"
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
