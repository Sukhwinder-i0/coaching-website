import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Card from "../Card"

export function ToppersCarousel() {
  const toppers = [

    { name: "Vishal", rank: "AIR 237", category: "jee advanced", batch: "2022", url: "/vishal-1.png" },
    { name: "Himanshu Galav", rank: "AIR 2129", category: "jee advanced", batch: "2021(obc)", url:"himanshu1.jpg" },
    { name: "Nidhi Arya", rank: "Neet score 675", category: "Neet", batch:"2024", url: "/nidhi.jpg"},
    
  ]

  return (
    <Carousel className="w-full " >
      <CarouselContent >
        {toppers.map((topper, index) => (
          <CarouselItem key={index} >
            <div className="p-5 w-full flex justify-center ">
              <Card
              type="topper"
                name={topper.name}
                rank={topper.rank}
                batch={topper.batch}
                category={topper.category}
                imageUrl={topper.url}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
