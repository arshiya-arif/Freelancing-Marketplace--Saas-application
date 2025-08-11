import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4">
        
      
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
          <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            FreelancePro
          </span>
        </Link>

      
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-emerald-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {!user ? (
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 rounded-full text-white font-semibold
                         bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg 
                         hover:shadow-xl hover:scale-105 active:scale-95 
                         transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-full text-white font-semibold
                         bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg 
                         hover:shadow-xl hover:scale-105 active:scale-95 
                         transition-all duration-300 cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 shadow-inner">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-500 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <div>
            {!user ? (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-2 rounded-full text-white font-semibold
                           bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg 
                           hover:shadow-xl hover:scale-[1.02] active:scale-95 
                           transition-all duration-300 cursor-pointer"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-2 rounded-full text-white font-semibold
                           bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg 
                           hover:shadow-xl hover:scale-[1.02] active:scale-95 
                           transition-all duration-300 cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
