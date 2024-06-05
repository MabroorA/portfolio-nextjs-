import Link from 'next/link'
import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function NavBar() {
  return (
    <div>
        <nav className="flex flex-row justify-between text-white lg:py-7">
        <div className=" text-1xl">
          Mabroor Ahmed
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
          <Link href="https://www.linkedin.com/in/mabroor-dev/" className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4">
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/MabroorA" className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4 ">
            <FaGithub />
            <span>GitHub</span>
          </Link>
        </div>
      
      </nav>
    </div>
  )
}

