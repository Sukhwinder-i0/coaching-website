import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Topper from "../Topper/Topper"

export function CarouselDemo() {
  const toppers = [
    { name: "Alice", rank: "AIR 1", batch: "2020-21", category: "General" },
    { name: "Bob", rank: "AIR 5", batch: "2021-22", category: "OBC" },
    { name: "Charlie", rank: "AIR 12", batch: "2022-23", category: "SC" },
    { name: "David", rank: "AIR 20", batch: "2020-21", category: "ST" },
    { name: "Eve", rank: "AIR 42", batch: "2023-24", category: "EWS" },
    
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
