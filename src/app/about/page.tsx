import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <section className='min-h-screen mt-24 '>

        <div className='max-w-5xl mx-auto flex space-x-2 px-12 '>
          <div className='bg-green-600 h-8 w-2 rounded-md'></div>
          <div className='text-xl font-bold'>About </div>
        </div>

        <div className='max-w-5xl mx-auto w-full  rounded-lg md:flex md:justify-between px-5  '>

          {/* left side */}
          <div className='py-5 flex flex-col px-10  justify-center '>
            <h1 className='text-2xl md:text-3xl lg:4xl font-bold text-green-600'>I'm Frontend Developer</h1>
            <p className='text-gray-400 mt-8 leading-7'>I am a passionate frontend developer with a knack for turning complex ideas into visually appealing and user-friendly web interfaces. With expertise in HTML5, CSS3, JavaScript, and modern frontend frameworks like react js.</p>
            <Link href='/contact' className='mt-8 hover:text-gray-300 bg-green-600 text-black py-2 px-4 font-bold rounded-xl w-fit'>
              <button>contact me</button>
            </Link>
          </div>

          {/* right side */}
          <div className='w-full'>
            <Image src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
              alt='img'
              height={350}
              width={350}
              className='rounded-full  px-5 py-5' />
          </div>

        </div>
      </section>
    </>
  )
}

export default page
