
// import Lottie from 'lottie-react';
// import React, { useEffect, useState, useRef, useContext } from 'react';
// // import registerLottieData from '../../../';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../providers/AuthProvider';
// import SocialLogin from '../components/SocialLogin';
// import bgImage from "../assets/Video.webm";


// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, []);

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then((result) => {
//                 Swal.fire({
//                     title: 'User Login Successful!',
//                     icon: 'success',
//                     showClass: { popup: 'animate__animated animate__fadeInDown' },
//                     hideClass: { popup: 'animate__animated animate__fadeOutUp' },
//                 });
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Login Failed',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                 });
//             });
//     };

//     const handleValidateCaptcha = (e) => {
//         if (validateCaptcha(e.target.value)) {
//             setDisabled(false);
//         } else {
//             setDisabled(true);
//         }
//     };

    

//     return (
      
//         <div className="hero min-h-screen card bg-base-100 shadow-2xl card-body flex flex-col items-center">

    
        
//         <div className="hero-content flex-col md:flex-row-reverse w-full max-w-4xl">
//             <div className="text-center md:w-1/2 lg:text-left">
//                 {/* <Lottie animationData={registerLottieData} /> */}
//             </div>
//             <div className="md:w-1/2 max-w-sm">
//                 <form onSubmit={handleLogin}>
//                     <div className="form-control">
//                         <label className="label"><span className="label-text">Email</span></label>
//                         <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label"><span className="label-text">Password</span></label>
//                         <input ref={passwordRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
//                         <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?</a></label>
//                     </div>
//                     <div className="form-control">
//                         <label className="label"><LoadCanvasTemplate /></label>
//                         <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" required />
//                         <button className="btn btn-outline btn-xs mt-3">Validate</button>
//                     </div>
//                     <div className="form-control mt-6">
//                         <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
//                     </div>
//                 </form>
//                 <p className="py-4 text-3xl">
//                     <small>New here? <Link className='text-pink-700' to="/signup">Create an account</Link></small>
//                 </p>
//                 <SocialLogin />
//             </div>
//         </div>
//     </div>
     
      
//     );
// };

// export default Login;



// import Lottie from 'lottie-react';
// import React, { useEffect, useState, useRef, useContext } from 'react';
// // import registerLottieData from '../../../';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";
// import { AuthContext } from '../providers/AuthProvider';
// import SocialLogin from '../components/SocialLogin';
// import bgImage from "../assets/Video.webm";

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, []);

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then((result) => {
//                 Swal.fire({
//                     title: 'User Login Successful!',
//                     icon: 'success',
//                     showClass: { popup: 'animate__animated animate__fadeInDown' },
//                     hideClass: { popup: 'animate__animated animate__fadeOutUp' },
//                 });
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Login Failed',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                 });
//             });
//     };

//     const handleValidateCaptcha = (e) => {
//         if (validateCaptcha(e.target.value)) {
//             setDisabled(false);
//         } else {
//             setDisabled(true);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
//             {/* Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//                 src={bgImage}
//             />

//             {/* Overlay and Decorative Circles */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
//             <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

//             {/* Main Container */}
//             <div className="relative z-10 container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-gradient-to-br from-blue-800/50 to-teal-700/50 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
//                 {/* Left Section */}
//                 <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-teal-600/30 to-transparent">
//                     <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 drop-shadow-lg">
//                         Welcome Back!
//                     </h2>
//                     <p className="text-sm text-white/70 mt-4">
//                         Sign in to continue your journey.
//                     </p>
//                     {/* Uncomment if you have Lottie animation */}
//                     {/* <Lottie animationData={registerLottieData} className="w-full max-w-xs md:max-w-sm h-auto" /> */}
//                 </div>

//                 {/* Right Section - Form */}
//                 <div className="w-full md:w-1/2 p-6 md:p-8">
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Email</label>
//                             <input
//                                 ref={emailRef}
//                                 type="email"
//                                 name="email"
//                                 placeholder="email"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Password</label>
//                             <input
//                                 ref={passwordRef}
//                                 type="password"
//                                 name="password"
//                                 placeholder="password"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <p className="text-right text-sm text-teal-200 hover:underline cursor-pointer mt-2">
//                                 <a href="#">Forgot password?</a>
//                             </p>
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">
//                                 <LoadCanvasTemplate />
//                             </label>
//                             <input
//                                 onBlur={handleValidateCaptcha}
//                                 type="text"
//                                 name="captcha"
//                                 placeholder="Type the text above"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 className="btn btn-outline btn-xs mt-3 text-teal-200 border-teal-200 hover:bg-teal-500 hover:border-teal-500"
//                             >
//                                 Validate
//                             </button>
//                         </div>
//                         <div className="form-control mt-6">
//                             <input
//                                 disabled={disabled}
//                                 className={`btn w-full text-white border-none ${
//                                     disabled
//                                         ? "bg-gray-400 cursor-not-allowed"
//                                         : "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
//                                 }`}
//                                 type="submit"
//                                 value="Login"
//                             />
//                         </div>
//                     </form>
//                     <p className="py-4 text-white/80 text-center">
//                         <small>
//                             New here?{" "}
//                             <Link className="text-teal-300 underline" to="/signup">
//                                 Create an account
//                             </Link>
//                         </small>
//                     </p>
//                     <SocialLogin />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import Lottie from 'lottie-react';
// import React, { useEffect, useState, useRef, useContext } from 'react';

// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";
// import { AuthContext } from '../providers/AuthProvider';
// import SocialLogin from '../components/SocialLogin';
// import bgImage from "../assets/Video.webm";

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const { signIn , resetPassword} = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, []);

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then((result) => {
//                 Swal.fire({
//                     title: 'User Login Successful!',
//                     icon: 'success',
//                     showClass: { popup: 'animate__animated animate__fadeInDown' },
//                     hideClass: { popup: 'animate__animated animate__fadeOutUp' },
//                 });
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Login Failed',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                 });
//             });
//     };

//     const handleValidateCaptcha = (e) => {
//         if (validateCaptcha(e.target.value)) {
//             setDisabled(false);
//         } else {
//             setDisabled(true);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
//             {/* Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//                 src={bgImage}
//             />

//             {/* Overlay and Decorative Circles */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
//             <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

//             {/* Main Container */}
//             <div className="relative z-10 container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-gradient-to-br from-blue-800/50 to-teal-700/50 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
//                 {/* Left Section */}
//                 <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-teal-600/30 to-transparent">
//                     <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 drop-shadow-lg">
//                         Welcome Back!
//                     </h2>
//                     <p className="text-sm text-white/70 mt-4">
//                         Sign in to continue your journey.
//                     </p>
//                     {/* Uncomment if you have Lottie animation */}
//                     {/* <Lottie animationData={registerLottieData} className="w-full max-w-xs md:max-w-sm h-auto" /> */}
//                 </div>

//                 {/* Right Section - Form */}
//                 <div className="w-full md:w-1/2 p-6 md:p-8">
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Email</label>
//                             <input
//                                 ref={emailRef}
//                                 type="email"
//                                 name="email"
//                                 placeholder="email"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Password</label>
//                             <input
//                                 ref={passwordRef}
//                                 type="password"
//                                 name="password"
//                                 placeholder="password"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <p className="text-right text-sm text-teal-200 hover:underline cursor-pointer mt-2">
//                                 <a href="#">Forgot password?</a>
//                             </p>
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">
//                                 <LoadCanvasTemplate />
//                             </label>
//                             <input
//                                 onBlur={handleValidateCaptcha}
//                                 type="text"
//                                 name="captcha"
//                                 placeholder="Type the text above"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 className="btn btn-outline btn-xs mt-3 text-teal-200 border-teal-200 hover:bg-teal-500 hover:border-teal-500"
//                             >
//                                 Validate
//                             </button>
//                         </div>
//                         <div className="form-control mt-6">
//                             <input
//                                 disabled={disabled}
//                                 className={`btn w-full text-white border-none ${
//                                     disabled
//                                         ? "bg-gray-400 cursor-not-allowed"
//                                         : "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
//                                 }`}
//                                 type="submit"
//                                 value="Login"
//                             />
//                         </div>
//                     </form>
//                     <p className="py-4 text-white/80 text-center">
//                         <small>
//                             New here?{" "}
//                             <Link className="text-teal-300 underline" to="/signup">
//                                 Create an account
//                             </Link>
//                         </small>
//                     </p>
//                     <SocialLogin />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




// import Lottie from 'lottie-react';
// import React, { useEffect, useState, useRef, useContext } from 'react';

// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";
// import { AuthContext } from '../providers/AuthProvider';
// import SocialLogin from '../components/SocialLogin';
// import bgImage from "../assets/Video.webm";

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
//     const { signIn, resetPassword } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, []);

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then((result) => {
//                 Swal.fire({
//                     title: 'User Login Successful!',
//                     icon: 'success',
//                     showClass: { popup: 'animate__animated animate__fadeInDown' },
//                     hideClass: { popup: 'animate__animated animate__fadeOutUp' },
//                 });
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Login Failed',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again',
//                 });
//             });
//     };

//     const handleValidateCaptcha = (e) => {
//         if (validateCaptcha(e.target.value)) {
//             setDisabled(false);
//         } else {
//             setDisabled(true);
//         }
//     };

//     const handleForgotPassword = () => {
//         const email = emailRef.current?.value;
//         if (!email) {
//             return Swal.fire({
//                 icon: "warning",
//                 title: "Email Required",
//                 text: "Please enter your email address to reset your password.",
//             });
//         }

//         resetPassword(email)
//             .then(() => {
//                 Swal.fire({
//                     icon: "success",
//                     title: "Password Reset Email Sent",
//                     text: "Check your email for instructions to reset your password.",
//                 });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Reset Failed",
//                     text: error.message,
//                 });
//             });
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
//             {/* Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//                 src={bgImage}
//             />

//             {/* Overlay and Decorative Circles */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
//             <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

//             {/* Main Container */}
//             <div className="relative z-10 container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-gradient-to-br from-blue-800/50 to-teal-700/50 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
//                 {/* Left Section */}
//                 <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-teal-600/30 to-transparent">
//                     <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 drop-shadow-lg">
//                         Welcome Back!
//                     </h2>
//                     <p className="text-sm text-white/70 mt-4">
//                         Sign in to continue your journey.
//                     </p>
//                 </div>

//                 {/* Right Section - Form */}
//                 <div className="w-full md:w-1/2 p-6 md:p-8">
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Email</label>
//                             <input
//                                 ref={emailRef}
//                                 type="email"
//                                 name="email"
//                                 placeholder="email"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">Password</label>
//                             <input
//                                 ref={passwordRef}
//                                 type="password"
//                                 name="password"
//                                 placeholder="password"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <p className="text-right text-sm text-teal-200 hover:underline cursor-pointer mt-2">
//                                 <button
//                                     type="button"
//                                     onClick={handleForgotPassword}
//                                     className="hover:underline cursor-pointer bg-transparent border-0 p-0 text-teal-200"
//                                 >
//                                     Forgot password?
//                                 </button>
//                             </p>
//                         </div>
//                         <div className="form-control">
//                             <label className="block mb-2 text-white/90">
//                                 <LoadCanvasTemplate />
//                             </label>
//                             <input
//                                 onBlur={handleValidateCaptcha}
//                                 type="text"
//                                 name="captcha"
//                                 placeholder="Type the text above"
//                                 className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
//                                 required
//                             />
//                             <button
//                                 type="button"
//                                 className="btn btn-outline btn-xs mt-3 text-teal-200 border-teal-200 hover:bg-teal-500 hover:border-teal-500"
//                             >
//                                 Validate
//                             </button>
//                         </div>
//                         <div className="form-control mt-6">
//                             <input
//                                 disabled={disabled}
//                                 className={`btn w-full text-white border-none ${
//                                     disabled
//                                         ? "bg-gray-400 cursor-not-allowed"
//                                         : "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
//                                 }`}
//                                 type="submit"
//                                 value="Login"
//                             />
//                         </div>
//                     </form>
//                     <p className="py-4 text-white/80 text-center">
//                         <small>
//                             New here?{" "}
//                             <Link className="text-teal-300 underline" to="/signup">
//                                 Create an account
//                             </Link>
//                         </small>
//                     </p>
//                     <SocialLogin />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useLanguage } from '../providers/LanguageProvider';
import SocialLogin from '../components/SocialLogin';
import bgImage from "../assets/Video.webm";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { signIn } = useContext(AuthContext);
    const { translate } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                Swal.fire({
                    title: translate('successLogin'),
                    icon: 'success',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: translate('failedLogin'),
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: translate('tryAgain'),
                });
            });
    };

    const handleValidateCaptcha = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
            Swal.fire({
                icon: 'success',
                title: 'Captcha Validated!',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setDisabled(true);
            Swal.fire({
                icon: 'error',
                title: 'Invalid Captcha',
                text: 'Please try again',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <div className="h-screen w-screen overflow-hidden absolute top-0 left-0 flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src={bgImage}
            />

            {/* Overlay and Decorative Elements */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

            {/* Main Container */}
            <div className="relative w-full max-w-4xl mx-4 flex flex-col md:flex-row backdrop-blur-md bg-gradient-to-br from-blue-800/50 to-teal-700/50 border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
                {/* Left Section - Welcome Message */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-b from-teal-600/30 to-transparent">
                    <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 drop-shadow-lg">
                        {translate('welcomeBack')}
                    </h2>
                    <p className="text-center text-white/70 mt-4">
                        {translate('continueJourney')}
                    </p>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/10 backdrop-blur-lg">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="form-control">
                            <label className="text-sm font-medium text-white/90 mb-2">{translate('email')}</label>
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder={translate('enterEmail')}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="text-sm font-medium text-white/90 mb-2">{translate('password')}</label>
                            <input
                                ref={passwordRef}
                                type="password"
                                name="password"
                                placeholder={translate('enterPassword')}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
                                required
                            />
                            <div className="flex justify-end mt-2">
                                <Link className="text-sm text-teal-300 hover:text-teal-200 transition-colors">
                                    {translate('forgotPassword')}
                                </Link>
                            </div>
                        </div>

                        <div className="form-control space-y-3">
                            <label className="block">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="captcha"
                                    id="captcha"
                                    placeholder={translate('captchaText')}
                                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleValidateCaptcha({ target: document.getElementById('captcha') })}
                                    className="px-6 py-3 bg-[#DA3A60] hover:bg-[#DA3A60]/90 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                                >
                                    {translate('validate')}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={disabled}
                            className="w-full py-3 px-6 bg-[#DA3A60] hover:bg-[#DA3A60]/90 text-white font-medium rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            {translate('login')}
                        </button>
                    </form>

                    {/* Social Login Section */}
                    <div className="mt-6">
                        <SocialLogin />
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center mt-8 text-white/70">
                        {translate('newToSite')}{' '}
                        <Link to="/signup" className="text-teal-300 hover:text-teal-200 font-medium transition-colors">
                            {translate('createAccount')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
