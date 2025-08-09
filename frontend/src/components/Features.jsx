import React from 'react';
import { motion } from 'framer-motion';

function Features() {
  const features = [
    { img: '/check.png', title: 'Task Tracking & Management' },
    { img: '/review.png', title: 'Rating & Reviews System' },
    { img: '/document.png', title: 'Job Completion Certificate' },
  ];

  return (
    <div className="bg-[#f9f9f9] py-20">
      <h1 className='text-4xl font-bold text-center text-[#284910] italic'>Features</h1>
      <p className="text-center text-gray-600 mt-2 mb-10 max-w-xl mx-auto">
        Explore the key features that make our platform reliable and easy to use.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once:false}}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:bg-[#f0fdf4] transition-all duration-300"
          >
            <img src={feature.img} alt={feature.title} className="w-20 h-20" />
            <p className="mt-4 text-lg font-semibold text-[#284910]">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;

