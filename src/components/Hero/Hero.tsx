import React from 'react'
import { BannerCarousel } from '../Carousel/BannerCarousel'

interface HeroProps {
  title: string
  tagline: string
}

const Hero = (props:HeroProps) => {
  return (
    <div className='w-9/10 flex justify-center items-center flex-col min-h-screen'>
      <div className='my-20'>
        <h1 className='mb-4 uppercase font-extrabold text-4xl '>{props.title}</h1>
        <p className='mb-4 italic text-xs'>{props.tagline}</p>
      </div>
      <BannerCarousel />
    </div>

  )
}

export default Hero