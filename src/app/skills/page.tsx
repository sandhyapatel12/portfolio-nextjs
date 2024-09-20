import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";


const Skills = () => {
  return (
    <>
      <div className="mt-20">

        <div className='max-w-5xl mx-auto  flex px-16 space-x-3 '>
          <div className='bg-green-600 h-8 w-2 rounded-md'></div>
          <div className='text-xl font-bold'>Skills </div>
        </div>

        <div className='max-w-5xl mx-auto  rounded-lg  flex justify-between px-12  '>

          <div className='py-5 flex flex-col px-10  justify-center '>
            <div className="grid grid-cols-2 gap-4">
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <FaReact className="h-14 w-14" />
              </div>
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <SiNextdotjs className="h-14 w-14" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <TbBrandRedux className="h-14 w-14" />
              </div>
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <RiTailwindCssFill className="h-14 w-14" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <IoLogoJavascript className="h-14 w-14" />
              </div>
              <div className='flex items-center justify-center rounded-md bg-gray-800 h-24 w-28'>
                <BsFiletypeHtml className="h-14 w-14" />
              </div>
            </div>

          </div>



          <div className=' w-1/2 -mt-8'>

            <div className=' flex space-x-2 px-12 mt-0 '>
              <div className='bg-green-600 h-8 w-2 rounded-md'></div>
              <div className='text-xl font-bold'>Why here me? </div>
            </div>

            <div className="mt-12 px-12 text-gray-300">
              <li >I create websites that work flawlessly across all devices, ensuring a smooth and consistent experience.</li>
              <li className="mt-8">I bring designs to life by focusing on usability, accessibility, and pixel-perfect precision.</li>
              <li className="mt-8">From animations to interactive elements, I utilize modern JavaScript frameworks like React.js to enhance web functionality and performance.</li>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Skills
