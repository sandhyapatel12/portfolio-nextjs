"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome, FaWindowClose } from 'react-icons/fa';
import { TbMenuDeep } from 'react-icons/tb';
import { MdMiscellaneousServices, MdPermContactCalendar } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FaPersonCircleExclamation } from 'react-icons/fa6';

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);


    return (
        <>

            <nav className="px-4 py-5  w-full flex justify-between items-center fixed top-5 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-3xl md:rounded-full border border-gray-500  bg-black z-50 shadow-lg  ">

                <h1 className="font-bold  md:hidden text-xl text-green-600 lg:text-2xl ">Portfolio</h1>

                {/* start menus */}
                <div className="hidden  md:flex  justify-evenly px-16 w-full">

                    <Link href='/' className='text-gray-200 font-bold hover:text-gray-300  flex items-center justify-center space-x-2'>
                        <h1>Home</h1>
                    </Link>

                    <Link href='/about' className='text-gray-200 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                        <h1>About</h1>
                    </Link>

                    <Link href='/skills' className='text-gray-200 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                        <h1>Skills</h1>
                    </Link>

                    <Link href='/projects' className='text-gray-200 font-bold  hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                        <h1>Projects</h1>
                    </Link>

                    <Link href='/services' className='text-gray-200 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                        <h1>Services</h1>
                    </Link>

                    <Link href='/contact' className='text-gray-200 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                        <h1>Contact</h1>
                    </Link>
                </div>
                {/* end of  menus */}


                {/* menu bar for smaller devices */}
                <button className='md:hidden' onClick={() => setisOpen(!isOpen)}>
                    {isOpen ? (

                        <div className={`fixed inset-y-0 right-0 w-fit bg-gray-900  text-white lg:hidden transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                            <FaWindowClose className='text-xl font-bold text-gray-300 fixed right-3 top-5' />    {/* close icon */}

                            <div className="flex flex-col space-y-6 h-ful items-start  px-10 py-16 ">

                                <Link href='/' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <FaHome />
                                    <h1>Home</h1>
                                </Link>

                                <Link href='/about' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <FaPersonCircleExclamation />
                                    <h1>About</h1>
                                </Link>

                                <Link href='/skills' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <GiSkills />
                                    <h1>Skills</h1>
                                </Link>

                                <Link href='/projects' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <AiFillProject />
                                    <h1>Projects</h1>
                                </Link>

                                <Link href='/services' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <MdMiscellaneousServices />
                                    <h1>Services</h1>
                                </Link>

                                <Link href='/contact' className='text-green-600 font-bold hover:text-gray-300 text-md flex items-center justify-center space-x-2'>
                                    <MdPermContactCalendar />
                                    <h1>Contact</h1>
                                </Link>

                            </div>
                        </div>
                    ) :
                        (
                            //menu bar
                                <TbMenuDeep className='text-2xl font-bold text-green-600' />

                        )}
                </button>

            </nav>
        </>
    )
}

export default Navbar







