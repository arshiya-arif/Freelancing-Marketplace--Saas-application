import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
        withCredentials: true
      });
      if (res.status === 200) {
        toast.success('Signup successful!');
         setFormData({
          name: '',
          email: '',
          password: ''
        });
        setTimeout(() => {
          navigate('/login'); 
        }, 1500);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white md:flex">
      {/* Left side form */}
      <div className="md:w-1/2 min-h-screen w-full bg-white flex items-center justify-center">
        <div className='md:p-10 p-10 w-full max-w-md'>
         <h1 className="flex items-center mb-6">
  <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
  <span className="text-xl font-semibold text-gray-800">Freelancing SaaS Platform</span>
</h1>
          <h1 className='md:text-4xl font-semibold font-poppins text-2xl mb-6'>Get Started Now</h1>

          <form onSubmit={handleSubmit}>
            <label className='font-semibold'>Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              className='border border-gray-300 p-2 rounded-full w-full mb-5 bg-transparent'
              onChange={handleChange}
              name="name"
              value={formData.name}
              required
            />
            <label className='font-semibold'>Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-gray-300 p-2 rounded-full w-full mb-5 bg-transparent'
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
            <label className='font-semibold'>Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              className='border border-gray-300 p-2 rounded-full w-full mb-5 bg-transparent'
              onChange={handleChange}
              name="password"
              value={formData.password}
              required
            />
            <input
              type="submit"
              value="Sign Up"
              className='bg-[#3A5B22] text-white p-2 rounded-full w-full hover:bg-green-700 cursor-pointer'
            />
          </form>
          <h3 className='font-medium text-center mt-6'>
            Have an account? <a href="/login" className='text-blue-700 cursor-pointer'>Sign in</a>
          </h3>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:block md:w-1/2 relative min-h-screen bg-black" >
        {/* Background image */}
        <img
          src="/freelancer-using-chatgpt.jpg"
          alt="signup-banner"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-40 "
        />

        {/* Black Overlay */}
        <div className="absolute inset-0  bg-opacity-50"></div>

        {/* Overlay Content */}
        <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className='text-3xl font-black font-poppins'>
            Welcome to <br />
            <span className='text-4xl text-amber-300'>Freelancing SaaS Platform!</span>
          </h1>
          <p className='mt-4 text-sm font-poppins max-w-md'>
            Create your account and start your journey today —<br />
            Whether you're a freelancer looking for exciting projects<br />
            or an admin seeking top talent, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
