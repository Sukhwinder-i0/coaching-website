import Image from 'next/image'
import React from 'react'

interface BannerProps {
  url: string
  alt: string
}

const Banner = ({ url, alt }: BannerProps) => {
  return (
    <div className="w-full h-50 lg:h-[80vh] flex rounded-sm items-center justify-center overflow-hidden">
      <Image width={400} height={400} src={url} alt={alt} className="w-full lg:h-full object-cover" />
    </div>
  )
}

export default Banner
