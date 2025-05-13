import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherHome = () => {
  const { user, loading } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!loading && user?.email) {
      axiosSecure
        .get(`/users/profile/${encodeURIComponent(user.email)}`)
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => {
          console.error("Failed to fetch profile:", error);
        });
    }
  }, [user, loading]);

  if (loading || !profile) {
    return <div className="text-center mt-10 text-lg font-medium">Loading profile...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={profile.photoURL || "https://i.ibb.co/0jqHpnp/default-user.png"}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-md"
        />
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome, {profile.name || "Teacher"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {profile.email}</p>
          <p className="text-gray-600 dark:text-gray-300"><strong>Role:</strong> {profile.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
