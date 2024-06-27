

import Image from "next/image";
import pfpPic from "../public/cropped_pfp (1).jpeg"
import github from "../public/githubmap-june.png"
import ProjectsSection from "@/components/projectsSection";
import { PiHandWavingBold } from "react-icons/pi";
import Meteors from "@/components/magicui/meteors";
import BoxReveal from "@/components/magicui/box-reveal";
import Marquee from "@/components/magicui/marquee";



export default function Home() {
  return (
    
    <main className="flex flex-col lg:py-5 lg:flex-col ">
      
      {/* border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800  */}
      <div className="flex flex-col w-full py-10 justify-left lg:flex-row lg:justify-between ">
        
        <div className="flex flex-col text-left lg:text-left">
            <div className="flex flex-col text-3xl font-black text-white lg:flex-row justify-left lg:text-5xl lg:space-x-2">
             
                <div className="animate-bounce">
                  <PiHandWavingBold />
                </div>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="text-3xl font-black text-white lg:text-5xl">
                  Hey, I&apos;m Mabroor
                </div>
                </BoxReveal>
              
            </div>
            <div>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="py-1 text-3xl font-black text-transparent md:text-4xl md:py-5 bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500">
                A Full stack developer 
                </div>
                </BoxReveal>
            </div>
            <div className="mt-0 text-2xl text-gray-400 md:text-3xl">
              I build things sometimes  
            </div>
            
            <div className="w-64 pt-4 rounded-lg lg:w-80 lg:pt-12">
              <div className="text-white">
                2024
              </div>
              <Image
              className="rounded-lg"
              src={github}
              alt="pfp picture"

              />
            </div>
        </div>
        <div className="flex flex-col ">
          <div className="pb-2 lg:pb-4">
            <Image
            className="w-40 mt-5 rounded-full lg:mt-0 md:w-52 lg:mx-0"
            src={pfpPic}
            alt="pfp picture"
            />
          </div>
          
          <div className="text-left text-teal-500 lg:text-center">
            Past
          </div>
          <div className="flex flex-col pt-1 text-left lg:text-center">
            <div className="flex flex-col">
              <div className="text-gray-300 ">
                Web developer intern 
              </div>
              <div className="text-gray-700 ">
                Minibikers
                </div>

            </div>
            <div className="flex flex-col">
              <div className="text-gray-500 ">
              Shopify Developer 
              </div>
              <div className="text-gray-700 ">
              Miero
                </div>

            </div>
            <div className="flex flex-col">
              <div className="text-gray-600 ">
              Teaching assistant 
              </div>
              <div className="text-gray-700 ">
              University of Leicester
                </div>

            </div>

            
          </div>
          

        </div>
        
        
        
      </div>
      {/* PROJECTS */}
      <div className="relative pb-1 bg-clip-padding">
          <div className="absolute inset-0 border-b-0 border-transparent bg-gradient-to-r from-teal-300 to-purple-500 rounded-t-md"></div>
          <div className="relative py-2 text-white rounded-t-md">
            Projects
          </div>
        </div>
        <div className="hidden md:block">
          <Marquee pauseOnHover>
            <ProjectsSection />
          </Marquee>
        </div>
        <div className="block md:hidden">
          <ProjectsSection />
        </div>

      
    </main>
  );
}
