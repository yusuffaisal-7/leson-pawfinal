// import React from 'react';

// const ShowAllJobs = () => {
//     return (
//         <div>
//             <h1>Shw</h1>
//         </div>
//     );
// };

// export default ShowAllJobs;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


// Skeleton loader
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="p-6 space-y-2">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

const ShowAllJobs = () => {
  const axiosSecure = useAxiosSecure();

  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => (await axiosSecure.get('/jobs')).data,
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          All Jobs
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6).fill(0).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">All Jobs</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{job.subject || 'Untitled Job'}</h3>
              <p><strong>Email:</strong> {job.email || 'Not specified'}</p>
              <p><strong>Topics/Goals:</strong> {job.topicsGoals || 'Not specified'}</p>
              <p><strong>Grade Level:</strong> {job.gradeLevel || 'Not specified'}</p>
              <p><strong>Sessions/Week:</strong> {job.sessionsPerWeek || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${job.budget || 'Not specified'}</p>
              <p><strong>Location:</strong> {job.location || 'Not specified'}</p>
              <p><strong>Mode of Learning:</strong> {job.modeOfLearning || 'Not specified'}</p>
              <p><strong>Availability:</strong> {job.availability || 'Not specified'}</p>
              <p><strong>Open to Negotiation:</strong> {job.openToNegotiation === 'Yes' || job.openToNegotiation === true ? 'Yes' : 'No'}</p>
              <p><strong>Start Date:</strong> {job.startDate || 'Not specified'}</p>
              <p><strong>Deadline:</strong> {job.deadline || 'Not specified'}</p>
              <p><strong>Help Type:</strong> {job.helpType?.join(', ') || 'Not specified'}</p>
              <p><strong>Additional Notes:</strong> {job.additionalNotes || 'None'}</p>
              <p><strong>Posted At:</strong> {job.postedAt ? new Date(job.postedAt).toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }) : 'Not specified'}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    job.status === 'pending' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {job.status?.charAt(0).toUpperCase() + job.status?.slice(1) || 'Pending'}
                </span>
              </p>
              <div className="border-t pt-2">
                <h4 className="font-semibold">Applicants</h4>
                {job.applicants && job.applicants.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {job.applicants.map((applicant, index) => (
                      <li key={index} className="text-sm">
                        {applicant.name || 'Unknown'} ({applicant.email || 'Not specified'})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm">No applicants yet</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllJobs;