"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center'>

                <div className="mt-28">

                    <div className='max-w-5xl mx-auto  flex px-10 space-x-3 '>
                        <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                        <div className='text-xl font-bold'>Projects </div>
                    </div>

                    <div className=" mt-10 px-5 max-w-5xl mx-auto space-y-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {/* portfolio website */}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border  border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p1.png')] bg-cover	",
                                    )}>

                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3"> I developed a personal portfolio website to showcase my skills, projects, and experience.</h1>

                                <div className="flex justify-center items-center mt-3 space-x-8">
                                <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">view</button>
                                <Link href='https://github.com/sandhyapatel12/portfolio-nextjs'>
                                    <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>


                            </div>

                            {/* social media app */}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p2.png')]  bg-cover ",
                                    )}>
                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3"> This is social media app which is developed in react js with all social funcnality.</h1>

                                <div className="flex justify-center items-center mt-3 space-x-8">
                                    <Link href='/'>
                                        <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>
                            </div>

                            {/* food ordering system */}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p3.png')]  bg-cover",
                                    )}>
                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3"> In this app includes payment gatway, login with google, register user with backend.</h1>

                                <div className="flex justify-center items-center mt-3 space-x-8">
                                    <Link href='https://github.com/sandhyapatel12/food-ordering-System-redux-toolk'>
                                        <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>
                            </div>

                            {/* ecommerce app*/}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p4.png')] bg-cover",
                                    )} >
                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3"> In this ecommerce website user can find product by serching or also use filter funcnality.</h1>

                                <div className="flex justify-center items-center mt-3 space-x-8">
                                    <Link href='https://github.com/sandhyapatel12/ecommerce-website-react'>
                                    <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>
                            </div>

                            {/* inotebook */}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p5.png')]  bg-cover ",
                                    )} >
                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3">In this full stack app user can add their notes and view all own notes by valid login.</h1>

                                <div className="flex justify-center items-center mt-3 space-x-8">
                                    <Link href='https://github.com/sandhyapatel12/iNotebook-react'>
                                    <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>
                            </div>

                            {/* textutils */}
                            <div className="max-w-xs w-full border border-gray-400 rounded-lg p-3">
                                <div
                                    className={cn(
                                        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                        "bg-[url('/projects/p6.png')]  bg-cover ",
                                    )}>
                                </div>

                                <h1 className=" text-gray-400 font-bold mt-3"> In this react app  user can convert any text into uppercase, lowercase, copy text etc.</h1>
 
                                <div className="flex justify-center items-center mt-3 space-x-8">
                                    <Link href='https://github.com/sandhyapatel12/TextUtils-react'>
                                    <button className="py-2 px-8 rounded-full border-2 border-gray-500 text-green-600 font-bold hover:text-white">code</button>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
