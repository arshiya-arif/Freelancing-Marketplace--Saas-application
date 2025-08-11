import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import BrowseJobs from './pages/BrowseJobs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobDetails from './pages/JobDetails';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>}></Route>
        <Route path="/jobs" element={<BrowseJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/job/:id' element={<JobDetails/>}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
    </AuthProvider>
  );
};

export default App;
