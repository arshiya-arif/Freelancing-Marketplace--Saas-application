// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// function CTA() {
//   const navigate = useNavigate();
//   return (
//     <div className='mt-20 p-3'>
//         <h2 className='text-center text-[#284910] text-4xl font-bold'>Ready to Get Started?</h2>
//         <p className='text-center mt-3 text-lg'>Join our platform and start bidding on projects today!</p>
//         <div className='flex justify-center gap-4 mt-4'>
//           <button className='bg-[#284910] text-white px-4 py-2 rounded-full hover:bg-[#289102] cursor-pointer' onClick={()=>{navigate('/signup')}}>Sign Up</button>
//           <button className='border border-[#284910] text-[#284910] px-4 py-2 rounded-full hover:bg-[#289102] hover:text-white cursor-pointer' onClick={()=>{navigate('/jobs')}}>Browse Jobs</button>
//         </div>
//     </div>
//   )
// }

// export default CTA;


import React from 'react';
import { useNavigate } from 'react-router-dom';

function CTA() {
  const navigate = useNavigate();

  return (
    <div className=" px-4 py-10 bg-[#f9f9f9] text-center">
      <h2 className="text-[#284910] text-3xl md:text-4xl font-bold">
        Ready to Get Started?
      </h2>

      <p className="mt-3 text-base md:text-lg text-gray-700">
        Join our platform and start bidding on projects today!
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          className="bg-[#284910] text-white px-6 py-3 rounded-full hover:bg-[#289102] transition-all duration-300 w-full sm:w-auto cursor-pointer"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>

        <button
          className="border border-[#284910] text-[#284910] px-6 py-3 rounded-full hover:bg-[#289102] hover:text-white transition-all duration-300 w-full sm:w-auto cursor-pointer"
          onClick={() => navigate('/jobs')}
        >
          Browse Jobs
        </button>
      </div>
    </div>
  );
}

export default CTA;
