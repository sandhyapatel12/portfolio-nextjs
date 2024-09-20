"use client";
import { cn } from "@/lib/utils";

export default function Projects() {
    return (
        <div className="mt-20">

            <div className='max-w-5xl mx-auto  flex px-10 space-x-3 '>
                <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                <div className='text-xl font-bold'>Projects </div>
            </div>

            <div className=" mt-10 px-5 max-w-5xl mx-auto space-y-10">

                <div className="grid grid-cols-3 gap-5">

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-3 gap-5">

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>

                    <div className="max-w-xs w-full">
                        <div
                            className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                            )}
                        >
                            <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Background Overlays
                                </h1>
                                <p className="font-normal text-base text-gray-50 relative my-4">
                                    This card is for some special elements, like displaying background
                                    gifs on hover only.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-3 space-x-8">
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">view</button>
                            <button className="py-2 px-8 rounded-lg bg-green-600 text-black font-bold hover:text-white">code</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
