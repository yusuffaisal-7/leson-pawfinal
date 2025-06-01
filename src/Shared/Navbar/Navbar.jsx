


// import React, { useContext, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import logo from "../../assets/Logo.png";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Logged Out",
//           text: "You have successfully logged out.",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Logout Failed",
//           text: "Something went wrong while logging out.",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   return (
//     <nav
//       style={{ backgroundColor: "#005482", width: "100vw", boxSizing: "border-box" }}
//       className="fixed top-0 left-0 z-50 shadow-md"
//     >
//       <div
//         className="flex justify-between items-center py-4 px-6 md:px-12 max-w-screen-xl mx-auto"
//         style={{ boxSizing: "border-box" }}
//       >
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="LesonPaw" className="h-12 w-auto object-contain" />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-white text-3xl select-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex gap-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#005482] md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${
//             menuOpen ? "block" : "hidden"
//           }`}
//           style={{ boxSizing: "border-box" }}
//         >
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-300 font-bold"
//                   : "text-white hover:text-yellow-300"
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </NavLink>
//           </li>
//           {user && (
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-300 font-bold"
//                     : "text-white hover:text-yellow-300"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//           )}
//         </ul>

//         {/* User Area */}
//         {user ? (
//           <div className="relative ml-4">
//             <div
//               className="flex items-center gap-2 cursor-pointer select-none"
//               onClick={toggleDropdown}
//             >
//               <img
//                 src={user.photoURL || "/default-profile.png"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border border-white"
//               />
//               <span className="text-sm font-medium text-white hidden md:block truncate max-w-[120px]">
//                 {user.displayName}
//               </span>
//             </div>

//             {/* Dropdown */}
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setDropdownOpen(false);
//                   }}
//                   className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="hidden md:flex gap-4">
//             <NavLink
//               to="/login"
//               className="px-4 py-2 bg-yellow-400 text-[#005482] rounded hover:bg-yellow-300"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/signup"
//               className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-50"
//             >
//               Register
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useContext, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import logo from "../../assets/Logo.png";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Logged Out",
//           text: "You have successfully logged out.",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Logout Failed",
//           text: "Something went wrong while logging out.",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   return (
//     <nav
//       style={{ backgroundColor: "var(--color-text-dark)", boxSizing: "border-box" }}
//       className="fixed top-0 left-0 right-0 z-50 shadow-md w-full"
//     >
//       <div
//         className="flex justify-between items-center py-2 px-4 md:px-8 w-full"
//         style={{ boxSizing: "border-box" }}
//       >
//         {/* Logo - Now links to home */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="LesonPaw" className="h-8 w-auto object-contain" />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-white text-3xl select-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex gap-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[var(--color-text-dark)] md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${
//             menuOpen ? "block" : "hidden"
//           }`}
//           style={{ boxSizing: "border-box" }}
//         >
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `text-white hover:text-[var(--color-hero)] transition-colors ${
//                   isActive ? "font-bold" : ""
//                 }`
//               }
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 `text-white hover:text-[var(--color-hero)] transition-colors ${
//                   isActive ? "font-bold" : ""
//                 }`
//               }
//             >
//               Blog
//             </NavLink>
//           </li>
//           {user && (
//             <li className="mb-4 md:mb-0">
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-300 font-bold block w-full"
//                     : "text-white hover:text-yellow-300 block w-full"
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//           )}
//         </ul>

//         {/* User Area */}
//         {user ? (
//           <div className="relative ml-4">
//             <div
//               className="flex items-center gap-2 cursor-pointer select-none"
//               onClick={toggleDropdown}
//             >
//               <img
//                 src={user.photoURL || "/default-profile.png"}
//                 alt="Profile"
//                 className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white"
//               />
//               <span className="text-sm font-medium text-white hidden md:block truncate max-w-[120px]">
//                 {user.displayName}
//               </span>
//             </div>

//             {/* Dropdown */}
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setDropdownOpen(false);
//                   }}
//                   className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="hidden md:flex gap-4">
//             <NavLink
//               to="/login"
//               className="px-4 py-2 bg-yellow-400 text-[#005482] rounded hover:bg-yellow-300 whitespace-nowrap"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/signup"
//               className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-50 whitespace-nowrap"
//             >
//               Register
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useContext, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import { useLanguage } from "../../providers/LanguageProvider";
// import logo from "../../assets/Logo.png";
// import { FaChevronDown, FaGraduationCap, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const { currentLanguage, setCurrentLanguage, translate, languages } = useLanguage();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [resourcesOpen, setResourcesOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleResources = () => setResourcesOpen(!resourcesOpen);
//   const toggleLanguage = () => setLanguageOpen(!languageOpen);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Logged Out",
//           text: "You have successfully logged out.",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Logout Failed",
//           text: "Something went wrong while logging out.",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#005482] shadow-lg">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 w-full">
//           {/* Left Side - Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center">
//               <img src={logo} alt="LesonPaw" className="h-10 w-auto" />
//             </Link>
//           </div>

