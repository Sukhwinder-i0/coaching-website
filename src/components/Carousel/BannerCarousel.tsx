import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Banner from "../Hero/Banner"

export function BannerCarousel() {
  const banners = [
    {
      url: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Banner 1"
    }, 
    {
      url: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Banner 2"
    }, 
    {
      url: "https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Banner 3"
    }, 

  ]

  return (
    <Carousel className="w-full mb-20 ">
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
