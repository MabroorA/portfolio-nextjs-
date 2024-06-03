import Link from "next/link";


export default function Home() {
  return (
    
    <main className="lg:flex lg:flex-row justify-center lg:py-5 ">
      
      <div className="flex flex-row py-12">
        <div className="lg:w-1/2   ">
          <div className="">
            <div className="text-5xl font-black pb-4">
            Full stack developer 
            </div>
            <div className="text-3xl text-gray-500">
            I build things sometimes  
            </div>
          </div>

        </div>
        <div className="text-3xl text-right lg:w-1/2">
          Projects 
        </div>
      </div>
      
    </main>
  );
}
