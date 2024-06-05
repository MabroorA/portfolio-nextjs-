"use client";
import Link from 'next/link'
import React, { useState } from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from './ui/button';
import { CiMenuBurger } from "react-icons/ci";



export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false);
  const menu = "{Socials}";
  return (
    <div>
      <nav className="flex flex-col text-white lg:py-7">
        <div className="flex flex-row justify-between items-center">
          <div className="text-1xl">
            Mabroor Ahmed
          </div>
          <Button
            size="sm"
            
            className='sm:hidden text-teal-400 bg-slate-900 border-2 border-teal-600 hover:bg-inherit  '
            onClick={() => setShowMenu(!showMenu)}
          >
            {/* <CiMenuBurger size={30} className='bg-inherit' /> */}
            {menu}
          </Button>
        </div>
        <div className={`${showMenu ? 'block' : 'hidden'} sm:flex flex flex-col justify-end sm:flex-row sm:space-x-4 mt-4 `}>
          <Link href="https://www.linkedin.com/in/mabroor-dev/" className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4 w-fit ">
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/MabroorA" className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4 w-fit">
            <FaGithub />
            <span>GitHub</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

