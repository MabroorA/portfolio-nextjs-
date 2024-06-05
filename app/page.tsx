

import Image from "next/image";
import pfpPic from "../public/cropped_pfp.jpeg"
import ProjectsSection from "@/components/projectsSection";
import { PiHandWavingBold } from "react-icons/pi";



export default function Home() {
  return (
    
    <main className="flex flex-col  lg:py-5 lg:flex-col   ">
      {/* border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800  */}
      <div className="flex flex-col justify-left  lg:flex-row lg:justify-between  w-full py-10 ">
        
        <div className=" flex flex-col  text-left lg:text-left">
            <div className="flex flex-row justify-left text-3xl lg:text-5xl font-black text-white space-x-2  ">
              <div className="animate-bounce">
                <PiHandWavingBold />
              </div>
              <div className="text-3xl lg:text-5xl font-black text-white">
                Hey, I&apos;m Mabroor
              </div>
            </div>
            <div className=" text-3xl lg:text-4xl font-black whitespace-nowrap py-2 lg:py-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500 ">
            A Full stack developer 
            </div>
            <div className=" text-2xl lg:text-3xl text-gray-400 mt-0 lg:mt-5">
            I build things sometimes  
            </div>
        </div>

        <Image
        className="rounded-full w-28 lg:w-52 lg:mx-0 md:mx-auto my-2"
        src={pfpPic}
        alt="pfp picture"

        />
        
        
        
      </div>
      <ProjectsSection/>

      
    </main>
  );
}