//           {/* Center - Navigation Links */}
//           <div className="hidden md:flex items-center justify-center flex-1 mx-8">
//             <div className="flex items-center space-x-8">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `text-white hover:text-[#FCBB45] transition-colors ${
//                     isActive ? "font-bold" : ""
//                   }`
//                 }
//               >
//                 {translate('home')}
//               </NavLink>

//               {/* Resources Dropdown */}
//               <div className="relative group">
//                 <button
//                   onClick={toggleResources}
//                   className="flex items-center text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
//                 >
//                   <span>{translate('resources')}</span>
//                   <FaChevronDown className="ml-1 h-4 w-4" />
//                 </button>

//                 <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
//                   resourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//                 }`}>
//                   <div className="py-1" role="menu">
//                     <Link
//                       to="/find-teacher"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       <FaGraduationCap className="mr-2" />
//                       {translate('findTeacher')}
//                     </Link>
//                     <Link
//                       to="/become-teacher"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                     >
//                       <FaChalkboardTeacher className="mr-2" />
//                       {translate('becomeTeacher')}
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `text-white hover:text-[#FCBB45] transition-colors ${
//                     isActive ? "font-bold" : ""
//                   }`
//                 }
//               >
//                 {translate('about')}
//               </NavLink>

//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) =>
//                   `text-white hover:text-[#FCBB45] transition-colors ${
//                     isActive ? "font-bold" : ""
//                   }`
//                 }
//               >
//                 {translate('blog')}
//               </NavLink>

//               {user && (
//                 <NavLink
//                   to="/dashboard"
//                   className={({ isActive }) =>
//                     `text-white hover:text-[#FCBB45] transition-colors ${
//                       isActive ? "font-bold" : ""
//                     }`
//                   }
//                 >
//                   {translate('dashboard')}
//                 </NavLink>
//               )}
//             </div>
//           </div>

//           {/* Right Side - User Menu & Mobile Toggle */}
//           <div className="flex items-center justify-end space-x-4">
//             {/* Language Selector */}
//             <div className="relative">
//               <button
//                 onClick={toggleLanguage}
//                 className="flex items-center space-x-2 text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
//               >
//                 <FaGlobe className="h-5 w-5" />
//                 <span>{languages[currentLanguage].flag}</span>
//                 <FaChevronDown className="h-4 w-4" />
//               </button>

//               {languageOpen && (
//                 <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                   <div className="py-1" role="menu">
//                     {Object.entries(languages).map(([code, lang]) => (
//                       <button
//                         key={code}
//                         onClick={() => {
//                           setCurrentLanguage(code);
//                           setLanguageOpen(false);
//                         }}
//                         className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
//                           currentLanguage === code ? 'bg-gray-100' : ''
//                         }`}
//                       >
//                         <span className="mr-2">{lang.flag}</span>
//                         <span>{lang.name}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FCBB45] focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {menuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>

//             {/* Desktop User Menu */}
//             <div className="hidden md:flex items-center">
//               {user ? (
//                 <div className="relative">
//                   <button
//                     onClick={toggleDropdown}
//                     className="flex items-center space-x-2 text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
//                   >
//                     <img
//                       src={user.photoURL || "/default-profile.png"}
//                       alt="Profile"
//                       className="w-8 h-8 rounded-full border-2 border-[#FCBB45]"
//                     />
//                     <span className="font-medium">{user.displayName}</span>
//                     <FaChevronDown className="h-4 w-4" />
//                   </button>

//                   {dropdownOpen && (
//                     <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                       <div className="py-1">
//                         <button
//                           onClick={() => {
//                             handleLogout();
//                             setDropdownOpen(false);
//                           }}
//                           className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
//                         >
//                           {translate('logout')}
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex items-center space-x-4">
//                   <NavLink
//                     to="/login"
//                     className="px-4 py-2 text-white hover:text-[#FCBB45] transition-colors"
//                   >
//                     {translate('login')}
//                   </NavLink>
//                   <NavLink
//                     to="/signup"
//                     className="px-4 py-2 bg-[#DA3A60] text-white rounded-md hover:bg-[#DA3A60]/90 transition-colors"
//                   >
//                     {translate('signup')}
//                   </NavLink>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
//                   isActive ? "font-bold" : ""
//                 }`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               {translate('home')}
//             </NavLink>

//             <div className="relative">
//               <button
//                 onClick={toggleResources}
//                 className="flex items-center w-full px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
//               >
//                 <span>{translate('resources')}</span>
//                 <FaChevronDown className="ml-1 h-4 w-4" />
//               </button>

//               {resourcesOpen && (
//                 <div className="pl-4 space-y-1">
//                   <Link
//                     to="/find-teacher"
//                     className="block px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {translate('findTeacher')}
//                   </Link>
//                   <Link
//                     to="/become-teacher"
//                     className="block px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {translate('becomeTeacher')}
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
//                   isActive ? "font-bold" : ""
//                 }`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               {translate('about')}
//             </NavLink>

