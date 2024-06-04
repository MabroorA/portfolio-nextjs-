import React from 'react'

import Link from 'next/link'

import Image from "next/image";
import humanizePic from "../public/humanize-updated-home.png"
import StocksPic from "../public/stocks-updated.jpg"
import refugePic from "../public/refugeap-home.jpg"
import whiteboardPic from "../public/Cloud-app-home.jpg"
import { Button } from './ui/button';

export default function ProjectsSection() {
  return (

      <div className="flex flex-col">
        <div className="relative pb-1 bg-clip-padding">
          <div className="absolute inset-0 border-b-4 border-transparent bg-gradient-to-r from-teal-300 to-purple-500 rounded-t-md"></div>
          <div className="relative text-white rounded-t-md py-2">
            Projects
          </div>
        </div>
        {/* CARDS */}
        <div className="flex flex-row space-x-3 py-5 ">
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border border-2 border-teal-500 animate ">
            {/* "In Progress" Button */}
              <Button variant="outline" size="sm" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white rounded-full w-fit h-fit ">
                In Progress
              </Button>
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Link href="https://humanize-text.com/">
                  <Image
                    className=" lg:min-w-60 lg:min-h-60 border-1 object-contain rounded-2xl "
                    src={humanizePic}
                    alt="pfp picture"
                    
                    />
                </Link>
              </div>
              
            </div>
            {/* Project Title */}
            <div className='bg-inherit flex flex-col justify-between'>
                <div className="bg-inherit text-2xl text-white py-2 ">
                  Humanize
                </div>
                <div className=' bg-inherit space-x-1'>
                <Button size="sm"className='bg-black' >Nextjs</Button>
                <Button size="sm" className='bg-blue-400' >Tailwind</Button>
                
                </div>
            </div>
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border ">
            {/* PIC */}
            <div className=" bg-inherit ">
            <div className=" bg-inherit ">
              <div className="rounded-2xl">
                <Link href="https://stocks-prediction-app.pages.dev">
                  <Image
                    className=" border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                    src={StocksPic}
                    alt="pfp picture"
                    
                    />
                </Link>    
              </div>
              
            </div>
              
            </div>
            {/* Project Title */}
            <div className='bg-inherit flex flex-col justify-between'>
                <div className="bg-inherit text-2xl text-white py-2 ">
                  Finstimulate
                </div>
                <div className=' bg-inherit space-x-1'>
                <Button size="sm"className='bg-blue-600' >React</Button>
                <Button size="sm" className='bg-green-600' >Nodejs</Button>
                <Button size="sm" className='bg-gray-400' >Flask</Button>
                
                </div>
            </div>
            
          </div>
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Link href="https://github.com/MabroorA/refugeEAP-app">
                  <Image
                    className="border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                    src={refugePic}
                    alt="pfp picture"
                    
                    />
                </Link>
              </div>
              
            </div>
            {/* Project Title */}
            <div className='bg-inherit flex flex-col justify-between'>
                <div className="bg-inherit text-2xl text-white py-2 ">
                  Refugee Aid 
                </div>
                <div className=' bg-inherit space-x-1'>
                <Button size="sm"className='bg-blue-600' >React</Button>
                <Button size="sm" className='bg-green-900' >Django</Button>
                
                
                </div>
            </div>
            
          </div>

          {/* CARD */}
          {/* CARD */}
          <div className=" flex flex-col p-3 bg-gray-800 lg:min-w-72 lg:min-h-72 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:border-white hover:border">
            {/* PIC */}
            <div className=" bg-inherit ">
              <div className="rounded-2xl"> 
                <Image
                  className="border-black lg:min-w-60 lg:min-h-60 border object-fill rounded-2xl  "
                  src={whiteboardPic}
                  alt="pfp picture"
                  
                  />
              </div>
              
            </div>
            {/* Project Title */}
            <div className='bg-inherit flex flex-col justify-between'>
                <div className="bg-inherit text-2xl text-white py-2 ">
                  Refugee Aid 
                </div>
                <div className=' bg-inherit space-x-1'>
                <Button size="sm"className='bg-blue-600' >Docker</Button>
                <Button size="sm" className='bg-blue-600' >Kubernetes</Button>
                <Button size="sm" className='bg-yellow-700' >GCP </Button>
                
                
                </div>
            </div>
            
          </div>

        </div>
      </div>
  )
}
