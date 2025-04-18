import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

interface TopperProps {
  name: string
  category: string
  batch: string
  rank: string
  className?: string
  url?: string
  alt?: string
}

const Topper = (props: TopperProps) => {
  return (
    <div className={`${props.className} w-2/3 flex flex-col items-center justify-around py-8 px-4 bg-slate-900 rounded-2xl h-auto border-2 border-blue-400 shadow-lg shadow-blue-400`}>
        <div className='flex w-full justify-center items-center flex-col pb-6'>
            
              <img className='w-25 rounded-full h-25 mb-4 border content-overflow' src={props.url} alt={props.alt} />
          
          <div className='text-lg bg-slate-700 px-4 py-2 flex justify-center capitalize rounded-md'>
            {props.name}
          </div>
        </div>
        <div className='text-3xl pb-6 text-blue-500'>
          {props.rank}
        </div>
        <div className='w-full flex justify-between px-4 text-sm uppercase'>
          <span>{props.category}</span>
          <span>{props.batch}</span>
        </div>
    </div>
  )
}

export default Topper