// import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../pages/Home/Home/Home";
// import Login from "../Login/Login";
// import SignUp from "../SignUp/SignUp";
// import Intro from "../pages/Dashboard/Intro/Intro";
// import TeacherHome from "./../pages/Dashboard/TeacherHome/TeacherHome";
// import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "../Layout/Dashboard";
// import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
// import AddTutor from "../pages/Dashboard/AddTutor/AddTutor";
// import Tutors from "../pages/Dashboard/Tutors/Tutors";
// import PostJob from "../pages/PostJob/PostJob";
// import LandingPage from "../pages/LandingPage/LandingPage";
// import ServiceListing from "../pages/ServiceListing/ServiceListing";
// import TutorProfile from "../pages/TutorProfile/TutorProfile";
// import Notifications from "../pages/Dashboard/Notification/Notification";
// import ManageSubjects from "../pages/Dashboard/ManageSubjects/ManageSubjects";
// import TeacherVerification from "../pages/Dashboard/TeacherVerification/TeacherVerification";
// import ManageLocations from "../pages/Dashboard/ManageLocation/ManageLocations";
// import ManagePayments from "../pages/Dashboard/ManagePayments/ManagePayments";
// import AdminAnalytics from "../pages/Dashboard/AdminAnalytics/AdminAnalytics";
// import PaymentForm from "../pages/Dashboard/PaymentForm/PaymentForm";
// import TutorRating from "../pages/Dashboard/TutorRating/TutorRating";
// import TutorJobApplications from "../pages/Dashboard/TutorJobApplications/TutorJobApplications";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/post-job",
//         element: <PostJob></PostJob>,
//       },
//       {
//         path: "/services",
//         element: <ServiceListing></ServiceListing>,
//       },
//       {
//         path: "login",
//         element: <Login></Login>,
//       },

//       {
//         path: "signup",
//         element: <SignUp></SignUp>,
//       },
//       {
//         path: "/landingPage",
//         element: <LandingPage></LandingPage>,
//       },
//     ],
//   },

//   {
//     path: "dashboard",
//     element: (
//       <PrivateRoute>
//         <Dashboard></Dashboard>
//       </PrivateRoute>
//     ),
//     children: [
//       // normal user routes

//       {
//         path: "intro",
//         element: <Intro></Intro>,
//       },
//       {
//         path: "tutor",
//         element: <Tutors></Tutors>,
//       },
//       {
//         path: "tutorProfile",
//         element: <TutorProfile></TutorProfile>,
//       },
//       {
//         path: "notifications",
//         element: <Notifications></Notifications>,
//       },
//       {
//         path: "manage-subjects",
//         element: <ManageSubjects></ManageSubjects>,
//       },
//       {
//         path: "teacher-verification",
//         element: <TeacherVerification></TeacherVerification>,
//       },
//       {
//         path: "manage-locations",
//         element: <ManageLocations></ManageLocations>,
//       },
//       {
//         path: "manage-payments",
//         element: <ManagePayments></ManagePayments>,
//       },
//       {
//         path: "admin-analytics",
//         element: <AdminAnalytics></AdminAnalytics>,
//       },

//       // To do

//       {
//         path: "payment/:jobId",
//         element: <PaymentForm></PaymentForm>,
//       },
//       {
//         path: "rate-tutor/:tutorId",
//         element:<TutorRating></TutorRating>,
//       },

//       // Teacher routes

//       {
//         path: "teacherHome",
//         element: <TeacherHome></TeacherHome>,
//       },
//       {
//         path: "tutor-jobs",
//         element: <TutorJobApplications></TutorJobApplications>,
//       },

//       // admin routes
//       {
//         path: "adminHome",
//         element: <AdminHome></AdminHome>,
//       },

//       {
//         path: "manage-users",
//         element: <ManageUsers></ManageUsers>,
//       },
//       {
//         path: "add-tutor",
//         element: <AddTutor></AddTutor>,
//       },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Intro from "../pages/Dashboard/Intro/Intro";
import TeacherHome from "../pages/Dashboard/TeacherHome/TeacherHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddTutor from "../pages/Dashboard/AddTutor/AddTutor";
import Tutors from "../pages/Dashboard/Tutors/Tutors";
import PostJob from "../pages/PostJob/PostJob";

