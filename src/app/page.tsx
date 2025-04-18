import Achievers from "@/components/Achievers/Achievers";
import { BannerCarousel } from "@/components/Carousel/BannerCarousel";
import { ToppersCarousel } from "@/components/Carousel/ToppersCarousel";
import FacultyCard from "@/components/Faculty/Faculty";
import Faculty from "@/components/Faculty/Faculty";
import FacultySec from "@/components/Faculty/FacultySec";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
      <section className="w-full max-w-screen min-h-screen justify-center items-center flex flex-col px-6 py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        
        <Hero title="vision science academy"  tagline="- make your vision come true, We Beleive in Quality over Qunatity"/>
        <Achievers title="Meet our proud achievers" />
        <FacultySec />
      </section>
  );
}
