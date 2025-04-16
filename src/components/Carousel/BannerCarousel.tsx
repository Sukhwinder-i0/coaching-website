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
      url: "https://images.unsplash.com/photo-1584697964403-a73f91c5f26e",
      alt: "Banner 1"
    }
  ]

  return (
    <Carousel className="w-full border border-slate-900">
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