import TutorProfile from "../pages/TutorProfile/TutorProfile";
import Notifications from "../pages/Dashboard/Notification/Notification";
import ManageSubjects from "../pages/Dashboard/ManageSubjects/ManageSubjects";
import TeacherVerification from "../pages/Dashboard/TeacherVerification/TeacherVerification";
import ManageLocations from "../pages/Dashboard/ManageLocation/ManageLocations";
import ManagePayments from "../pages/Dashboard/ManagePayments/ManagePayments";
import AdminAnalytics from "../pages/Dashboard/AdminAnalytics/AdminAnalytics";
import PaymentForm from "../pages/Dashboard/PaymentForm/PaymentForm";
import TutorRating from "../pages/Dashboard/TutorRating/TutorRating";
import TutorJobApplications from "../pages/Dashboard/TutorJobApplications/TutorJobApplications";
import ServiceListing from "../pages/ServiceListing/ServiceListing";
import ManageServices from "../pages/Dashboard/ManageServices/ManageServices";
import StudentProfile from "../pages/Dashboard/StudentProfile/StudentProfile";
import ServiceDetails from "../pages/Dashboard/ServiceDetails/ServiceDetails";
import TeacherDetails from "../pages/Home/Home/TeacherDetails";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import JoinTeacher from "../pages/Dashboard/JoinTeacher/JoinTeacher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/tutor/:tutorId",
        element: <TeacherDetails></TeacherDetails>,
      },
      {
        path: "toristProfile",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "/landingPage",
      //   element: <LandingPage></LandingPage>,
      // },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Normal user routes
      {
        path: "intro",
        element: <Intro></Intro>,
      },
      {
        path: "post-job",
        element: <PostJob></PostJob>,
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      {
        path: "tutor",
        element: <Tutors></Tutors>,
      },
      {
        path: "tutorProfile",
        element: <TutorProfile></TutorProfile>,
      },
      {
        path: "notifications",
        element: <Notifications></Notifications>,
      },
      {
        path: "manage-subjects",
        element: <ManageSubjects></ManageSubjects>,
      },
      {
        path: "teacherProfile",
        element: <TeacherHome></TeacherHome>,
      },
      {
        path: "teacher-verification",
        element: <TeacherVerification></TeacherVerification>,
      },
      {
        path: "manage-locations",
        element: <ManageLocations></ManageLocations>,
      },
      {
        path: "manage-payments",
        element: <ManagePayments></ManagePayments>,
      },
      {
        path: "admin-analytics",
        element: <AdminAnalytics></AdminAnalytics>,
      },
      // Payment and Rating routes
      {
        path: "payment/:jobId",
        element: <PaymentForm></PaymentForm>,
      },
      {
        path: "studentProfile",
        element: <StudentProfile></StudentProfile>,
      },

      {
        path: "rate-tutor/:tutorId",
        element: <TutorRating></TutorRating>,
      },
      // Teacher routes
      {
        path: "teacherHome",
        element: <TeacherHome></TeacherHome>,
      },
      {
        path: "tutor-jobs",
        element: <TutorJobApplications></TutorJobApplications>,
      },
      {
        path: "manage-services",
        element: <ManageServices></ManageServices>,
      },
      {
        path: "services",
        element: <ServiceListing></ServiceListing>,
      },

      // {
      //   path: "/services/:id",
      //   element: <ServiceDetails></ServiceDetails>,
      // },
      // Admin routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "add-tutor",
        element: <AddTutor></AddTutor>,
      },
      // Tutor public profile route (accessible to all)
      {
        path: "tutors/:email",
        element: <TutorProfile></TutorProfile>,
      },
       {
          path:'joinTeacher',
          element:<JoinTeacher></JoinTeacher>
        },
    ],
  },
]);
