import ProjectsSection from "@/components/projectsSection";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import pfpPic from "../public/linkedin-pfp.jpg"
import humanizePic from "../public/humanize-portfolio.png"
import StocksPic from "../public/stock-pfp.png"


export default function Home() {
  return (
    
    <main className="flex lg:flex-col  lg:py-5  ">
      {/* border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800  */}
      <div className="flex flex-row justify-between  w-full py-10 ">
        
        <div className="  ">
            <div className="text-5xl font-black whitespace-nowrap py-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500">
            Full stack developer 
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
      <div className="flex flex-col">
        <div className="text-white border-b-2 py-2">Projects</div>
        {/* CARDS */}
        <div className="flex flex-row space-x-3 py-5 ">
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-white lg:min-w-72 lg:min-h-72 rounded-2xl ">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className=" lg:min-w-60 lg:min-h-60 border object-contain rounded-2xl  "
                  src={humanizePic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-black py-2 ">
                Humanize
              </div>
            
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-white lg:min-w-72 lg:min-h-72 rounded-2xl ">
            {/* PIC */}
            <div className=" bg-inherit ">
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className=" lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                  src={StocksPic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-black py-2 ">
                Finstimulate
              </div>
            
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-white lg:min-w-72 lg:min-h-72 rounded-2xl ">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className=" lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                  src={StocksPic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-black py-2 ">
                Refugee Aid 
              </div>
            
          </div>

          {/* CARD */}
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-white lg:min-w-72 lg:min-h-72 rounded-2xl ">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className=" lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                  src={StocksPic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
            {/* Project Title */}
              <div className="bg-inherit text-2xl text-black py-2 ">
                Private Cloud
              </div>
            
          </div>

        </div>
      </div>

      
    </main>
  );
}
