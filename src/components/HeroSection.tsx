import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const words = [
  {
    text: "Building",
  },
  {
    text: "responsive,",
  },
  {
    text: "user-focused,",
  },
  {
    text: "web",
  },
  {
    text: "solutions",
  }

];


function HeroSection() {

  return (
    <div className="min-h-screen  w-full max-w-7xl flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center" >

        <h1 className="mt-20 md:mt-0 text-3xl text-green-700 flex text-center justify-center md:text-6xl font-bold bg-clip-text ">
          Sandhya Patel
        </h1>

        <div className="mt-2  text-xs  md:text-lg xl:text-xl text-gray-400 max-w-7xl items-center justify-center flex mx-auto">
          <TypewriterEffectSmooth words={words} />
        </div>
        
        <div className="mt-5 gap-3 grid grid-cols-1 md:flex items-center justify-center ">

          {/* projects */}
          <div>
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white  text-lg dark:bg-black dark:hover:text-green-500 text-black dark:text-gray-300 border-neutral-200 dark:border-slate-800 font-bold"
            >
              Projects
            </Button>
          </Link>
          </div>
        

          {/* download Resume */}

          {/* make sure the resume.pdf file is located in the public directory */}
          {/* here a tag needed otherwise download not work */}
          <div>
          <a href="/resume.pdf" download="resume.pdf">  
          <Button
              borderRadius="1.75rem"
              className="bg-white text-lg   dark:bg-black dark:hover:text-green-500 text-black dark:text-gray-300 border-neutral-200 dark:border-slate-800 font-bold"
            >
              <div className="flex justify-center items-center space-x-3">
                <h1>Resume</h1>
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5" />
              </div>
            </Button>
          </a>
          </div>
         

        </div>

      </div>

    </div>
  )
}

export default HeroSection
