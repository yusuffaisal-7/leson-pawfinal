// import { useState, useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaPlusCircle } from "react-icons/fa";
// import { FaUser, FaTasks, FaHome, FaBars, FaTimes } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { FaChartBar } from "react-icons/fa";

// import { AuthContext } from "../providers/AuthProvider";
// import useAdmin from "../hooks/UseAdmin";
// import useTeacher from "./../hooks/UseTeacher";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [isTeacher] = useTeacher();
//   const [isAdmin] = useAdmin();
//   // const isAdmin = true;
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ${
//           sidebarOpen ? "left-0" : "-left-64"
//         } md:left-0 p-5 z-50`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold">Dashboard</h2>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="md:hidden text-xl"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <ul className="space-y-3">
//           {user && !isAdmin && !isTeacher && (
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/toristProfile"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   Manage Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/tutor"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   All the Tutors
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/tutor"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   TutorProfile
//                 </NavLink>
//               </li>
//             </>
//           )}

//           {/* teacher Routes */}
//           {isTeacher && user && (
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/guideProfile"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   Manage Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/tutor-jobs"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaBriefcase />
//                   Available Jobs
//                 </NavLink>
//               </li>
//             </>
//           )}

//           {isAdmin && user && (
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/manage-users"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaTasks />
//                   Manage Users
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/tutor"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   All the Tutors
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/adminHome"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaHome />
//                   Admin Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/add-tutor"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaHome />
//                   Add Tutor
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/tutor"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaUser />
//                   TutorProfile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manage-subjects"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaBook />
//                   Manage Subjects
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/teacher-verification"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaCheckCircle />
//                   Teacher Verifications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manage-locations"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaMapMarkerAlt />
//                   Manage Locations
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manage-payments"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaMoneyBillWave />
//                   Manage Payments
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/admin-analytics"
//                   className="flex items-center gap-2 hover:text-yellow-300"
//                 >
//                   <FaChartBar />
//                   Analytics
//                 </NavLink>
//               </li>
//             </>
//           )}

//           <li>
//             <NavLink
//               to="/dashboard/intro"
//               className="flex items-center gap-2 hover:text-yellow-300"
//             >
//               <FaPlusCircle />
//               Introduced to Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/notifications"
//               className="flex items-center gap-2 hover:text-yellow-300"
//             >
//               <FaBell />
//               Notifications
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="md:hidden fixed top-4 left-4 bg-primary text-white p-2 rounded-lg z-50"
//         >
//           <FaBars />
//         </button>

//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { FaUser, FaTasks, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/UseAdmin";
import useTeacher from "../hooks/UseTeacher";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isTeacher] = useTeacher();
  const [isAdmin] = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 bg-primary text-white p-2 rounded-lg z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ${
          sidebarOpen ? "left-0" : "-left-64"
        } md:left-0 p-5 z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-xl"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-3">
          {/* Student Routes */}
          {user && !isAdmin && !isTeacher && (
            <>
              <li>
                <NavLink
                  to="/dashboard/studentProfile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-bookings"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/joinTeacher"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> Join as a Teacher
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/tutors"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> All Tutors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/post-job"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaPlusCircle /> Post Job
                </NavLink>
              </li>
            </>
          )}

          {/* Teacher Routes */}
          {isTeacher && user && (
            <>
              <li>
                <NavLink
                  to="/dashboard/teacherProfile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> Manage Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-subjects"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaBook /> Manage Subjects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-locations"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaMapMarkerAlt /> Manage Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/tutor-jobs"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaBriefcase /> Available Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-services"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaEdit /> Manage Services
                </NavLink>
              </li>
            </>
          )}

          {/* Admin Routes */}
          {isAdmin && user && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manage-users"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaTasks /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/tutors"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUser /> All Tutors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/message"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaHome /> Show Messages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-tutor"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaUserPlus /> Add Tutor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/teacher-applications"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaCheckCircle /> Teacher Applications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-payments"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaMoneyBillWave /> Manage Payments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin-analytics"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaChartBar /> Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/students"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaBell />students
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-jobs"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-yellow-300 ${
                      isActive ? "text-yellow-300" : ""
                    }`
                  }
                >
                  <FaPlusCircle /> Show All Jobs
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-auto md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;