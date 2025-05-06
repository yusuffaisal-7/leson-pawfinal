import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Intro from "../pages/Dashboard/Intro/Intro";
import TeacherHome from './../pages/Dashboard/TeacherHome/TeacherHome';
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddTutor from "../pages/Dashboard/AddTutor/AddTutor";
import Tutors from "../pages/Dashboard/Tutors/Tutors";
import PostJob from "../pages/PostJob/PostJob";
// import AdminRoute from "./AdminRoute";



export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/post-job",
          element: <PostJob></PostJob>
      },
        {
            path:'login',
            element: <Login></Login>
          },
          {
            path:'signup',
            element: <SignUp></SignUp>
          },
        
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        
        {
          path: 'intro',
          element:<Intro></Intro>,
        },
        {
          path: 'tutor',
          element:<Tutors></Tutors>,
        },
        
        // Teacher routes
       
        {
          path:'teacherHome',
          element:<TeacherHome></TeacherHome>
        },

        // admin routes
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },

        {
          path: 'manage-users',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'add-tutor',
          element: <AddTutor></AddTutor>
        },

       
      ]

    }
  ]);