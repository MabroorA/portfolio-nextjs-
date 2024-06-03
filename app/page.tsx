import { Button } from "@/components/ui/button";



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
            <Button size="sm" className=" h-7 rounded-2xl bg-yellow-600">GCP</Button>

          </div>
          <div className="w-full ">
            <div className="flex flex-row pt-5">
              <div className="bg-gray-400 text-white w-3/5 h-48 p-4 text-2xl font-bold border  rounded-l-lg  rounded-tr-lg">
              Humanize
              </div>
              <div className="bg-gray-400 text-white w-2/5 h-48 p-4 text-2xl font-bold border  rounded-tl-lg  rounded-r-lg">
              Finstimulate
              </div>
            </div>
            <div className="flex flex-row pb-5">
              <div className="bg-gray-400 text-white w-3/5 h-48 p-4 text-2xl font-bold border  rounded-l-lg  rounded-tr-lg">
              Refugee Aid
              </div>
              <div className="bg-gray-400 text-white w-2/5 h-48 p-4 text-2xl font-bold border  rounded-tl-lg  rounded-r-lg">
              Private Cloud Whiteboard
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
