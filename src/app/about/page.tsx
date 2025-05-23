import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  const imageUrl = process.env.NEXT_PUBLIC_PERSONAL_IMAGE_URL || '/default-image.jpg'; // Provide a fallback image

  return (
    <>
      <section className='min-h-screen mt-28 '>

        <div className='max-w-5xl mx-auto flex space-x-2 px-12 '>
          <div className='bg-green-600 h-8 w-2 rounded-md'></div>
          <div className='text-xl font-bold'>About Me </div>
        </div>

        <div className='max-w-5xl mx-auto w-full  rounded-lg md:flex md:justify-between px-5  '>

          {/* left side */}
          <div className='py-5 flex flex-col px-10  justify-center '>

            <p className='text-gray-400 mt-8 leading-7'>
                Hi! I'm a passionate and creative Frontend Developer with a strong foundation in <span className='font-bold text-green-600'>HTML, CSS, JavaScript, React.js,</span> and <span className='font-bold text-green-600'>Next.js.</span> I specialize in building fast, responsive, and user-friendly websites and web apps that blend clean code with modern design.
            </p>
                  
            <p className='text-gray-400 mt-8 leading-7'>
              With experience in both design and development, I love turning ideas into reality in the browser. I'm currently expanding my skills into backend technologies like <span className='font-bold text-green-600'>Node.js, Python, Django </span> and<span className='font-bold text-green-600'> Flask</span>  aiming to become a full-stack developer.
            </p>

          

            <Link href='/contact' className='mt-8 hover:text-gray-300 bg-green-600 text-black py-2 px-4 font-bold rounded-xl w-fit'>
              <button>contact me</button>
            </Link>
          </div>

          {/* right side */}
          <div className='w-full'>
            <Image src='/img.jpg'
              alt='My Personal Image'
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
