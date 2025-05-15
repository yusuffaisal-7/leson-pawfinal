
// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { Link } from 'react-router-dom';

// const Tutors = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: tutors = [], isLoading, error } = useQuery({
//     queryKey: ['tutors'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/tutors');
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500 py-10">
//         Error: {error.message}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
//         Meet Our Expert Tutors
//       </h2>
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {tutors.map((tutor) => (
//           <div
//             key={tutor._id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
//           >
//             <div className="relative">
//               <img
//                 src={tutor.photoURL || 'https://via.placeholder.com/400x250?text=No+Image'}
//                 alt={tutor.name}
//                 className="w-full h-56 object-cover"
//                 onError={(e) => (e.target.src = 'https://via.placeholder.com/400x250?text=No+Image')}
//               />
//               <div className="absolute top-4 right-4">
//                 <span
//                   className={`px-3 py-1 text-xs font-semibold rounded-full ${
//                     tutor.status === 'active'
//                       ? 'bg-green-100 text-green-700'
//                       : 'bg-yellow-100 text-yellow-700'
//                   }`}
//                 >
//                   {tutor.status.charAt(0).toUpperCase() + tutor.status.slice(1) || 'Active'}
//                 </span>
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               <h3 className="text-xl font-bold text-gray-800 truncate">{tutor.name}</h3>
//               <div className="space-y-2 text-sm text-gray-600">
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
//                   </svg>
//                   {tutor.educationalQualifications || 'Not provided'}
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Subjects: {tutor.subjects?.join(', ') || 'Not specified'}
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   Experience: {tutor.experience || 0} years
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Rate: ${tutor.hourlyRate?.toFixed(2) || 'N/A'}/hr
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
//                   </svg>
//                   Mode: {tutor.teachingMode || 'Not specified'}
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Availability: {tutor.availability?.join(', ') || 'Not specified'}
//                 </p>
//               </div>
//               <p className="text-sm text-gray-500 line-clamp-2">{tutor.bio || 'No bio available'}</p>
//               <Link
//                 to={`/tutor/${tutor._id}`}
//                 className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 View Profile
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tutors;



import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

// Skeleton loader
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-56 bg-gray-200"></div>
    <div className="p-6 space-y-2">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

const Tutors = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [editingTutor, setEditingTutor] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [tutorToDelete, setTutorToDelete] = useState(null);

  const userEmail = 'admin@example.com'; 

  const { data: tutors = [], isLoading, error } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => (await axiosSecure.get('/tutors')).data,
  });

  const { data: isAdmin = false } = useQuery({
    queryKey: ['isAdmin', userEmail],
    queryFn: async () => (await axiosSecure.get(`/users/admin/${userEmail}`)).data.admin,
  });

  const updateTutorMutation = useMutation({
    mutationFn: async (tutorData) =>
      (await axiosSecure.put(`/tutors/${tutorData._id}`, tutorData)).data,
    onSuccess: () => {
      queryClient.invalidateQueries(['tutors']);
      setEditingTutor(null);
    },
    onError: (error) => {
      console.error('Error updating tutor:', error);
      alert(`Failed to update tutor: ${error.response?.data?.message || error.message}`);
    },
  });

  const deleteTutorMutation = useMutation({
    mutationFn: async (tutorId) => (await axiosSecure.delete(`/tutors/${tutorId}`)).data,
    onSuccess: () => {
      queryClient.invalidateQueries(['tutors']);
      setIsDeleteConfirmOpen(false);
      setTutorToDelete(null);
    },
    onError: (error) => {
      console.error('Error deleting tutor:', error);
      alert(`Failed to delete tutor: ${error.response?.data?.message || error.message}`);
    },
  });

  const handleDelete = (tutor) => {
    setTutorToDelete(tutor);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteTutorMutation.mutate(tutorToDelete._id);
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Meet Our Expert Tutors
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
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Meet Our Expert Tutors</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            {/* <img
              src={tutor.photoURL || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={tutor.name || 'Tutor'}
              className="w-full h-56 object-cover"
              loading="lazy"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400x250?text=No+Image')}
            /> */}
            {/* <div className="p-6 space-y-2">
              <h3 className="text-xl font-bold">{tutor.name || 'Unnamed Tutor'}</h3>
              <p>Subjects: {tutor.subjects?.join(', ') || 'Not specified'}</p>
              <p>Experience: {tutor.experience || 0} years</p>
              <p>Rate: ${tutor.hourlyRate?.toFixed(2) || 'N/A'}/hr</p>
              <p>Mode: {tutor.teachingMode || 'Not specified'}</p>
              <p>
                Status:{' '}
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    tutor.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {tutor.status?.charAt(0).toUpperCase() + tutor.status?.slice(1) || 'Active'}
                </span>
              </p>
              <div className="flex space-x-2 mt-4">
                <Link
                  to={`/tutor/${tutor._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Details
                </Link>
                
                    <button
                      onClick={() => setEditingTutor(tutor)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tutor)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                 
              </div>
            </div> */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
  <div className="flex items-center space-x-4">
    <img
      src={tutor.photoURL}
      alt={tutor.name}
      className="w-24 h-24 rounded-full object-cover"
    />
    <div>
      <h3 className="text-2xl font-bold">{tutor.name}</h3>
      <p className="text-sm text-gray-600">{tutor.email}</p>
      <p className="text-sm text-gray-600">{tutor.contactNumber}</p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <p><strong>Gender:</strong> {tutor.gender}</p>
      <p><strong>Date of Birth:</strong> {tutor.dateOfBirth}</p>
      <p><strong>Experience:</strong> {tutor.experience} years</p>
      <p><strong>Hourly Rate:</strong> ${tutor.hourlyRate?.toFixed(2)}/hr</p>
      <p><strong>Teaching Mode:</strong> {tutor.teachingMode}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span className={`px-2 py-1 rounded-full text-xs ${
          tutor.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
        }`}>
          {tutor.status?.charAt(0).toUpperCase() + tutor.status?.slice(1)}
        </span>
      </p>
    </div>

    <div>
      <p><strong>Subjects:</strong> {tutor.subjects?.join(', ')}</p>
      <p><strong>Educational Qualifications:</strong> {tutor.educationalQualifications}</p>
      <p><strong>Certifications:</strong> {tutor.certifications?.join(', ')}</p>
      <p><strong>Institution:</strong> {tutor.institution}</p>
      <p><strong>Availability:</strong> {tutor.availability?.join(', ')}</p>
    </div>
  </div>

  <div className="border-t pt-4">
    <h4 className="font-semibold">Address</h4>
    <p><strong>City:</strong> {tutor.address?.city}</p>
    <p><strong>State:</strong> {tutor.address?.state}</p>
    <p><strong>Country:</strong> {tutor.address?.country}</p>
    <p><strong>Permanent Address:</strong> {tutor.address?.permanentAddress}</p>
    <p><strong>Postal Code:</strong> {tutor.address?.postalCode}</p>
  </div>

  <div className="border-t pt-4">
    <h4 className="font-semibold">Bio</h4>
    <p>{tutor.bio}</p>
  </div>
  <div className="flex space-x-2 mt-4">
                <Link
                  to={`/tutor/${tutor._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Details
                </Link>
                
                    <button
                      onClick={() => setEditingTutor(tutor)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tutor)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                 
              </div>
</div>

          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingTutor && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-4">Edit Tutor</h3>
            <Formik
              initialValues={{
                name: editingTutor.name || '',
                email: editingTutor.email || '',
                subjects: editingTutor.subjects?.join(', ') || '',
                educationalQualifications: editingTutor.educationalQualifications || '',
                experience: editingTutor.experience || 0,
                hourlyRate: editingTutor.hourlyRate || 0,
                teachingMode: editingTutor.teachingMode || '',
                availability: editingTutor.availability?.join(', ') || '',
                bio: editingTutor.bio || '',
                photoURL: editingTutor.photoURL || '',
                status: editingTutor.status || 'active',
                dateOfBirth: editingTutor.dateOfBirth || '',
                gender: editingTutor.gender || '',
                contactNumber: editingTutor.contactNumber || '',
                certifications: editingTutor.certifications?.join(', ') || '',
                institution: editingTutor.institution || '',
                address: {
                  city: editingTutor.address?.city || '',
                  state: editingTutor.address?.state || '',
                  country: editingTutor.address?.country || '',
                  permanentAddress: editingTutor.address?.permanentAddress || '',
                  postalCode: editingTutor.address?.postalCode || '',
                },
              }}
              onSubmit={(values) => {
                const tutorData = {
                  _id: editingTutor._id,
                  name: values.name,
                  email: values.email,
                  subjects: values.subjects.split(',').map(s => s.trim()),
                  educationalQualifications: values.educationalQualifications,
                  experience: parseInt(values.experience),
                  hourlyRate: parseFloat(values.hourlyRate),
                  teachingMode: values.teachingMode,
                  availability: values.availability.split(',').map(a => a.trim()),
                  bio: values.bio,
                  photoURL: values.photoURL,
                  status: values.status,
                  dateOfBirth: values.dateOfBirth,
                  gender: values.gender,
                  contactNumber: values.contactNumber,
                  certifications: values.certifications.split(',').map(c => c.trim()),
                  institution: values.institution,
                  address: values.address,
                };
                updateTutorMutation.mutate(tutorData);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field name="name" placeholder="Name" className="border p-2 rounded" />
                  <Field name="email" placeholder="Email" className="border p-2 rounded" />
                  <Field name="subjects" placeholder="Subjects" className="border p-2 rounded" />
                  <Field name="educationalQualifications" placeholder="Education" className="border p-2 rounded" />
                  <Field name="experience" placeholder="Experience" className="border p-2 rounded" />
                  <Field name="hourlyRate" placeholder="Hourly Rate" className="border p-2 rounded" />
                  <Field name="teachingMode" placeholder="Teaching Mode" className="border p-2 rounded" />
                  <Field name="availability" placeholder="Availability" className="border p-2 rounded" />
                  <Field name="bio" placeholder="Bio" className="border p-2 rounded" />
                  <Field name="photoURL" placeholder="Photo URL" className="border p-2 rounded" />
                  <Field name="status" placeholder="Status" className="border p-2 rounded" />
                  <Field name="dateOfBirth" placeholder="Date of Birth" className="border p-2 rounded" />
                  <Field name="gender" placeholder="Gender" className="border p-2 rounded" />
                  <Field name="contactNumber" placeholder="Contact Number" className="border p-2 rounded" />
                  <Field name="certifications" placeholder="Certifications" className="border p-2 rounded" />
                  <Field name="institution" placeholder="Institution" className="border p-2 rounded" />
                  <Field name="address.city" placeholder="City" className="border p-2 rounded" />
                  <Field name="address.state" placeholder="State" className="border p-2 rounded" />
                  <Field name="address.country" placeholder="Country" className="border p-2 rounded" />
                  <Field name="address.permanentAddress" placeholder="Permanent Address" className="border p-2 rounded" />
                  <Field name="address.postalCode" placeholder="Postal Code" className="border p-2 rounded" />
                  <div className="col-span-full flex justify-end gap-2 mt-4">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={isSubmitting}>
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingTutor(null)}
                      className="bg-gray-400 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">Are you sure you want to delete this tutor?</p>
            <div className="flex justify-center space-x-4">
              <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">
                Confirm
              </button>
              <button onClick={() => setIsDeleteConfirmOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutors;



