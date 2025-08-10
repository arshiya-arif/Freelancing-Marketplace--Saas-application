// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Optional: send formData to backend or API
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="bg-gray-100 min-h-screen py-20 px-6 md:px-16 text-[#284910]">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
//         <p className="text-center text-gray-600 mb-10">
//           We'd love to hear from you! Whether you have a question or just want to say hello,
//           our team is ready to help.
//         </p>

//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-[#284910] text-white px-6 py-2 rounded-full hover:bg-[#2c6e25] transition cursor-pointer"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Optional: send formData to backend or API
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-20 px-6 md:px-16 text-[#284910]">
        <div className="max-w-4xl mx-auto">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p
            className="text-center text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We'd love to hear from you! Whether you have a question or just want to say hello,
            our team is ready to help.
          </motion.p>

          {/* Animated Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#284910]"
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#284910] text-white px-6 py-2 rounded-full hover:bg-[#2c6e25] transition cursor-pointer"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Contact;

