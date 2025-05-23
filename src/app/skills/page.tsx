import { FaGithub, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdCss } from "react-icons/md";
import { MdOutlineHtml } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";


const Skills = () => {
  return (
    <>
      <section className='min-h-screen flex items-center justify-center max-w-5xl mx-auto '>
        <div className="mt-28">

          <div className='max-w-5xl mx-auto  flex px-8 md:px-16 space-x-3 '>
            <div className='bg-green-600 h-8 w-2 rounded-md'></div>
            <div className='text-xl font-bold'>Skills </div>
          </div>

          <div className='max-w-5xl mx-auto  space-y-5 md:flex md:justify-between  md:px-12  '>

            {/* left side */}
            <div className='py-5 flex mx-auto items-center flex-col md:px-3 lg:px-10 lg:mt-7 justify-center '>

              <div className="grid  grid-cols-3 gap-2 md:gap-4">
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300 '>
                  <MdOutlineHtml className="h-10 w-10 md:h-14 md:w-14" />
                </div>
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <MdCss className="h-10 w-10 md:h-14 md:w-14" />
                </div>
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20- w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <IoLogoJavascript className="h-10 w-10 md:h-14 md:w-14" />
                </div>
              </div>

              <div className="grid  grid-cols-3 gap-2 md:gap-4 mt-3">
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <FaReact className="h-10 w-10 md:h-14 md:w-14" />
                </div>
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <FaPython className="h-10 w-10 md:h-14 md:w-14" />
                </div> 
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <RiTailwindCssFill className="h-10 w-10 md:h-14 md:w-14" />
                </div>
              </div>

              <div className="grid  grid-cols-3 gap-2 md:gap-4 mt-3">
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <RiNextjsFill className="h-10 w-10 md:h-14 md:w-14" />
                </div>
                <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <DiDjango className="h-10 w-10 md:h-14 md:w-14" />
                </div>
                 <div className='flex items-center justify-center rounded-md bg-gray-800 h-20 w-24 md:h-24 md:w-28 hover:scale-110 transform transition-transform duration-300'>
                  <SiRedux className="h-10 w-10 md:h-14 md:w-14" />
                </div>
              </div>

            </div>


            {/* right side */}
            <div className=' w-full md:w-1/2 -mt-8  '>

              <div className=' flex space-x-2 px-8 md:px-12 md:-mt-14'>
                <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                <div className='text-xl font-bold'>Why hire me? </div>
              </div>

              <div className="mt-12 px-12 text-gray-300">
                <li >I don’t just build — I think. I solve real-world problems with scalable, maintainable code.</li>
                <li className="mt-8">I listen, communicate clearly, and care deeply about delivering value that aligns with your business goals.</li>
                <li className="mt-8">I stay updated with the latest trends to keep your product modern and competitive.</li>
                <li className="mt-8">You can count on me to deliver quality work — on time, every time.</li>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Skills
