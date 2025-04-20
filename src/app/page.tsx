'use client'

import Card from "@/components/Card";
import { BannerCarousel } from "@/components/Carousel/BannerCarousel";
import { ToppersCarousel } from "@/components/Carousel/ToppersCarousel";
import Heading from "@/components/Heading";
import { Award, LineChart, University } from "lucide-react";
import { MessageCircle } from 'lucide-react'
import { ListChecks } from 'lucide-react'



export default function Home() {
  return (
    <div className="w-full max-w-screen min-h-screen justify-center items-center flex flex-col px-6 py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
      <div className="w-9/10 flex justify-center items-center flex-col min-h-screen">
        <div className="my-20">
          <Heading title="Vision Science Academy" description="We believe in Quality over Quantity"/>
        </div>
        <BannerCarousel />


        <div className="flex flex-col items-center text-center mt-20">
          <Heading title="Why Choose US" />
          <div className=" flex justify-between gap-10 items-center mt-20">
            <Card
              type="feature"
              icon={<Award size={40} />}
              title="1100+ Selections"
              description="Cacked competitive exams with our expert mentorship and dedication."
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

        <div className="mt-30 text-center gap-15 flex flex-col justify-center items-center">
          <Heading title="Meet Our Proud Achievers" />
          <ToppersCarousel />
        </div>
    </div>
    </div>

  );
}