//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
//                   isActive ? "font-bold" : ""
//                 }`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               {translate('blog')}
//             </NavLink>

//             {user && (
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
//                     isActive ? "font-bold" : ""
//                   }`
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {translate('dashboard')}
//               </NavLink>
//             )}

//             {!user && (
//               <div className="pt-4 pb-3 border-t border-gray-700">
//                 <NavLink
//                   to="/login"
//                   className="block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {translate('login')}
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   className="block px-3 py-2 rounded-md bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition-colors mt-2"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {translate('signup')}
//                 </NavLink>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLanguage } from "../../providers/LanguageProvider";
import { useQuery } from "@tanstack/react-query";

import logo from "../../assets/Logo.png";
import { FaChevronDown, FaGraduationCap, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { currentLanguage, setCurrentLanguage, translate, languages } = useLanguage();
  const axiosSecure = useAxiosSecure(); // Initialize axiosSecure
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  // Fetch students data using useQuery
  const { data: students = [], isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get('/students');
        return response.data;
      } catch (err) {
        console.error('Error fetching students:', err);
        throw err;
      }
    },
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);
  const toggleLanguage = () => setLanguageOpen(!languageOpen);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error("Logout error:", error);
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong while logging out.",
          confirmButtonText: "Try Again",
        });
      });
  };

  // Find the student matching the logged-in user's email
  const matchedStudent = user ? students.find(student => student.email === user.email) : null;
  const profileImage = matchedStudent?.photoURL || user?.photoURL || "/default-profile.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#005482] shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="LesonPaw" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-[#FCBB45] transition-colors ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {translate('home')}
              </NavLink>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  onClick={toggleResources}
                  className="flex items-center text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
                >
                  <span>{translate('resources')}</span>
                  <FaChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  resourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="py-1" role="menu">
                    <Link
                      to="/find-teacher"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FaGraduationCap className="mr-2" />
                      {translate('findTeacher')}
                    </Link>
                    <Link
                      to="/become-teacher"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FaChalkboardTeacher className="mr-2" />
                      {translate('becomeTeacher')}
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white hover:text-[#FCBB45] transition-colors ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {translate('about')}
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-white hover:text-[#FCBB45] transition-colors ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {translate('blog')}
              </NavLink>

              {user && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-white hover:text-[#FCBB45] transition-colors ${
                      isActive ? "font-bold" : ""
                    }`
                  }
                >
                  {translate('dashboard')}
                </NavLink>
              )}
            </div>
          </div>

          {/* Right Side - User Menu & Mobile Toggle */}
          <div className="flex items-center justify-end space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
              >
                <FaGlobe className="h-5 w-5" />
                <span>{languages[currentLanguage].flag}</span>
                <FaChevronDown className="h-4 w-4" />
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrentLanguage(code);
                          setLanguageOpen(false);
                        }}
                        className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                          currentLanguage === code ? 'bg-gray-100' : ''
                        }`}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FCBB45] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center">
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 text-white hover:text-[#FCBB45] transition-colors focus:outline-none"
                  >
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-[#FCBB45]"
                    />
                    <span className="font-medium">{user.displayName}</span>
                    <FaChevronDown className="h-4 w-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            handleLogout();
                            setDropdownOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                        >
                          {translate('logout')}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <NavLink
                    to="/login"
                    className="px-4 py-2 text-white hover:text-[#FCBB45] transition-colors"
                  >
                    {translate('login')}
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="px-4 py-2 bg-[#DA3A60] text-white rounded-md hover:bg-[#DA3A60]/90 transition-colors"
                  >
                    {translate('signup')}
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
                  isActive ? "font-bold" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {translate('home')}
            </NavLink>

            <div className="relative">
              <button
                onClick={toggleResources}
                className="flex items-center w-full px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
              >
                <span>{translate('resources')}</span>
                <FaChevronDown className="ml-1 h-4 w-4" />
              </button>

              {resourcesOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/find-teacher"
                    className="block px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {translate('findTeacher')}
                  </Link>
                  <Link
                    to="/become-teacher"
                    className="block px-3 py-2 text-white hover:text-[#FCBB45] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {translate('becomeTeacher')}
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
                  isActive ? "font-bold" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {translate('about')}
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
                  isActive ? "font-bold" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {translate('blog')}
            </NavLink>

            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors ${
                    isActive ? "font-bold" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {translate('dashboard')}
              </NavLink>
            )}

            {!user && (
              <div className="pt-4 pb-3 border-t border-gray-700">
                <NavLink
                  to="/login"
                  className="block px-3 py-2 rounded-md text-white hover:text-[#FCBB45] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {translate('login')}
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 rounded-md bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition-colors mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {translate('signup')}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;