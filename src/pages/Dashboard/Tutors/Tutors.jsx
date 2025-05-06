// import React from 'react';

// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// // import useAxiosSecure from '../hooks/useAxiosSecure';

// const Tutors = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: tutors = [], isLoading, error } = useQuery({
//     queryKey: ['tutors'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/tutors');
//       return res.data;
//     },
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Available Tutors</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {tutors.map((tutor) => (
//           <div key={tutor._id} className="card bg-white shadow-md p-4 rounded-lg">
//             <h3 className="text-xl font-semibold">{tutor.name}</h3>
//             <p className="text-gray-600">Email: {tutor.email}</p>
//             <p className="text-gray-600">Status: {tutor.status || 'Active'}</p>
//             {tutor.subjects && <p className="text-gray-600">Subjects: {tutor.subjects.join(', ')}</p>}
//             {tutor.experience && <p className="text-gray-600">Experience: {tutor.experience} years</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tutors;


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Tutors = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tutors = [], isLoading, error } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tutors');
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Meet Our Expert Tutors</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={tutor.photoURL || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={tutor.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
              <p className="text-sm text-gray-500">📧 {tutor.email}</p>
              <p className="text-sm text-gray-500">🎓 Subjects: {tutor.subjects?.join(', ')}</p>
              <p className="text-sm text-gray-500">💼 Experience: {tutor.experience || 0} years</p>
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  tutor.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {tutor.status || 'Active'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
