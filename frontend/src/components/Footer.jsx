// import React from 'react'

// function Footer() {
//   return (
//     <div className="bg-[#284910] text-white py-4">
//       <div className="container mx-auto text-center">
//         <p>&copy; {new Date().getFullYear()} Freelancing SaaS Platform. All rights reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1e2d24] text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
          <div>
            <h3 className="text-xl font-bold text-white">Freelance Saas Platform</h3>
            <p className="mt-2 text-sm text-gray-400">
              Connecting freelancers with projects. Simple. Fast. Reliable.
            </p>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link to="/jobs" className="hover:text-green-400 transition">Jobs</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
            </ul>
          </div>

    
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Get Started</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/signup" className="hover:text-green-400 transition">Create Account</Link></li>
              <li><Link to="/login" className="hover:text-green-400 transition">Sign In</Link></li>
              <li><Link to="/faq" className="hover:text-green-400 transition">FAQ</Link></li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Freelance Saas Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
