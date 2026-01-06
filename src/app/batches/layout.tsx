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
    <div className="w-full flex flex-col items-center bg-[#ECF9FF] text-black px-6 py-20 pt-40 min-h-screen">
      <div className='  flex justify-between items-center'> 
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

