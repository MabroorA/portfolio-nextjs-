import { Button } from "@/components/ui/button";


import Image from "next/image";
import humanizePic from "../public/humanize-portfolio.png"
import Link from "next/link";
import { inherits } from "util";



export default function Home() {
  return (
    
    <main className="flex lg:flex-row justify-between lg:py-5  ">
      
      <div className="flex flex-row justify-between w-full py-12 border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800 ">
        
        <div className="w-fit border mr-8 ">
            <div className="text-5xl font-black whitespace-nowrap py-10">
            Full stack developer 
            </div>
            <div className="text-3xl text-gray-500">
            I build things sometimes  
            </div>
        </div>

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
          <div className="w-full ">
            <div className="flex flex-row pt-5">
              <div className=" text-white w-3/5 h-48 text-1xl font-bold ">

              <Link href="/projects">
                <div className=" w-full h-full">
                  <div className="text-center text-black">Humanize</div>
                  <Image
                    className="border-4 rounded-l-3xl rounded-tr-3xl w-full h-full "
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
      
    </main>
  );
}
