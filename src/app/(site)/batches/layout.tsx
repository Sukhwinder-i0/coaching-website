'use client'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { UseAdmin } from '@/store/useAdminStore'
import { UseModalOpen } from '@/store/useModalStore'
import { GraduationCap } from 'lucide-react'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {

  const {isAdmin} = UseAdmin();
  const {toggleModalOpen} = UseModalOpen()

  return (
    <div className="w-full flex flex-col items-center px-6 py-20 pt-40 bg-gradient-to-r from-slate-800 to-slate-700 text-white min-h-screen">
      <div className=' w-[60%] flex justify-between items-center'> 
      <Heading title="Our Batches" description="Choose the right path for your competetive journey" />
      {isAdmin && <Button variant="secondary" className='text-xs ' text='AddBatch' icon={<GraduationCap />} onClick={toggleModalOpen} />}
      </div>
      <main>
        {children}
      </main>
    </div>

  )
}

export default layout

