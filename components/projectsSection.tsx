import React from 'react'

import Link from 'next/link'

import Image from "next/image";
import imageEffectpic from "../public/Image-Effects.png"
import humanizePic from "../public/humanize-updated-home.png"
import StocksPic from "../public/stocks-updated.jpg"
import refugePic from "../public/refugeap-home-resized.jpg"
import whiteboardPic from "../public/Cloud-app-home.jpg"

import { Button } from './ui/button';

export default function ProjectsSection() {
  return (

      <div className="flex flex-col ">
        
        {/* CARDS */}
        <div className="flex flex-col py-5 space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3 ">
          {/* IMAGE-EFFECTS CARD */}
          <div className='flex flex-col transition-transform duration-300 transform rounded-2xl lg:hover:scale-105 lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className=' rounded-3xl'>
                  <div className="flex flex-col w-full h-full p-3 bg-gray-800 border-2 border-teal-500 rounded-2xl lg:hover:border-none">
                    {/* "In Progress" Button */}
                      <Button variant="outline" size="sm" className="absolute top-0 text-white transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 rounded-full left-1/2 w-fit h-fit ">
                        In Progress
                      </Button>
                    {/* PIC */}
                    <div className=" bg-inherit">
                      <div className="rounded-2xl"> 
                        <Link href="https://github.com/MabroorA/sound-Affects">
                          <Image
                            className="object-fill lg:min-w-60 lg:min-h-60 border-1 rounded-2xl"
                            src={imageEffectpic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='flex flex-col justify-between bg-inherit'>
                        <div className="py-2 text-white bg-inherit text-1xl ">
                          Image to Sound Affects
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between p-2 lg:justify-end rounded-2xl'>
                  <div className='lg:hidden'>
                    <Link href="https://github.com/MabroorA/sound-Affects">
                      <Button size="sm" className='font-bold text-black bg-teal-500 rounded-3xl '>Visit</Button>
                    </Link>
                  </div>
                  <div className='flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0'>
                      <Button size="sm"className='bg-black rounded-3xl w-fit h-fit' >Nextjs</Button>
                      <Button size="sm" className='bg-blue-400 rounded-3xl w-fit h-fit' >Tailwind</Button>
                  </div>
              </div>
          </div>
          {/* HUMANIZE CARD */}
          <div className='flex flex-col transition-transform duration-300 transform rounded-2xl lg:hover:scale-105 lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className=' rounded-3xl'>
                  <div className="flex flex-col w-full h-full p-3 bg-gray-800 rounded-2xl lg:hover:border-none">
                    {/* PIC */}
                    <div className=" bg-inherit">
                      <div className="rounded-2xl"> 
                        <Link href="https://humanize-text.com/">
                          <Image
                            className="object-contain lg:min-w-60 lg:min-h-60 border-1 rounded-2xl"
                            src={humanizePic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='flex flex-col justify-between bg-inherit'>
                        <div className="py-2 text-white bg-inherit text-1xl ">
                          Humanize
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between p-2 lg:justify-end rounded-2xl'>
                  <div className='lg:hidden'>
                    <Link href="https://humanize-text.com/">
                      <Button size="sm" className='font-bold text-black bg-teal-500 rounded-3xl '>Visit</Button>
                    </Link>
                  </div>
                  <div className='flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0'>
                      <Button size="sm"className='bg-black rounded-3xl w-fit h-fit' >Nextjs</Button>
                      <Button size="sm" className='bg-blue-400 rounded-3xl w-fit h-fit' >Tailwind</Button>
                  </div>
              </div>
          </div>
          {/* WHOLE CARD */}
          <div className='flex flex-col transition-transform duration-300 transform rounded-2xl lg:hover:scale-105 lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className=' rounded-3xl'>
                  <div className="flex flex-col w-full h-full p-3 bg-gray-800 rounded-2xl">
                    
                    {/* PIC */}
                    <div className=" bg-inherit">
                      <div className="rounded-2xl"> 
                        <Link href="https://stocks-prediction-app.pages.dev">
                          <Image
                            className="object-fill lg:min-w-60 lg:min-h-60 border-1 rounded-2xl"
                            src={StocksPic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='flex flex-col justify-between bg-inherit'>
                        <div className="py-2 text-white bg-inherit text-1xl ">
                          Finstimulate
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between p-2 lg:justify-end rounded-2xl'>
                  <div className='lg:hidden'>
                    <Link href="https://stocks-prediction-app.pages.dev">
                      <Button size="sm" className='font-bold text-black bg-orange-400 rounded-3xl'>Visit</Button>
                    </Link>
                  </div>
                  <div className='flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0'>
                      <Button size="sm"className='bg-blue-500 rounded-3xl w-fit h-fit' >React</Button>
                      <Button size="sm" className='bg-green-600 rounded-3xl w-fit h-fit' >NodeJS</Button>
                      <Button size="sm" className='bg-gray-600 rounded-3xl w-fit h-fit' >Flask</Button>
                  </div>
              </div>
          </div>
          {/* WHOLE CARD */}
          <div className='flex flex-col transition-transform duration-300 transform rounded-2xl lg:hover:scale-105 lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className=' rounded-3xl'>
                  <div className="flex flex-col w-full h-full p-3 bg-gray-800 rounded-2xl">
                    
                    {/* PIC */}
                    <div className=" bg-inherit">
                      <div className="rounded-2xl"> 
                        <Link href="https://github.com/MabroorA/refugeEAP-app">
                          <Image
                            className="object-fill lg:min-w-60 lg:min-h-60 border-1 rounded-2xl"
                            src={refugePic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='flex flex-col justify-between bg-inherit'>
                        <div className="py-2 text-white bg-inherit text-1xl ">
                          Refugee Aid
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between p-2 lg:justify-end rounded-2xl'>
                  <div className='lg:hidden'>
                    <Link href="https://github.com/MabroorA/refugeEAP-app">
                      <Button size="sm" className='font-bold text-black bg-teal-500 rounded-3xl '>github</Button>
                    </Link>
                  </div>
                  <div className='flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0'>
                      <Button size="sm"className='bg-blue-500 rounded-3xl w-fit h-fit' >React</Button>
                      <Button size="sm" className='bg-green-900 rounded-3xl w-fit h-fit' >Django</Button>
                  </div>
              </div>
          </div>

          {/* WHOLE CARD */}
          <div className='flex flex-col transition-transform duration-300 transform rounded-2xl lg:hover:scale-105 lg:hover:border-white lg:hover:border-2 md:w-72 md:h-96'>
              <div className=' rounded-3xl'>
                  <div className="flex flex-col w-full h-full p-3 bg-gray-800 rounded-2xl">
                    
                    {/* PIC */}
                    <div className=" bg-inherit">
                      <div className="rounded-2xl"> 
                        <Link href="https://humanize-text.com/">
                          <Image
                            className="object-contain lg:min-w-60 lg:min-h-60 border-1 rounded-2xl"
                            src={whiteboardPic}
                            alt="pfp picture"
                            
                            />
                        </Link>
                      </div>
                      
                    </div>
                    {/* Project Title */}
                    <div className='flex flex-col justify-between bg-inherit'>
                        <div className="py-2 text-white bg-inherit text-1xl ">
                          Private Cloud whiteboard
                        </div>
                        
                    </div>
                  </div>
              </div>
              {/* CARD FOOTER */}
              <div className='flex flex-row justify-between p-2 lg:justify-end rounded-2xl'>
                  <div className='lg:hidden'>
                    <Link href="">
                      <Button size="sm" variant="destructive" className='font-bold text-black rounded-3xl'>no link</Button>
                    </Link>
                  </div>
                  <div className='flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0 '>
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
