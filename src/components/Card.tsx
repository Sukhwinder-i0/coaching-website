import React, { JSX, ReactElement } from 'react'

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
}

const Card: React.FC<CardProps> = (props) => {
  if (props.type === 'topper') {
    return (
      <div className={`${props.className} w-2/3 flex flex-col items-center justify-around py-8 px-4 bg-slate-900 rounded-2xl h-auto border-2 border-blue-400 shadow-lg shadow-blue-400`}>
        <div className='flex w-full justify-center items-center flex-col pb-6'>
          <img className='w-40 rounded-full h-40 mb-4 border content-overflow' src={props.imageUrl} alt={props.alt} />
          <div className='text-lg bg-slate-700 px-4 py-2 flex justify-center capitalize rounded-md'>
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
      <div className='rounded-3xl bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 w-full max-w-lg shadow-xl p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-blue-500/40 transition duration-300 ease-in-out'>
        <div className='w-28 h-28 rounded-full overflow-hidden border-2 border-blue-500'>
          <img src={props.imageUrl} alt={props.alt} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col text-white space-y-2'>
          <h2 className='text-2xl font-semibold text-blue-400'>{props.name}</h2>
          <p className='text-sm text-blue-200'>{props.subject}</p>
          <p className='text-sm text-gray-300'>{props.experience}+ Years Experience</p>
          <p className='text-sm text-gray-400'>{props.bio}</p>
        </div>
      </div>
    )
  }

  if (props.type === 'feature') {
    return (
      <div className='rounded-lg bg-slate-900 w-full max-w-sm text-center p-6 shadow-lg shadow-blue-600/30 flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in-out'>
        <div className='mb-4  flex justify-center items-center '>
          {props.icon}
        </div>
        <h3 className='text-xl font-bold text-blue-400 mb-2'>{props.title}</h3>
        <p className='text-sm text-gray-300'>{props.description}</p>
      </div>
    )
  }

  return null
}

export default Card