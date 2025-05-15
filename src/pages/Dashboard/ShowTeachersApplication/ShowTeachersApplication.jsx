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
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

const ShowTeachersApplication = () => {
  const axiosSecure = useAxiosSecure();

  const { data: applications = [], isLoading, error } = useQuery({
    queryKey: ['teacherApplications'],
    queryFn: async () => (await axiosSecure.get('/teacher-requests')).data,
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Teacher Applications
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array(3).fill(0).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Teacher Applications
      </h3>
      {applications.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="p-6 space-y-4">
                <p><strong>Email:</strong> {application.email || 'Not specified'}</p>
                <p><strong>Title:</strong> {application.title || 'Not specified'}</p>
                <p><strong>Reason:</strong> {application.reason || 'Not specified'}</p>
                <p><strong>CV Link:</strong> <a href={application.cvLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{application.cvLink || 'Not provided'}</a></p>
                <p>
                  <strong>Submitted At:</strong>{' '}
                  {application.submittedAt
                    ? new Date(application.submittedAt).toLocaleString('en-US', {
                        timeZone: 'Asia/Dhaka',
                      })
                    : 'Not specified'}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      application.status === 'pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : application.status === 'approved'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {application.status?.charAt(0).toUpperCase() +
                      application.status?.slice(1) || 'Pending'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowTeachersApplication;