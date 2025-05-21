


// import React, { useContext, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import logo from "../../assets/Logo.png"; // Adjust the path to your logo image

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
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
//         {/* Logo and Brand Name */}
//        <Link to="/" className="flex items-center">
//   <img
//     src={logo}
//     alt="LesonPaw"
//     className="h-12 w-auto object-contain"
//   />
// </Link>


//         {/* Mobile Menu Toggle */}
//         <button className="md:hidden text-indigo-700 text-2xl" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex gap-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-indigo-500"
//               }
//             >
//               Home
//             </NavLink>
//           </li>
          
//           {/* <li>
//             <NavLink
//               to="/post-job"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-indigo-500"
//               }
//             >
//               Post Job
//             </NavLink>
//           </li> */}
//           {user && (
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) =>
//                   isActive ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-indigo-500"
//                 }
//               >
//                 Dashboard
//               </NavLink>
//             </li>
//           )}
//         </ul>

//         {/* User Area */}
//         {user ? (
//           <div className="relative ml-4">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
//               <img
//                 src={user.photoURL || "/default-profile.png"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border"
//               />
//               <span className="text-sm font-medium text-gray-700 hidden md:block">
//                 {user.displayName}
//               </span>
//             </div>

//             {/* Dropdown */}
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg">
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setDropdownOpen(false);
//                   }}
//                   className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="hidden md:flex gap-3">
//             <NavLink
//               to="/login"
//               className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/signup"
//               className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
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


import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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

  return (
    <nav
      style={{ backgroundColor: "#005482", width: "100vw", boxSizing: "border-box" }}
      className="fixed top-0 left-0 z-50 shadow-md"
    >
      <div
        className="flex justify-between items-center py-4 px-6 md:px-12 max-w-screen-xl mx-auto"
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LesonPaw" className="h-12 w-auto object-contain" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-3xl select-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#005482] md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
          style={{ boxSizing: "border-box" }}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "text-white hover:text-yellow-300"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "text-white hover:text-yellow-300"
                }
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* User Area */}
        {user ? (
          <div className="relative ml-4">
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={toggleDropdown}
            >
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-white"
              />
              <span className="text-sm font-medium text-white hidden md:block truncate max-w-[120px]">
                {user.displayName}
              </span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
                <button
                  onClick={() => {
                    handleLogout();
                    setDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex gap-4">
            <NavLink
              to="/login"
              className="px-4 py-2 bg-yellow-400 text-[#005482] rounded hover:bg-yellow-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-50"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
