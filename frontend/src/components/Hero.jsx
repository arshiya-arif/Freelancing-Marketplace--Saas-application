// import React from 'react'
// import {motion} from 'framer-motion'

// function Hero() {
//   return (
// <div className='w-full flex '>
//   <div className='p-20 w-1/2'>
//    <motion.div
//   initial={{ opacity: 0, x: 50 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.9 }}
// ><h1 className=''><span className='text-6xl font-bold italic text-[#284910]'>Empower</span></h1></motion.div> 
//     <motion.div
//   initial={{ opacity: 0, x: 50 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}><h2 className='p-2 text-3xl font-bold font-mono italic text-[#284910]'>Your Workflow with Our Freelancing SaaS Platform</h2>
//     <h2 className='p-2 text-xl '>Deliver quality, get rated, and receive official certificates for every completed job.</h2>
//     </motion.div>
//     <motion.div
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}>
//     <button className='px-7 py-4 bg-[#284910] rounded-4xl text-white mt-5 hover:bg-[#289102]'>Browse Jobs</button>
//   </motion.div></div>
//   <div className='w-1/2 p-10 bg-gray-100 rounded-tl-full '>
//   <motion.div
//   initial={{ opacity: 0, x: 50 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}>
// <img src="/herosection.png" alt="" className=' transition-transform duration-300 hover:scale-105'/></motion.div>
//   </div>

// </div>    


//   )
// }

// export default Hero
import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-center">
      
      {/* Left Section */}
      <div className="p-6 md:p-12 lg:p-20 w-full lg:w-1/2 text-center lg:text-left">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#284910]">
              Empower
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="p-2 text-lg md:text-2xl lg:text-3xl font-bold font-mono italic text-[#284910]">
            Your Workflow with Our Freelancing SaaS Platform
          </h2>
          <h2 className="p-2 text-sm md:text-base lg:text-xl text-gray-700">
            Deliver quality, get rated, and receive official certificates for every completed job.
          </h2>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="px-6 py-3 md:px-7 md:py-4 bg-[#284910] rounded-full text-white mt-5 hover:bg-[#289102] transition-colors duration-300">
            Browse Jobs
          </button>
        </motion.div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 bg-gray-100 rounded-tl-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/herosection.png"
            alt="Hero"
            className="w-60 h-auto md:w-72 lg:w-110 transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
