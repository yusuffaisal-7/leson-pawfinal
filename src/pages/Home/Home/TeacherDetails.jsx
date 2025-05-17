


// import { useQuery } from '@tanstack/react-query';
// import { useParams, useNavigate } from 'react-router-dom';
// // import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { useContext } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { AuthContext } from '../../../providers/AuthProvider';
// // import { AuthContext } from '../providers/AuthProvider';

// const TeacherDetails = () => {
//   const { tutorId } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const { data: tutor, isLoading, error } = useQuery({
//     queryKey: ['tutor', tutorId],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/tutors/${tutorId}`);
//       return res.data;
//     },
//   });

//   const handleBookTutor = async () => {
//     if (!user) {
//       alert('Please log in to book a tutor.');
//       navigate('/login');
//       return;
//     }
//     try {
//       await axiosSecure.post('/carts', {
//         email: user.email,
//         tutorId: tutor._id,
//         subject: tutor.subjects[0], 
//       });
//       alert('Tutor booked successfully!');
//       navigate('/dashboard/my-bookings');
//     } catch (error) {
//       console.error('Error booking tutor:', error);
//       alert('Failed to book tutor.');
//     }
//   };

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;
//   if (!tutor) return <div className="text-center py-10">Tutor not found</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="btn btn-outline btn-sm mb-6"
//       >
//         Back
//       </button>
//       <div className="bg-white rounded-2xl shadow-lg p-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           <img
//             src={tutor.photoURL || 'https://i.ibb.co.com/gxzxFJk/profile12.jpg'}
//             alt={tutor.name}
//             className="w-full md:w-1/3 h-64 object-cover rounded-lg"
//           />
//           <div className="flex-1">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">{tutor.name}</h2>
//             <p className="text-gray-600 mb-2"><strong>Email:</strong> {tutor.email}</p>
//             <p className="text-gray-600 mb-2"><strong>Subjects:</strong> {tutor.subjects?.join(', ')}</p>
//             <p className="text-gray-600 mb-2"><strong>Experience:</strong> {tutor.experience || 0} years</p>
//             <p className="text-gray-600 mb-2"><strong>Status:</strong> {tutor.status || 'Active'}</p>
//             <p className="text-gray-600 mb-2"><strong>Bio:</strong> {tutor.bio || 'No bio available'}</p>
//             <p className="text-gray-600 mb-2"><strong>Location:</strong> {tutor.location || 'Not specified'}</p>
//             <p className="text-gray-600 mb-2"><strong>Education:</strong> {tutor.education || 'Not specified'}</p>
//             <button
//               onClick={handleBookTutor}
//               className="btn btn-primary mt-4"
//             >
//               Book Tutor
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDetails;


// import { useQuery } from '@tanstack/react-query';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { AuthContext } from '../../../providers/AuthProvider';

// const TeacherDetails = () => {
//   const { tutorId } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const { data: tutor, isLoading, error } = useQuery({
//     queryKey: ['tutor', tutorId],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/tutors/${tutorId}`);
//       return res.data;
//     },
//   });

//   const handleBookTutor = async () => {
//     if (!user) {
//       alert('Please log in to book a tutor.');
//       navigate('/login');
//       return;
//     }
//     try {
//       await axiosSecure.post('/carts', {
//         email: user.email,
//         tutorId: tutor._id,
//         subject: tutor.subjects[0],
//       });
//       alert('Tutor booked successfully!');
//       navigate('/dashboard/my-bookings');
//     } catch (error) {
//       console.error('Error booking tutor:', error);
//       alert('Failed to book tutor.');
//     }
//   };

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;
//   if (!tutor) return <div className="text-center py-10">Tutor not found</div>;

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="btn btn-outline btn-sm mb-6"
//       >
//         Back
//       </button>
//       <div className="bg-white rounded-2xl shadow-lg p-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           <img
//             src={tutor.photoURL || 'https://i.ibb.co/gxzxFJk/profile12.jpg'}
//             alt={tutor.name}
//             className="w-full md:w-1/3 h-64 object-cover rounded-lg"
//           />
//           <div className="flex-1">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">{tutor.name}</h2>
//             <p className="text-gray-600 mb-1"><strong>Email:</strong> {tutor.email}</p>
//             <p className="text-gray-600 mb-1"><strong>Phone:</strong> {tutor.contactNumber}</p>
//             <p className="text-gray-600 mb-1"><strong>Date of Birth:</strong> {tutor.dateOfBirth}</p>
//             <p className="text-gray-600 mb-1"><strong>Gender:</strong> {tutor.gender}</p>
//             <p className="text-gray-600 mb-1"><strong>Subjects:</strong> {tutor.subjects?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-600 mb-1"><strong>Education:</strong> {tutor.educationalQualifications}</p>
//             <p className="text-gray-600 mb-1"><strong>Institution:</strong> {tutor.institution}</p>
//             <p className="text-gray-600 mb-1"><strong>Certifications:</strong> {tutor.certifications?.join(', ')}</p>
//             <p className="text-gray-600 mb-1"><strong>Experience:</strong> {tutor.experience} years</p>
//             <p className="text-gray-600 mb-1"><strong>Teaching Mode:</strong> {tutor.teachingMode}</p>
//             <p className="text-gray-600 mb-1"><strong>Availability:</strong> {tutor.availability?.join(', ') || 'N/A'}</p>
//             <p className="text-gray-600 mb-1"><strong>Hourly Rate:</strong> ${tutor.hourlyRate}</p>
//             <p className="text-gray-600 mb-1"><strong>Status:</strong> {tutor.status}</p>
//             <p className="text-gray-600 mb-1"><strong>Bio:</strong> {tutor.bio}</p>
//             <button
//               onClick={handleBookTutor}
//               className="btn btn-primary mt-4"
//             >
//               Book Tutor
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDetails;


