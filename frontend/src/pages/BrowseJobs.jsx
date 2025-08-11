

import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function BrowseJobs() {
  const navigate = useNavigate();
  const [job, setJob] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent tracking-wide">
            Available Jobs
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore job listings tailored to your skills and interests, and take the next step in your career.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {job.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              
              <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-4">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
              </div>

            
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4">
                  {item.description.length > 100
                    ? `${item.description.slice(0, 100)}...`
                    : item.description}
                </p>

                <div className="mt-auto space-y-2">
                  <p className="text-sm text-gray-500">
                    <strong className="text-emerald-600">Budget:</strong> ${item.budget}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-emerald-600">Deadline:</strong>{' '}
                    {new Date(item.deadline).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-emerald-600">Category:</strong> {item.category}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-emerald-600">Skills:</strong>{' '}
                    {item.skills?.join(', ') || 'N/A'}
                  </p>
                   <p className="text-sm text-gray-500">
                    <strong className="text-emerald-600">Status:</strong> {item.status}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="p-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => navigate(`/job/${item._id}`)}
                  className="px-5 py-2 rounded-full text-white font-semibold
                             bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-md 
                             hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  View Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BrowseJobs;
