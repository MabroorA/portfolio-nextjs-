import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className="flex flex-row justify-between">
        <div className=" text-3xl">
          Mabroor Ahmed
        </div>
        <div className="">

          <Link href="" className="px-4">
          Linkedin
          </Link>
          <Link href="" className="px-4">
            Github
          </Link>
        </div>
      
      </nav>
    </div>
  )
}