import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const TeacherDetails = () => {
  const { tutorId } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { data: tutor, isLoading, error } = useQuery({
    queryKey: ['tutor', tutorId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tutors/${tutorId}`);
      return res.data;
    },
  });

  // const handleBookTutor = async () => {
  //   if (!user) {
  //     alert('Please log in to book a tutor.');
  //     navigate('/login');
  //     return;
  //   }
  //   try {
  //     await axiosSecure.post('/carts', {
  //       email: user.email,
  //       tutorId: tutor._id,
  //       subjects: tutor.subjects, 
  //       price: tutor.hourlyRate,
  //     });
  //     alert('Tutor booked successfully!');
  //     navigate('/dashboard/my-bookings');
  //   } catch (error) {
  //     console.error('Error booking tutor:', error);
  //     alert('Failed to book tutor.');
  //   }
  // };

  const handleBookTutor = async () => {
  if (!user) {
    alert('Please log in to book a tutor.');
    navigate('/login');
    return;
  }

  try {
    const existingBooking = await axiosSecure.get(`/carts?email=${user.email}`);
    const alreadyBooked = existingBooking.data.find(
      (item) => item.tutorId === tutor._id
    );

    if (alreadyBooked) {
      alert('You have already booked this tutor.');
      return;
    }

    await axiosSecure.post('/carts', {
      email: user.email,
      tutorId: tutor._id,
      tutorName: tutor.name,
      subject: tutor.subjects?.[0] || 'Not specified',
      price: tutor.hourlyRate,
      status: 'Pending',
    });

    alert('Tutor booked successfully!');
    navigate('/dashboard/my-bookings');
  } catch (error) {
    console.error('Error booking tutor:', error);
    alert('Failed to book tutor.');
  }
};


  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;
  if (!tutor) return <div className="text-center py-10">Tutor not found</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#f5f8ff] min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline btn-sm mb-6 border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        Back
      </button>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={tutor.photoURL || 'https://i.ibb.co.com/gxzxFJk/profile12.jpg'}
            alt={tutor.name}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{tutor.name}</h2>
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📧</span>
                <strong>Email:</strong> {tutor.email}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📞</span>
                <strong>Phone:</strong> {tutor.contactNumber}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">🎂</span>
                <strong>Date of Birth:</strong> {tutor.dateOfBirth}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">👤</span>
                <strong>Gender:</strong> {tutor.gender}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">📚</span>
                <strong>Subjects:</strong> {tutor.subjects?.join(', ') || 'N/A'}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">💼</span>
                <strong>Experience:</strong> {tutor.experience} years
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">🏫</span>
                <strong>Teaching Mode:</strong> {tutor.teachingMode}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">⏰</span>
                <strong>Availability:</strong> {tutor.availability?.join(', ') || 'N/A'}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">💵</span>
                <strong>Hourly Rate:</strong> ${tutor.hourlyRate}
              </p>
              <p className="text-gray-600 flex items-center">
                <span className="mr-2">✅</span>
                <strong>Status:</strong> {tutor.status}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
              <div className="space-y-4">
                <div className="border-t border-dashed pt-4">
                  <p className="font-medium text-gray-800">{tutor.educationalQualifications}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <span className="mr-2">🏫</span>
                    <span>{tutor.institution}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h3>
              <p className="text-gray-600">{tutor.certifications?.join(', ')}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bio</h3>
              <p className="text-gray-600">{tutor.bio}</p>
            </div>
            <button
              onClick={handleBookTutor}
              className="btn btn-primary mt-6 bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              Book Tutor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;