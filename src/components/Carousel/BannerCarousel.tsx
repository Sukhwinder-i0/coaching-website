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
      url: "/banner-5.avif",
      alt: "Banner 3"
    }, 
     
    {
      url: "/Poster.png",
      alt: "Banner 1"
    }, 
    
    
    {
      url: "/banner-4.jpg",
      alt: "Banner 4"
    }, 
    {
      url: "/banner-8.avif",
      alt: "Banner 5"
    }, 
    {
      url: "/banner-7.jpg",
      alt: "Banner 2"
    }, 
    
    {
      url: "/poster-4.jpg",
      alt: "Banner 2"
    }, 
    {
      url: "/result-9.jpg",
      alt: "Banner 2"
    }, 
    {
      url: "/poster-4.jpg",
      alt: "Banner 2"
    }, 
    {
      url: "/logo.png",
      alt: "Banner 2"
    }
    
    
    

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
