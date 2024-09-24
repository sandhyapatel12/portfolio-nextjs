import React from 'react'

const Experience = () => {
    return (
        <>
            <div className="mt-20">

                <div className='max-w-5xl mx-auto  flex px-10 space-x-3 '>
                    <div className='bg-green-600 h-8 w-2 rounded-md'></div>
                    <div className='text-xl font-bold'>Experience </div>
                </div>

                <div className='md:max-w-4xl  mx-auto flex flex-col px-5   mt-8 '>
                    <div className='md:flex items-center space-x-3 '>
                    <h1 className='text-xl md:text-2xl font-bold text-green-600'>Frontend Developer | </h1>
                    <a href='https://thinknovus.com/'><button className='text-gray-200 md:font-semibold mx-10 md:mx-0 hover:text-gray-700'>  Think Novous Technologies</button></a>
                    </div>

                    <h1 className='text-sm font-semibold text-gray-400 mt-5 md:mt-0'>January, 2024 - Present</h1>
                    <li className='mt-8 font-semibold text-gray-400'>Designed and implemented user-friendly, responsive web applications using HTML5, CSS3, JavaScript (ES6+) and modern frameworks like React, Redux toolkit, Tailwind css.</li>
                    <li className='mt-8 font-semibold text-gray-400'>Improved website performance and SEO by optimizing code, reducing load times, and implementing best practices like lazy loading and minimizing CSS/JS bundles.</li>
                </div>
            </div>
        </>
    )
}

export default Experience
