import React from 'react'

import Link from 'next/link'

import Image from "next/image";
import humanizePic from "../public/humanize-updated-home.png"
import StocksPic from "../public/stocks-updated.jpg"
import refugePic from "../public/refugeap-home-resized.jpg"
import whiteboardPic from "../public/Cloud-app-home.jpg"
import { Button } from './ui/button';

export default function ProjectsSection() {
  return (

      <div className="flex flex-col ">
        <div className="relative pb-1 bg-clip-padding">
          <div className="absolute inset-0 border-b-0 border-transparent bg-gradient-to-r from-teal-300 to-purple-500 rounded-t-md"></div>
          <div className="relative text-white rounded-t-md py-2">
            Projects
          </div>
        </div>
        {/* CARDS */}
        <div className="flex flex-col  py-5 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3     ">
          {/* WHOLE CARD */}
          <div className='flex flex-col rounded-2xl transform transition-transform duration-300 lg:hover:scale-105  lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className='  rounded-3xl'>
                  <div className=" flex flex-col p-3 bg-gray-800 rounded-2xl border-2 border-teal-500 lg:hover:border-none w-full h-full">
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
                        <div className="bg-inherit text-1xl text-white py-2 ">
                          Humanize
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between lg:justify-end rounded-2xl p-2'>
                  <div className='lg:hidden'>
                    <Link href="https://humanize-text.com/">
                      <Button size="sm" className='bg-teal-500 rounded-3xl text-black font-bold '>Visit</Button>
                    </Link>
                  </div>
                  <div className=' bg-inherit  py-1 rounded-2xl flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0  '>
                      <Button size="sm"className='bg-black rounded-3xl w-fit h-fit' >Nextjs</Button>
                      <Button size="sm" className='bg-blue-400 rounded-3xl w-fit h-fit' >Tailwind</Button>
                  </div>
              </div>
          </div>
          {/* WHOLE CARD */}
          <div className='flex flex-col  rounded-2xl transform transition-transform duration-300 lg:hover:scale-105  lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className='  rounded-3xl'>
                  <div className=" flex flex-col p-3 bg-gray-800 rounded-2xl w-full h-full">
                    
                    {/* PIC */}
                    <div className=" bg-inherit ">
                      <div className="rounded-2xl"> 
                        <Link href="https://stocks-prediction-app.pages.dev">
                          <Image
                            className=" lg:min-w-60 lg:min-h-60 border-1 object-fill rounded-2xl "
                            src={StocksPic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='bg-inherit flex flex-col justify-between'>
                        <div className="bg-inherit text-1xl text-white py-2 ">
                          Finstimulate
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between lg:justify-end rounded-2xl p-2'>
                  <div className='lg:hidden'>
                    <Link href="https://stocks-prediction-app.pages.dev">
                      <Button size="sm" className='bg-orange-400 rounded-3xl text-black font-bold'>Visit</Button>
                    </Link>
                  </div>
                  <div className=' bg-inherit  py-1 rounded-2xl flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0   '>
                      <Button size="sm"className='bg-blue-500 rounded-3xl w-fit h-fit' >React</Button>
                      <Button size="sm" className='bg-green-600 rounded-3xl w-fit h-fit' >NodeJS</Button>
                      <Button size="sm" className='bg-gray-600 rounded-3xl w-fit h-fit' >Flask</Button>
                  </div>
              </div>
          </div>
          {/* WHOLE CARD */}
          <div className='flex flex-col  rounded-2xl transform transition-transform duration-300 lg:hover:scale-105  lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className='  rounded-3xl'>
                  <div className=" flex flex-col p-3 bg-gray-800 rounded-2xl w-full h-full ">
                    
                    {/* PIC */}
                    <div className=" bg-inherit ">
                      <div className="rounded-2xl"> 
                        <Link href="https://github.com/MabroorA/refugeEAP-app">
                          <Image
                            className=" lg:min-w-60 lg:min-h-60 border-1 object-fill rounded-2xl"
                            src={refugePic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='bg-inherit flex flex-col justify-between'>
                        <div className="bg-inherit text-1xl text-white py-2 ">
                          Refugee Aid
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between lg:justify-end rounded-2xl p-2'>
                  <div className='lg:hidden'>
                    <Link href="https://github.com/MabroorA/refugeEAP-app">
                      <Button size="sm" className='bg-teal-500 rounded-3xl text-black font-bold '>github</Button>
                    </Link>
                  </div>
                  <div className=' bg-inherit  py-1 rounded-2xl flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0   '>
                      <Button size="sm"className='bg-blue-500 rounded-3xl w-fit h-fit' >React</Button>
                      <Button size="sm" className='bg-green-900 rounded-3xl w-fit h-fit' >Django</Button>
                  </div>
              </div>
          </div>

          {/* WHOLE CARD */}
          <div className='flex flex-col  rounded-2xl transform transition-transform duration-300 lg:hover:scale-105  lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className='  rounded-3xl'>
                  <div className=" flex flex-col p-3 bg-gray-800 rounded-2xl w-full h-full ">
                    
                    {/* PIC */}
                    <div className=" bg-inherit ">
                      <div className="rounded-2xl"> 
                        <Link href="https://humanize-text.com/">
                          <Image
                            className=" lg:min-w-60 lg:min-h-60 border-1 object-contain rounded-2xl "
                            src={whiteboardPic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='bg-inherit flex flex-col justify-between'>
                        <div className="bg-inherit text-1xl text-white py-2 ">
                          Private Cloud whiteboard
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between lg:justify-end rounded-2xl p-2'>
                  <div className='lg:hidden'>
                    <Link href="">
                      <Button size="sm" variant="destructive" className=' rounded-3xl text-black font-bold '>no link</Button>
                    </Link>
                  </div>
                  <div className='bg-inherit  py-1 rounded-2xl flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0  '>
                      <Button size="sm"className='bg-blue-600 rounded-3xl w-fit h-fit' >Docker</Button>
                      <Button size="sm" className='bg-blue-600 rounded-3xl w-fit h-fit' >Kubernetes</Button>
                      <Button size="sm" className='bg-yellow-600 rounded-3xl w-fit h-fit' >GCP</Button>
                  </div>
              </div>
          </div>

        </div>
      </div>
  )
}
