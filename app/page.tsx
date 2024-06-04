import ProjectsSection from "@/components/projectsSection";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    
    <main className="flex lg:flex-row justify-between lg:py-5  ">
      {/* border-2 lg:border-purple-800 md:border-red-800 sm:border-green-800  */}
      <div className="flex flex-row  w-full  ">
        
        <div className="w-fit  mr-8 ">
            <div className="text-5xl font-black whitespace-nowrap py-10">
            Full stack developer 
            </div>
            <div className="text-3xl text-gray-500">
            I build things sometimes  
            </div>
        </div>
        <div className="">
          <ProjectsSection/>
        </div>
        
        
      </div>
      
    </main>
  );
}
