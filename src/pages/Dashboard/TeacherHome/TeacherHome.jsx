// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const TeacherHome = () => {
//   const { user, loading } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {
//     if (!loading && user?.email) {
//       axiosSecure
//         .get(`/users/profile/${encodeURIComponent(user.email)}`)
//         .then((res) => {
//           setProfile(res.data);
//         })
//         .catch((error) => {
//           console.error("Failed to fetch profile:", error);
//         });
//     }
//   }, [user, loading]);

//   if (loading || !profile) {
//     return <div className="text-center mt-10 text-lg font-medium">Loading profile...</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         <img
//           src={profile.photoURL || "https://i.ibb.co/0jqHpnp/default-user.png"}
//           alt="Profile"
//           className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-md"
//         />
//         <div className="text-center md:text-left space-y-2">
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
//             Welcome, {profile.name || "Teacher"}
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {profile.email}</p>
//           <p className="text-gray-600 dark:text-gray-300"><strong>Role:</strong> {profile.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherHome;





import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherHome = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && user?.email) {
      axiosSecure.get('/tutors')
        .then(res => {
          const matchedTutor = res.data.find(tutor => tutor.email === user.email);
          setProfile(matchedTutor || null);
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Error fetching tutors:", err);
          setIsLoading(false);
        });
    }
  }, [loading, user, axiosSecure]);

  if (loading || isLoading) {
    return <div className="text-center mt-10 text-lg">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center mt-10 text-red-600">No tutor profile found for {user.email}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={profile.photoURL || "https://i.ibb.co/0jqHpnp/default-user.png"}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-md"
        />
        <div className="space-y-2 text-gray-700 dark:text-gray-200 w-full">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.name}</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Phone:</strong> {profile.contactNumber}</p>
          <p><strong>Institution:</strong> {profile.institution}</p>
          <p><strong>Subjects:</strong> {profile.subjects?.join(", ")}</p>
          <p><strong>Qualifications:</strong> {profile.educationalQualifications}</p>
          <p><strong>Experience:</strong> {profile.experience} years</p>
          <p><strong>Certifications:</strong> {profile.certifications?.join(", ")}</p>
          <p><strong>Teaching Mode:</strong> {profile.teachingMode}</p>
          <p><strong>Availability:</strong> {profile.availability?.join(", ")}</p>
          <p><strong>Hourly Rate:</strong> ${profile.hourlyRate}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <p><strong>Status:</strong> <span className="text-green-500 font-semibold">{profile.status}</span></p>

          <div className="mt-4">
            <h3 className="font-semibold text-lg">Address</h3>
            <p><strong>City:</strong> {profile.address?.city}</p>
            <p><strong>State:</strong> {profile.address?.state}</p>
            <p><strong>Country:</strong> {profile.address?.country}</p>
            <p><strong>Postal Code:</strong> {profile.address?.postalCode}</p>
            <p><strong>Permanent Address:</strong> {profile.address?.permanentAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
