import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

import Image from "next/image";
import humanizePic from "../public/humanize-portfolio.png"

export default function ProjectsSection() {
  return (
    <div>
        <div className="flex flex-col border w-full ">
          <div className="text-2xl text-right">
            Projects
          </div> 
          <div className="flex flex-row   pt-4 pb-1 pe-2 space-x-2 border-b-2 border-black">
            <Button size="sm"  className=" h-7 rounded-2xl">nextjs</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-blue-700">React</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-purple-700">Tailwind</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-green-700">Django</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-blue-600">Docker</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-blue-600">Kubernetes</Button>
            <Button size="sm" className=" h-7 rounded-2xl bg-yellow-600">GCP</Button>

          </div>
          <div className="">
            <div className="flex flex-row pt-5">
              <div className=" text-white w-3/5 h-48 text-1xl font-bold ">

              <Link href="/projects">
                <div className=" w-full h-full">
                  <div className="text-center text-black">Humanize</div>
                  <Image
                    className="border-4 rounded-l-3xl rounded-tr-3xl "
                    src={humanizePic}
                    alt="humanize picture"
                  />
                  
                </div>
              </Link>
              </div>
              <div className=" w-2/5 h-48  text-1xl font-bold  rounded-tl-3xl  rounded-r-3xl">
              <Link href="/projects">
                <div className=" w-full h-full">
                  <div className="text-center text-black">Finstimulate</div>
                  <Image
                    className="border-4 rounded-l-3xl rounded-tr-3xl w-full h-full "
                    src={humanizePic}
                    alt="humanize picture"
                  />
  
                </div>
              </Link>
              </div>
            </div>
            <div className="flex flex-row pb-5">
              <div className="bg-gray-400 text-white w-2/5 h-48 p-4 text-2xl font-bold border-4   rounded-l-3xl  rounded-br-3xl">
              Refugee Aid
              </div>
              <div className="bg-gray-400 text-white w-3/5 h-48 p-4 text-2xl font-bold border-4  rounded-bl-3xl  rounded-r-3xl ">
              Private Cloud Whiteboard
              </div>
            </div>
          </div>
          <div className="text-blue-500 underline flex flex-row justify-end">
            <Link href="https://github.com/MabroorA"> Explore more projects</Link>
          </div>
        </div>
    </div>
  )
}
