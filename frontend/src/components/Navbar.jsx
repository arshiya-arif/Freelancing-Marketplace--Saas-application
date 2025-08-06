import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react for icons

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/api/auth/logout', {
        withCredentials: true,
      });
      logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
      
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[##3A5B22]" />}
          </button>
        </div>

       
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Home</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Browse Jobs</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">About</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Contact</li>
          </ul>
        </nav>

     
        <div className="hidden md:block">
          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-[#3A5B22] text-white rounded-full hover:bg-green-700"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-[#3A5B22] text-white rounded-full hover:bg-green-700"
            >
              Logout
            </button>
          )}
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Home</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Browse Jobs</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">About</li>
            <li className="cursor-pointer hover:text-green-700 hover:font-bold">Contact</li>
          </ul>

          <div>
            {!user ? (
              <button
                onClick={() => navigate('/login')}
                className="w-full px-6 py-2 bg-[#3A5B22] text-white rounded-full hover:bg-green-700"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-6 py-2 bg-[#3A5B22] text-white rounded-full hover:bg-green-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
