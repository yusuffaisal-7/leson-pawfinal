// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useNavigate } from 'react-router-dom'; // ✅ Correct hook

// const Teacher = () => {
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate(); 

//   const { data: tutors = [], isLoading, error } = useQuery({
//     queryKey: ['tutors'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/tutors');
//       return res.data;
//     },
//   });

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

//   const displayedTutors = tutors.slice(0, 6); 

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold mb-10 text-center">Meet Our Expert Tutors</h2>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {displayedTutors.map((tutor) => (
//           <div
//             key={tutor._id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
//           >
//             <img
//               src={tutor.photoURL || 'https://i.ibb.co.com/gxzxFJk/profile12.jpg'}
//               alt={tutor.name}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-5 space-y-3">
//               <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
//               <p className="text-sm text-gray-500">📧 {tutor.email}</p>
//               <p className="text-sm text-gray-500">🎓 Subjects: {tutor.subjects?.join(', ')}</p>
//               <p className="text-sm text-gray-500">💼 Experience: {tutor.experience || 0} years</p>
//               <span
//                 className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                   tutor.status === 'active'
//                     ? 'bg-green-100 text-green-700'
//                     : 'bg-yellow-100 text-yellow-700'
//                 }`}
//               >
//                 {tutor.status || 'Active'}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show All Button */}
//       {tutors.length > 6 && (
//         <div className="text-center mt-10">
//           <button
//             onClick={() => navigate('/dashboard/tutor')}
//             className="btn btn-outline btn-primary"
//           >
//             Show All Tutors
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teacher;


import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: tutors = [], isLoading, error } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tutors');
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  const displayedTutors = tutors.slice(0, 6);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Meet Our Expert Tutors</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayedTutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            onClick={() => navigate(`/tutor/${tutor._id}`)} // Navigate to details page
          >
            <img
              src={tutor.photoURL || 'https://i.ibb.co.com/gxzxFJk/profile12.jpg'}
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
                  tutor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {tutor.status || 'Active'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {tutors.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/dashboard/tutor')}
            className="btn btn-outline btn-primary"
          >
            Show All Tutors
          </button>
        </div>
      )}
    </div>
  );
};

export default Teacher;