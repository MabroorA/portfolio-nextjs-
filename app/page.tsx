

import Image from "next/image";
import pfpPic from "../public/linkedin-pfp.jpg"
import ProjectsSection from "@/components/projectsSection";
import { PiHandWavingBold } from "react-icons/pi";



export default function Home() {
  return (
    
    <main className="flex lg:flex-col  lg:py-5  ">
      {/* border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800  */}
      <div className="flex flex-row justify-between  w-full py-10 ">
        
        <div className="  ">
            <div className="flex flex-row text-5xl font-black text-white space-x-2">
              <div className="animate-bounce">
                <PiHandWavingBold />
              </div>
              <div className="text-5xl font-black text-white">
                Hey, I&apos;m Mabroor
              </div>
            </div>
            <div className="text-4xl font-black whitespace-nowrap py-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500 ">
            A Full stack developer 
            </div>
            <div className="text-3xl text-gray-400">
            I build things sometimes  
            </div>
        </div>

        <Image
        className="rounded-full"
        src={pfpPic}
        alt="pfp picture"
        width={200}
        />
        
        
        
      </div>
      <ProjectsSection/>

      
    </main>
  );
}
