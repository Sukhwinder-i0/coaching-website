import Heading from '@/components/Heading'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="w-full flex flex-col items-center px-6 py-20 pt-40 bg-gradient-to-r from-slate-800 to-slate-700 text-white min-h-screen">
      <Heading title="Our Batches" description="Choose the right path for your competetive journey" />
      <main>
        {children}
      </main>
    </div>

  )
}

export default layout

