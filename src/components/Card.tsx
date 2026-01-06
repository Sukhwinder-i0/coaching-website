'use client'

import Image from 'next/image'
import React, { ReactElement } from 'react'

interface CardProps {
  type: 'topper' | 'faculty' | 'feature'
  name?: string
  rank?: string
  category?: string
  batch?: string
  subject?: string
  experience?: number
  bio?: string
  imageUrl?: string
  alt?: string
  title?: string
  description?: string
  logo?: string
  className?: string
  icon?: ReactElement
  onClick?: () => void
}

const Card: React.FC<CardProps> = (props) => {
  if (props.type === 'topper') {
    return (
      <div onClick={props.onClick} className={`${props.className} flex flex-col items-center justify-around py-8 px-4 bg-[#C6E7FF] rounded-2xl h-auto border-2 border-blue-400 `}>
        <div className='flex rounded-full relative w-full justify-center items-center flex-col pb-6'>
          {props.imageUrl && props.alt &&
             <Image  width={40} height={40} className='mb-4 rounded-full content-overflow' src={props.imageUrl} alt={props.alt} />
          }
           <div className='text-lg px-4 py-2 flex justify-center capitalize rounded-md'>
            {props.name}
          </div>
        </div>
        <div className='text-3xl pb-6 uppercase text-[#4692fc]'>{props.rank}</div>
        <div className='w-full flex justify-between px-4 text-sm uppercase'>
          <span>{props.category}</span>
          <span>{props.batch}</span>
        </div>
      </div>
    )
  }

  if (props.type === 'faculty') {
    return (
      <div onClick={props.onClick} className='rounded-3xl bg-[#E8F9FF] w-full max-w-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-blue-500/40 transition duration-300 ease-in-out hover:scale-105 border-2 border-blue-500'>
        <div className='w-28 h-28 rounded-full overflow-hidden border-2 border-blue-500'>
          { props.imageUrl && props.alt &&
            <Image src={props.imageUrl} alt={props.alt} className='w-full h-full object-cover' />  
          }
        </div>
        <div className='flex flex-col text-white space-y-2'>
          <h2 className='text-2xl font-semibold text-blue-400'>{props.name}</h2>
          <p className='text-sm text-blue-200'>{props.subject}</p>
          <p className='text-sm text-gray-800'>{props.experience}+ Years Experience</p>
          <p className='text-sm text-gray-000'>{props.bio}</p>
        </div>
      </div>
    )
  }

  if (props.type === 'feature') {
    return (
      <div onClick={props.onClick} className={`${props.className} rounded-sm bg-[#D9EAFD] w-full max-w-sm text-center p-6 shadow-lg shadow-blue-600/30 flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out`} >
        <div className='mb-4  flex justify-center items-center '>
          {props.icon}
        </div>
        <h3 className='text-xl font-bold text-blue-400 mb-2'>{props.title}</h3>
        <p className='text-sm text-gray-700'>{props.description}</p>
      </div>
    )
  }

  return null
}

export default Card