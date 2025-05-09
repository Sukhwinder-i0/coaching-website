'use client'

import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div >  
        <Image width={40} height={40} className='h-16 white object-contain' src='/logobgnot.png' alt='logo'/>
    </div>
  )
}

export default Logo