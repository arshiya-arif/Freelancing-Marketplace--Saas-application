import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
function BrowseJobs() {
    const [job, setJob] = useState([
        {
            title: "",
            description: "",
            budget: "",
            deadline: "",
            category: ""
        }
    ]);
useEffect(() => {
    // Fetch job listings from an API or database
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs/openjobs');
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  },);

  return (
<div>
        <div>
        <Navbar />
         <h1 className="text-3xl font-bold text-center mt-10">Available Jobs</h1>
       <p className="text-center mt-4">Explore a variety of job listings tailored to your skills and interests.</p>
 </div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
  {job.map((item, index) => (
    <div key={index} className="border-2 border-green-800 rounded-lg p-4 shadow-lg bg-gray-100">
      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <div className="text-sm text-gray-500">
        <p><strong>Budget:</strong> ${item.budget}</p>
        <p><strong>Deadline:</strong> {new Date(item.deadline).toLocaleDateString()}</p>
        <p><strong>Skills:</strong> {item.skills?.join(', ') || 'N/A'}</p>
        <p><strong>Category:</strong> {item.category}</p>
        <button className='px-4 py-2 bg-[#284910] text-white rounded-md mt-2 hover:bg-green-700 cursor-pointer'>View Job</button>
      </div>
    </div>
  ))}
</div>
</div>

  )
}

export default BrowseJobs;