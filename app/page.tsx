import ProjectsSection from "@/components/projectsSection";
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
        <ProjectsSection/>
        
      </div>
      
    </main>
  );
}
