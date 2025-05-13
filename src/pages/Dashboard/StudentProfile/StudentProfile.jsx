
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



// Utility to sanitize tutor data (fix typos and inconsistencies)
const sanitizeTutorData = (tutor) => ({
  ...tutor,
  institution: tutor.institution?.replace('Technoloy', 'Technology') || 'Not provided',
  address: tutor.address
    ? {
        ...tutor.address,
        city: tutor.address.city?.replace('CHittogong', 'Chittagong') || '',
        state: tutor.address.state?.replace('CHittogong', 'Chittagong') || '',
        permanentAddress: tutor.address.permanentAddress?.replace('CHittogong', 'Chittagong') || '',
        country: tutor.address.country || '',
      }
    : null,
  certifications: tutor.certifications?.map((cert) => cert.replace('TESlON', 'TESOL')) || [],
  educationalQualifications: tutor.educationalQualifications?.replace('Mathmatics', 'Mathematics') || 'Not provided',
});

// Utility to display values consistently
const displayValue = (value, defaultText = 'Not provided') =>
  value && value !== '' ? value : defaultText;

const TeacherHome = () => {
  const { user } = useContext(AuthContext);
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const axiosSecure = useAxiosSecure();
  useEffect(() => {
    let isMounted = true;
    const source = axiosSecure.CancelToken.source();

    const fetchTutorProfile = async () => {
      if (!user || !user.email) {
        setError('Please log in to view your profile');
        setLoading(false);
        return;
      }

      try {
        const res = await axiosSecure.get(`/tutors/${user.email}`, {
          cancelToken: source.token,
        });

        if (isMounted) {
          setTutor(sanitizeTutorData(res.data));
          setLoading(false);
        }
      } catch (err) {
        if (axiosSecure.isCancel(err)) return;
        if (isMounted) {
          setError(err.response?.data?.message || err.message || 'Failed to fetch profile');
          setLoading(false);
        }
      }
    };

    fetchTutorProfile();

    return () => {
      isMounted = false;
      source.cancel('Request canceled due to component unmount or user change');
    };
  }, [user]);

  if (!user) {
    return <div className="text-center text-red-500 mt-10">Please log in to view your profile</div>;
  }

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  if (!tutor) {
    return <div className="text-center mt-10">No profile found</div>;
  }

  return (
    <div className="teacher-home max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Tutor Profile</h2>
      <div className="profile-details space-y-4">
        {tutor.photoURL && (
          <img
            src={tutor.photoURL}
            alt={tutor.name ? `${tutor.name}'s profile photo` : 'Tutor profile photo'}
            className="profile-photo mx-auto"
            style={{ maxWidth: '150px', borderRadius: '50%' }}
          />
        )}
        <p><strong>Name:</strong> {displayValue(tutor.name)}</p>
        <p><strong>Email:</strong> {displayValue(tutor.email)}</p>
        <p>
          <strong>Date of Birth:</strong>{' '}
          {tutor.dateOfBirth ? new Date(tutor.dateOfBirth).toLocaleDateString() : 'Not provided'}
        </p>
        <p><strong>Gender:</strong> {displayValue(tutor.gender)}</p>
        <p><strong>Contact Number:</strong> {displayValue(tutor.contactNumber)}</p>
        <p>
          <strong>Subjects:</strong>{' '}
          {tutor.subjects?.length > 0 ? tutor.subjects.join(', ') : 'None'}
        </p>
        <p>
          <strong>Educational Qualifications:</strong>{' '}
          {displayValue(tutor.educationalQualifications)}
        </p>
        <p>
          <strong>Experience:</strong>{' '}
          {tutor.experience ? `${tutor.experience} years` : 'Not provided'}
        </p>
        <p>
          <strong>Certifications:</strong>{' '}
          {tutor.certifications?.length > 0 ? tutor.certifications.join(', ') : 'None'}
        </p>
        <p><strong>Institution:</strong> {displayValue(tutor.institution)}</p>
        <p><strong>Teaching Mode:</strong> {displayValue(tutor.teachingMode)}</p>
        <p>
          <strong>Availability:</strong>{' '}
          {tutor.availability?.length > 0 ? tutor.availability.join(', ') : 'Not provided'}
        </p>
        <p>
          <strong>Hourly Rate:</strong> ${displayValue(tutor.hourlyRate, 'Not provided')}
        </p>
        <p>
          <strong>Address:</strong>{' '}
          {tutor.address
            ? [tutor.address.permanentAddress, tutor.address.city, tutor.address.country]
                .filter(Boolean)
                .join(', ') || 'Not provided'
            : 'Not provided'}
        </p>
        <p><strong>Bio:</strong> {displayValue(tutor.bio, 'No bio available')}</p>
        {tutor.videoURL && /^https?:\/\//.test(tutor.videoURL) && (
          <p>
            <strong>Video Introduction:</strong>{' '}
            <a
              href={tutor.videoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch Video
            </a>
          </p>
        )}
        <p><strong>Status:</strong> {displayValue(tutor.status)}</p>
      </div>
    </div>
  );
};

export default TeacherHome;