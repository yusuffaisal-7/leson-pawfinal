



import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa';
import { 
  FaUser,  FaTasks, FaHome, FaBars, FaTimes 
} from "react-icons/fa"; 

import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/UseAdmin";
import useTeacher from './../hooks/UseTeacher';

const Dashboard = () => {
  const { user } = useContext(AuthContext); 
  const [isTeacher] = useTeacher(); 
  const [isAdmin] = useAdmin(); 
  // const isAdmin = true; 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ${sidebarOpen ? "left-0" : "-left-64"} md:left-0 p-5 z-50`}>
        
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-xl">
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-3">
         
          {user && !isAdmin && !isTeacher && (
            <>
              <li>
                <NavLink to="/dashboard/toristProfile" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaUser />
                  Manage Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tutor" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaUser />
                  All the Tutors
                </NavLink>
              </li>
              
            
            </>
          )}

          {/* teacher Routes */}
          {isTeacher && user && (
            <>
              
              <li>
                <NavLink to="/dashboard/guideProfile" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaUser />
                  Manage Profile
                </NavLink>
              </li>
            </>
          )}

          {isAdmin && user && (
            <>
              <li>
                <NavLink to="/dashboard/manage-users" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaTasks />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tutor" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaUser />
                  All the Tutors
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminHome" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-tutor" className="flex items-center gap-2 hover:text-yellow-300">
                  <FaHome />
                  Add Tutor
                </NavLink>
              </li>
            </>
          )}

          
         
          <li>
            <NavLink to="/dashboard/intro" className="flex items-center gap-2 hover:text-yellow-300">
              <FaPlusCircle />
              Introduced to Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="flex-1 min-h-screen bg-gray-100 p-6 overflow-auto">
        
       
        <button onClick={() => setSidebarOpen(true)} className="md:hidden fixed top-4 left-4 bg-primary text-white p-2 rounded-lg z-50">
          <FaBars />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
