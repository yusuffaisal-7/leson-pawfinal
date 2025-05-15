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

const ShowStudent = () => {
  const axiosSecure = useAxiosSecure();

  const { data: students = [], isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get('/students');
        return response.data;
      } catch (err) {
        console.error('Error fetching students:', err);
        throw err;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
          All Students
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array(3).fill(0).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Error: {error.message || 'Failed to fetch students. You may not have admin access.'}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
        All Students
      </h3>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="p-6 space-y-4">
                <p><strong>ID:</strong> {student._id || 'Not specified'}</p>
                <p><strong>Full Name:</strong> {student.fullName || 'Not specified'}</p>
                <p><strong>Email:</strong> {student.email || 'Not specified'}</p>
                <p><strong>Institution:</strong> {student.institution || 'Not specified'}</p>
                <p><strong>Grade/Year:</strong> {student.gradeYearOfStudy || 'Not specified'}</p>
                <p><strong>Contact:</strong> {student.contactNumber || 'Not specified'}</p>
                <p><strong>City/State/Country:</strong> {student.cityStateCountry || 'Not specified'}</p>
                <p>
                  <strong>Updated At:</strong>{' '}
                  {student.updatedAt
                    ? new Date(student.updatedAt).toLocaleString('en-US', {
                        timeZone: 'Asia/Dhaka',
                      })
                    : 'Not specified'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowStudent;