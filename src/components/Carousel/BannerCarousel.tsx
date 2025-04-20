import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Banner from "../Banner"

export function BannerCarousel() {
  const banners = [
    {
      url: "/poster.png",
      alt: "Banner 2"
    }, 
    {
      url: "/logo.png",
      alt: "Banner 2"
    }, 
    
    {
      url: "/banner-5.avif",
      alt: "Banner 3"
    }, 
    {
      url: "/banner-4.jpg",
      alt: "Banner 3"
    }, 
    {
      url: "/banner-8.avif",
      alt: "Banner 1"
    }, 
    {
      url: "/banner-7.jpg",
      alt: "Banner 2"
    }, 
    
    {
      url: "/Logo.jpg",
      alt: "Banner 2"
    }, 
    
    

  ]

  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <Banner url={banner.url} alt={banner.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
