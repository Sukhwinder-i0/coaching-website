'use client'

import Card from "@/components/Card";
import { BannerCarousel } from "@/components/Carousel/BannerCarousel";
import { ToppersCarousel } from "@/components/Carousel/ToppersCarousel";
import Heading from "@/components/Heading";
import { Award, LineChart, ListChecks } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ECF9FF] text-black px-4 sm:px-6 lg:px-12 py-30">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen">
        
        <div className="my-10 text-center">
          <Heading title="Vision Science Academy" description="We believe in Quality over Quantity" />
        </div>
        

        <div className="w-6/8 lg:w-7/8">
          <BannerCarousel />
        </div>

        <div className="flex flex-col items-center text-center mt-20 w-full">
          <Heading title="Why Choose US" />
          <div className="mt-12 w-full flex flex-col md:flex-row justify-center items-center gap-8 px-2">
            <Card
              type="feature"
              icon={<Award size={40} />}
              title="1100+ Selections"
              description="Cracked competitive exams with our expert mentorship and dedication."
              
            />
            <Card
              icon={<ListChecks size={40} />}
              type="feature"
              title="Personalized Study Plan"
              description="Adaptive learning paths tailored to each student's strengths and weaknesses."
            
            />
            <Card
              icon={<LineChart size={40} />}
              type="feature"
              title="Progress Tracking & Analytics"
              description="Students and parents can track progress, attendance, test scores, etc."
              
            />
          </div>
        </div>

        <div className="p-20 h-auto flex items-center justify-center">
          <Heading title="Meet Our Achievers" />
        </div>
        <div className="lg:w-2/5 w-full items-center flex justify-center ">
            <ToppersCarousel />
        </div>

      </div>
    </div>
  );
}
