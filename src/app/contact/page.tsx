import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <section className='min-h-screen mt-24 '>

        <div className="max-w-5xl mx-auto  flex px-10 space-x-3 ">
          <div className="bg-green-600 h-8 w-2 rounded-md"></div>
          <div className="text-xl font-bold">Get in Touch </div>
        </div>

        <div className=" md:flex max-w-5xl mx-auto space-y-16  ">

          {/* contact data show into your mail through bellow  action link   --  // Make sure to run npm install @formspree/react*/}
          {/* right side */}
          <div className="w-full md:w-1/2 px-10 mt-8 ">
            <h1 className="text-sm text-gray-300">Feel free to reach out if you have any questions!</h1>
            <form
              className="space-y-4 mt-3"
              action="https://formspree.io/f/xyzgzbdo"
              method="POST"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-green-600  font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-2  bg-gray-400 shadow-lg rounded text-black "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-green-600 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2  bg-gray-400 shadow-lg rounded text-black"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-green-600 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2  bg-gray-400 shadow-lg rounded text-black"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-gray-300 py-2 px-4 rounded font-bold hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* left side */}
          <div className="">

            <div className=" flex space-x-2 px-8 md:px-20 md:-mt-24  ">
              <div className="bg-green-600 h-8 w-2 rounded-md"></div>
              <div className="text-xl font-bold">Contact me </div>
            </div>

            <div className="px-8 md:px-20 mt-10 text-gray-300">
              <div className="flex space-x-2 items-center hover:text-green-600">
                <MdEmail className="text-2xl" />
                <a href="sandhyapt30@gmail.com" className="font-bold">
                  sandhyapt30@gmail.com
                </a>
              </div>

              <div className="flex space-x-5 text-3xl items-center hover:text-green-600 mt-5">
                <a href="https://www.linkedin.com/in/sandhyafrontend/">
                  <FaLinkedin />
                </a>

                <a href="https://github.com/sandhyapatel12">
                  <FaGithub />
                </a>

                <a href="https://github.com/sandhyapatel12">
                  <FaInstagramSquare />
                </a>


              </div>

              <h1 className=" text-gray-400 mt-10">Visit my social media and know more about me.</h1>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
