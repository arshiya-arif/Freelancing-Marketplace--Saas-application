import React from 'react';
import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      title: 'Step 1: Sign Up',
      description: 'Create an account by providing your email and password.',
    },
    {
      title: 'Step 2: Browse Jobs',
      description: 'Explore available job listings that match your skills.',
    },
    {
      title: 'Step 3: Bid on Jobs',
      description: "Submit your proposal for the jobs you're interested in.",
    },
    {
      title: 'Step 4: Get Work Done',
      description: 'Once hired, collaborate with the client to complete the project.',
    },
    {
      title: 'Step 5: Job Completion Certificate',
      description: 'Once the project is completed, you will receive a certificate of completion.',
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full"
        >
          <img
            src="/works section.jpg"
            alt="How It Works"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

       
        <div className="flex flex-col gap-4 text-[#284910]">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="bg-white border-l-4 border-[#284910] px-6 py-4 rounded-md shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

