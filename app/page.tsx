import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    
    <main className="flex lg:flex-row justify-between lg:py-5 ">
      
      <div className="flex flex-row justify-between w-full py-12 border">
        <div className="lg:w-1/2 border  ">
          <div className="">
            <div className="text-5xl font-black pb-5">
            Full stack developer 
            </div>
            <div className="text-3xl text-gray-500">
            I build things sometimes  
            </div>
          </div>

        </div>
        <div className="flex flex-col border ">
          <div className="text-3xl text-right">
            Projects
          </div> 
          <div className="flex flex-row   pt-6 pb-1 pe-2 space-x-2 border-b-2 border-black">
            <Button size="sm"  className=" rounded-2xl">nextjs</Button>
            <Button size="sm" className=" rounded-2xl bg-blue-400">react</Button>
            <Button size="sm" className=" rounded-2xl">Tailwind</Button>
            <Button size="sm" className=" rounded-2xl">Django</Button>
            <Button size="sm" className=" rounded-2xl">Django</Button>

          </div>
        </div>
      </div>
      
    </main>
  );
}
