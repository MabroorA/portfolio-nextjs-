

import Image from "next/image";
import pfpPic from "../public/cropped_pfp (1).jpeg"
import github from "../public/githubmap-june.png"
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
            <div>
                <div className=" text-3xl md:text-4xl font-black  py-1 md:py-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500 ">
                A Full stack developer 
                </div>
            </div>
            <div className=" text-2xl md:text-3xl text-gray-400 mt-0  ">
              I build things sometimes  
            </div>
            
            <div className=" rounded-lg  w-64 pt-4  lg:w-80 lg:pt-12">
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
        <div className="flex flex-col  ">
          <div className="pb-2 lg:pb-4">
            <Image
            className=" rounded-full w-40 mt-5 lg:mt-0 md:w-52 lg:mx-0  "
            src={pfpPic}
            alt="pfp picture"
            />
          </div>
          
          <div className=" text-teal-500 text-left lg:text-center">
            Past
          </div>
          <div className="flex flex-col text-left  lg:text-center pt-1">
            <div className="flex flex-col">
              <div className=" text-gray-300">
                Web developer intern 
              </div>
              <div className=" text-gray-700">
                Minibikers
                </div>

            </div>
            <div className="flex flex-col">
              <div className=" text-gray-500">
              Shopify Developer 
              </div>
              <div className=" text-gray-700">
              Miero
                </div>

            </div>
            <div className="flex flex-col">
              <div className=" text-gray-600">
              Teaching assistant 
              </div>
              <div className=" text-gray-700">
              University of Leicester
                </div>

            </div>

            
          </div>
          

        </div>
        
        
        
      </div>
      <ProjectsSection/>

      
    </main>
  );
}
