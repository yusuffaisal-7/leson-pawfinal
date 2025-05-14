import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const StudentProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    fullName: '',
    photoURL: user?.photoURL || '',
    email: user?.email || '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    institution: '',
    studentId: '',
    gradeYearOfStudy: '',
    permanentAddress: '',
    currentAddress: '',
    cityStateCountry: '',
    zipPostalCode: '',
    guardianName: '',
    guardianContactNumber: '',
    guardianEmail: '',
  });

  // Fetch student profile
  const {
    data: student,
    isLoading: studentLoading,
    error: studentError,
  } = useQuery({
    queryKey: ['studentProfile', user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      try {
        const res = await axiosSecure.get(`/students/${user.email}`);
        return res.data;
      } catch (error) {
        if (error.response?.status === 404) {
          console.log('No student profile found; initializing with user data.');
          return null;
        }
        throw error;
      }
    },
    enabled: !!user?.email,
  });

  // Initialize formData when student data is fetched
  useEffect(() => {
    if (student) {
      setFormData({
        fullName: student.fullName || '',
        photoURL: student.photoURL || user?.photoURL || '',
        email: user?.email || '',
        dateOfBirth: student.dateOfBirth || '',
        gender: student.gender || '',
        contactNumber: student.contactNumber || '',
        institution: student.institution || '',
        studentId: student.studentId || '',
        gradeYearOfStudy: student.gradeYearOfStudy || '',
        permanentAddress: student.permanentAddress || '',
        currentAddress: student.currentAddress || '',
        cityStateCountry: student.cityStateCountry || '',
        zipPostalCode: student.zipPostalCode || '',
        guardianName: student.guardianName || '',
        guardianContactNumber: student.guardianContactNumber || '',
        guardianEmail: student.guardianEmail || '',
      });
    }
  }, [student, user]);

  // Mutation for saving student profile
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosSecure.put(`/students/${user.email}`, formData);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['studentProfile', user?.email], data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile saved successfully!',
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: (err) => {
      console.error('Error saving student profile:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.response?.data?.message || 'Failed to save profile.',
      });
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['contactNumber', 'guardianContactNumber'].includes(name)) {
      if (!/^[0-9+\-\s]{0,15}$/.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'fullName',
      'dateOfBirth',
      'gender',
      'contactNumber',
      'institution',
      'studentId',
      'gradeYearOfStudy',
      'permanentAddress',
      'currentAddress',
      'cityStateCountry',
      'zipPostalCode',
      'guardianName',
      'guardianContactNumber',
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: `Please fill in: ${missingFields.join(', ')}`,
      });
      return;
    }

    const phoneRegex = /^[0-9+\-\s]{10,15}$/;
    if (!phoneRegex.test(formData.contactNumber) || !phoneRegex.test(formData.guardianContactNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Contact numbers must be 10-15 digits (including +, -, or spaces).',
      });
      return;
    }

    mutation.mutate(formData);
  };

  // Handle loading and error states
  if (studentLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user?.email) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error: Please log in to view your profile.
        <br />
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </p>
    );
  }

  if (studentError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error: {studentError?.response?.data?.message || 'Failed to load profile data.'}
        <br />
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student Profile</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="w-full border p-2 rounded disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Institution</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Grade/Year of Study</label>
          <input
            type="text"
            name="gradeYearOfStudy"
            value={formData.gradeYearOfStudy}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Permanent Address</label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Current Address</label>
          <input
            type="text"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">City/State/Country</label>
          <input
            type="text"
            name="cityStateCountry"
            value={formData.cityStateCountry}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">ZIP/Postal Code</label>
          <input
            type="text"
            name="zipPostalCode"
            value={formData.zipPostalCode}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Guardian Name</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Guardian Contact Number</label>
          <input
            type="text"
            name="guardianContactNumber"
            value={formData.guardianContactNumber}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Guardian Email</label>
          <input
            type="email"
            name="guardianEmail"
            value={formData.guardianEmail}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>

      {student && (
        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Current Profile</h3>
          {student.photoURL && (
            <img
              src={student.photoURL}
              alt="Student"
              className="w-32 h-32 rounded-full mb-4"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
          )}
          <ul className="mt-4 space-y-2">
            <li><strong>ID:</strong> {student._id || 'Not provided'}</li>
            <li><strong>Name:</strong> {student.fullName || 'Not provided'}</li>
            <li><strong>Email:</strong> {student.email || 'Not provided'}</li>
            <li>
              <strong>DOB:</strong>{' '}
              {student.dateOfBirth
                ? new Date(student.dateOfBirth).toLocaleDateString()
                : 'Not provided'}
            </li>
            <li><strong>Gender:</strong> {student.gender || 'Not provided'}</li>
            <li><strong>Contact:</strong> {student.contactNumber || 'Not provided'}</li>
            <li><strong>Institution:</strong> {student.institution || 'Not provided'}</li>
            <li><strong>Student ID:</strong> {student.studentId || 'Not provided'}</li>
            <li><strong>Grade/Year:</strong> {student.gradeYearOfStudy || 'Not provided'}</li>
            <li>
              <strong>Permanent Address:</strong> {student.permanentAddress || 'Not provided'}
            </li>
            <li><strong>Current Address:</strong> {student.currentAddress || 'Not provided'}</li>
            <li>
              <strong>City/State/Country:</strong> {student.cityStateCountry || 'Not provided'}
            </li>
            <li><strong>Zip Code:</strong> {student.zipPostalCode || 'Not provided'}</li>
            <li><strong>Guardian Name:</strong> {student.guardianName || 'Not provided'}</li>
            <li>
              <strong>Guardian Phone:</strong> {student.guardianContactNumber || 'Not provided'}
            </li>
            <li><strong>Guardian Email:</strong> {student.guardianEmail || 'Not provided'}</li>
            <li>
              <strong>Created At:</strong>{' '}
              {student.createdAt
                ? new Date(student.createdAt).toLocaleString()
                : 'Not provided'}
            </li>
            <li>
              <strong>Updated At:</strong>{' '}
              {student.updatedAt
                ? new Date(student.updatedAt).toLocaleString()
                : 'Not provided'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;