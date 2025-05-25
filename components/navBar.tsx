"use client";
import Link from "next/link";
import React, { useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const menu = "{Socials}";

  const handleSocialsToggle = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex flex-col sm:flex-row justify-between mx-auto  text-[#183642] font-bold py-5 md:py-7 px-2 md:px-0  ">
        <div className="flex justify-between items-center w-full md:w-auto ">
          <div className="border-2 shadow-xl shadow-indigo-400 border-indigo-500 hover:border-black rounded-full animate-[bounce_2.5s_infinite]">
            <img
              src="/favicon.png"
              className="rounded-full w-14 h-14" // Adjust size here
              alt="Logo"
            />
          </div>
          <div>
            <Button
              size="sm"
              className={`sm:hidden border-2 border-teal-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                showMenu
                  ? "bg-white text-black ring-2 ring-teal-400 shadow-md" // Toggled: white bg, black text, teal ring, shadow
                  : "bg-black text-white" // Default: black bg, white text
              }`}
              aria-pressed={showMenu}
              onClick={handleSocialsToggle}
            >
              {menu}
            </Button>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } sm:flex  flex-col  sm:flex-row sm:space-x-4 md:mt-0  w-full md:w-auto `}
        >
          <Link
            href="https://www.linkedin.com/in/mabroor-dev/"
            className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4 w-fit  hover:border-b-black border-2 hover:border-b-2 border-transparent "
          >
            <FaLinkedin />
            <span className="">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/MabroorA"
            className="flex flex-row items-center space-x-1 md:space-x-2 md:px-4 w-fit  hover:border-b-black border-2 hover:border-b-2 border-transparent "
          >
            <FaGithub />
            <span className="">GitHub</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
