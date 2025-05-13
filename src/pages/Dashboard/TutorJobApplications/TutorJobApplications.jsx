import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const TutorJobApplications = () => {
  const axiosSecure = useAxiosSecure();

  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['available-jobs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/jobs/available');
      return res.data;
    },
  });

  const handleApply = async (jobId) => {
    await axiosSecure.post(`/jobs/apply/${jobId}`);
    Swal.fire({
      icon: 'success',
      title: 'Applied to Job',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (isLoading) return <div>Loading jobs...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{job.subject}</h3>
              <p>Posted by: {job.email}</p>
              <p>{job.description}</p>
              <button onClick={() => handleApply(job._id)} className="btn btn-primary">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorJobApplications;