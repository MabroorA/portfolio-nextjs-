import Link from 'next/link'
import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export default function NavBar() {
  return (
    <div>
        <nav className="flex flex-row justify-between text-white py-7">
        <div className=" text-3xl">
          Mabroor Ahmed
        </div>
        <div className="flex flex-row space-x-4">
          <Link href="https://www.linkedin.com/in/mabroor-dev/" className="flex flex-row items-center space-x-2 px-4">
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/MabroorA" className="flex flex-row items-center space-x-2 px-4 ">
            <FaGithub />
            <span>GitHub</span>
          </Link>
        </div>
      
      </nav>
    </div>
  )
}

