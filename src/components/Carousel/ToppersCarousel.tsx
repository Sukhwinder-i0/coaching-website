import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Topper from "../Achievers/Topper"

export function ToppersCarousel() {
  const toppers = [

    { name: "Eve", rank: "AIR 42", batch: "2023-24", category: "EWS" },
    { name: "Alice", rank: "AIR 1", batch: "2020-21", category: "General",url:"https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Bob", rank: "AIR 5", batch: "2021-22", category: "OBC" },
    
  ]

  return (
    <Carousel className="w-full max-w-2xl flex justify-center" >
      <CarouselContent className="flex justify-center">
        {toppers.map((topper, index) => (
          <CarouselItem key={index}>
            <div className="p-5 w-full flex justify-center ">
              <Topper
                name={topper.name}
                rank={topper.rank}
                batch={topper.batch}
                category={topper.category}
                url={topper.url}
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
