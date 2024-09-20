"use client"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const words = [
  {
    text: "Sandhya",
    className: "text-green-500 dark:text-green-600"
  },
  {
    text: "Patel",
    className: "text-green-600 dark:text-green-600"
  }

];


function HeroSection() {




  return (
    <div
      className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center" >
        <h1
          className="mt-20 md:mt-0 text-4xl flex text-center justify-center md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          <TypewriterEffectSmooth words={words} />

        </h1>
        <p
          className="mt-2  text-base font-bold md:text-lg xl:text-xl text-gray-400 max-w-lg mx-auto"
        >Building responsive, user-focused web solutions</p>
        <div className="mt-20 space-x-5">

          {/* projects */}
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white  text-lg dark:bg-black dark:hover:text-green-500 text-black dark:text-gray-300 border-neutral-200 dark:border-slate-800 font-bold"
            >
              Projects
            </Button>
          </Link>

          {/* download Resume */}
          <Link href="/" download={'resume.pdf'} >
            <Button 
              borderRadius="1.75rem"
              className="bg-white text-lg  dark:bg-black dark:hover:text-green-500 text-black dark:text-gray-300 border-neutral-200 dark:border-slate-800 font-bold"
            >
              <div className="flex justify-center items-center space-x-3">
                <h1>Resume</h1>
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
              </div>
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
