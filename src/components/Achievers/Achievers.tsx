import React from 'react'
import { ToppersCarousel } from '../Carousel/ToppersCarousel'

interface Props {
  title: string
  description?: string
}

const Achievers = (props:Props) => {
  return (
    <div className='w-9/10 flex justify-center items-center flex-col '>
      <div className='my-20'>
        <h1 className='mb-4 uppercase font-extrabold text-4xl '>{props.title}</h1>
        <p className='mb-4 italic text-xs'>{props.description}</p>
      </div> 
      <ToppersCarousel />
    </div>

  )
}

export default Achievers