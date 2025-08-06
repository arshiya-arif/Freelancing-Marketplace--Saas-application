import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
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
      const res = await axios.post('http://localhost:5000/api/auth/login', formData,{
        withCredentials: true
      });
      const userData = res.data.user; 
      login(userData); // update context
      
      if (res.status === 200) {
        toast.success('Login successful!');
        
        setFormData({ email: '', password: '' });
      setTimeout(()=>{
        navigate('/');
      },500)
      }
    }catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
   
    <div className="min-h-screen bg-white md:flex">
      {/* Left Side with Image */}
      <div className='w-1/2 bg-black hidden md:block min-h-screen'>
        <div className="relative h-full w-full">
          {/* Background Image */}
          <img
            src="/pic3.jpg"
            alt="Login"
            className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-xl"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-opacity-30 rounded-xl"></div>
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white text-xl font-semibold px-4 text-center">
            <h1 className='text-2xl font-poppins font-black'>
              Welcome Back to <br /><span className='text-3xl text-amber-300'>Freelancing SaaS Platform!</span>
            </h1>
            <h2 className='mt-2 text-sm font-poppins'>
              Log in to continue your journey — connect with clients, manage projects, and grow your career.
            </h2>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 min-h-screen w-full">
        <div className='md:p-20 p-10 flex flex-col justify-center h-full'>
          
          <h1 className="flex items-center gap-3 mb-3">
  <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
  <span className="text-xl font-semibold text-gray-800">Freelancing SaaS Platform</span>
</h1>
          <h1 className='md:text-4xl font-semibold font-poppins text-2xl'>Welcome Back!</h1>
          <h1 className='mt-3'>Enter your Credentials to access your account</h1>
          <div className='mt-10'>
            <form onSubmit={handleSubmit}>
              <label className='font-semibold'>Email Address</label>
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
                value="Login"
                className='bg-[#3A5B22] text-white p-2 rounded-full w-full hover:bg-green-700 cursor-pointer'
              />
            </form>
            <h3 className='font-medium text-center mt-6'>
              Don’t have an account? <span className='text-blue-700 cursor-pointer'><a href="http://localhost:5173/signup">Sign up</a></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
