import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SubmittedTasks() {
  const [jobs, setJobs] = useState([]);
  const [tasksByJob, setTasksByJob] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const jobsRes = await axios.get("http://localhost:5000/api/jobs/jobs", {
          withCredentials: true,
        });

        const jobsData = jobsRes.data?.jobs || [];
        const jobsWithTasks = [];
        const tasksMap = {};

        for (let job of jobsData) {
          try {
            const taskRes = await axios.get(
              `http://localhost:5000/api/admin/job/${job._id}/tasks`,
              { withCredentials: true }
            );
            const relevantTasks = taskRes.data?.tasks?.filter(
              (t) => t.status !== "pending"
            ) || [];
            if (relevantTasks.length > 0) {
              jobsWithTasks.push(job);
              tasksMap[job._id] = relevantTasks;
            }
          } catch (err) {
            console.warn(`Failed to fetch tasks for job ${job._id}:`, err);
          }
        }

        setJobs(jobsWithTasks);
        setTasksByJob(tasksMap);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleApprove = async (taskId, jobId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/approve-task/${taskId}`,
        {},
        { withCredentials: true }
      );
      toast.success("Task approved successfully!");
      setTasksByJob((prev) => ({
        ...prev,
        [jobId]: prev[jobId]?.map((t) =>
          t._id === taskId ? { ...t, status: "approved" } : t
        ) || [],
      }));
    } catch {
      toast.error("Failed to approve task");
    }
  };

  const handleReject = async (taskId, jobId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/reject-task/${taskId}`,
        {},
        { withCredentials: true }
      );
      toast.success("Task rejected successfully!");
      setTasksByJob((prev) => ({
        ...prev,
        [jobId]: prev[jobId]?.map((t) =>
          t._id === taskId ? { ...t, status: "rejected" } : t
        ) || [],
      }));
    } catch {
      toast.error("Failed to reject task");
    }
  };

  const handleMarkComplete = async (jobId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/jobs/job/${jobId}/complete`,
        {},
        { withCredentials: true }
      );
      toast.success("Job marked as complete!");
      setJobs((prev) =>
        prev.map((j) => (j._id === jobId ? { ...j, status: "completed" } : j))
      );
    } catch {
      toast.error("Failed to mark job as complete");
    }
  };

  if (loading) return <p className="lg:p-6">Loading tasks...</p>;

  return (
    <div className="lg:p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-emerald-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">
        Submitted / In-Progress Tasks
      </h2>

      {jobs.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        jobs.map((job) => {
          const allApproved = tasksByJob[job._id]?.every((t) => t.status === "approved");
          return (
            <div key={job._id} className="mb-8 sm:mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-emerald-700">
                  {job?.title} {job.status && `- ${job.status}`}
                </h3>
                {allApproved && job.status !== "completed" && (
                  <button
                    onClick={() => handleMarkComplete(job._id)}
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    Mark as Complete
                  </button>
                )}
              </div>

             
              <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                <table className="min-w-full text-xs sm:text-sm text-left hidden sm:table">
                  <thead className="bg-emerald-100 text-emerald-900">
                    <tr>
                      <th className="px-2 sm:px-4 py-2">#</th>
                      <th className="px-2 sm:px-4 py-2">Task Title</th>
                      <th className="px-2 sm:px-4 py-2">Description</th>
                      <th className="px-2 sm:px-4 py-2">Status</th>
                      <th className="px-2 sm:px-4 py-2">Submitted Note</th>
                      <th className="px-2 sm:px-4 py-2">Submitted File</th>
                      <th className="px-2 sm:px-4 py-2">External Link</th>
                      <th className="px-2 sm:px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasksByJob[job._id]?.map((task, index) => (
                      <tr key={task._id} className="border-t hover:bg-gray-50 transition">
                        <td className="px-2 sm:px-4 py-2">{index + 1}</td>
                        <td className="px-2 sm:px-4 py-2">{task?.title || "-"}</td>
                        <td className="px-2 sm:px-4 py-2">{task?.description || "-"}</td>
                        <td className="px-2 sm:px-4 py-2">{task?.status || "-"}</td>
                        <td className="px-2 sm:px-4 py-2">{task?.submission_note || "-"}</td>
                        <td className="px-2 sm:px-4 py-2">
                          {task?.submitted_file_url ? (
                            <a
                              href={task.submitted_file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              View File
                            </a>
                          ) : "-"}
                        </td>
                        <td className="px-2 sm:px-4 py-2">
                          {task?.submitted_external_link ? (
                            <a
                              href={task.submitted_external_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Visit Link
                            </a>
                          ) : "-"}
                        </td>
                        <td className="px-2 sm:px-4 py-2 flex gap-1 sm:gap-2 justify-center flex-wrap">
                          {task?.status !== "approved" && task?.status !== "rejected" && (
                            <>
                              <button
                                onClick={() => handleApprove(task._id, job._id)}
                                className="p-1 sm:p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(task._id, job._id)}
                                className="p-1 sm:p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                              >
                                Reject
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    )) || <tr><td colSpan={8} className="text-center py-4">No tasks found</td></tr>}
                  </tbody>
                </table>

                <div className="sm:hidden flex flex-col gap-4 p-2">
                  {tasksByJob[job._id]?.map((task, index) => (
                    <div key={task._id} className="border rounded-lg p-3 shadow-sm bg-gray-50">
                      <p><strong>#{index + 1}</strong></p>
                      <p><strong>Title:</strong> {task?.title || "-"}</p>
                      <p><strong>Description:</strong> {task?.description || "-"}</p>
                      <p><strong>Status:</strong> {task?.status || "-"}</p>
                      <p><strong>Note:</strong> {task?.submission_note || "-"}</p>
                      <p>
                        <strong>File:</strong>{" "}
                        {task?.submitted_file_url ? (
                          <a
                            href={task.submitted_file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View File
                          </a>
                        ) : "-"}
                      </p>
                      <p>
                        <strong>Link:</strong>{" "}
                        {task?.submitted_external_link ? (
                          <a
                            href={task.submitted_external_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Link
                          </a>
                        ) : "-"}
                      </p>
                      <div className="flex gap-2 flex-wrap mt-2">
                        {task?.status !== "approved" && task?.status !== "rejected" && (
                          <>
                            <button
                              onClick={() => handleApprove(task._id, job._id)}
                              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(task._id, job._id)}
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )) || <p className="text-center py-2">No tasks found</p>}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SubmittedTasks;

