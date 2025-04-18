import React from 'react'

interface BannerProps {
  url: string
  alt?: string
}

const Banner = ({ url, alt }: BannerProps) => {
  return (
    <div className="w-full h-[80vh] flex rounded-3xl items-center justify-center overflow-hidden">
      <img src={url} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export default Banner
