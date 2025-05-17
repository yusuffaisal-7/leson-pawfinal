// import React from 'react';
// import img2 from "../../../assets/img-02.png";

// const Banner = () => {
//     return (
//         <div className="w-full bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16 px-4">
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//                 <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                     <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
//                     <p className="text-lg mb-6">Discover amazing features and join our community today!</p>
//                     <button className="btn bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full">
//                         Get Started
//                     </button>
//                 </div>
//                 <div className="md:w-1/2 flex justify-center">
//                     <img src={img2} alt="Banner Illustration" className="w-full max-w-sm h-auto" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;


import React, { useState, useEffect } from 'react';
import img2 from "../../../assets/img-02.png";

const Banner = () => {
  const [emphasizedText, setEmphasizedText] = useState('Equitable society');
  const texts = ['Equitable society', 'Self confidence'];

  useEffect(() => {
    const interval = setInterval(() => {
      setEmphasizedText((prev) => {
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="w-full bg-white py-12 px-4 text-center relative">
      <div className="max-w-6xl mx-auto">
        {/* Text and Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight">
              A good <span className="text-blue-500">#education</span> is always a base of
            </h1>
            <div className="mt-4">
              <span className="inline-block bg-purple-700 text-white px-6 py-3 text-4xl font-semibold rounded-sm">
                {emphasizedText}
              </span>
            </div>
            <p className="mt-6 text-lg text-gray-700 max-w-md mx-auto md:mx-0">
              Consectur adipiscing elit sedo eiusmod tempor incididun ut labore dolore magna aliqua ad minim veniamque.
            </p>
           <div className='pt-5 '>
             <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:from-orange-600 hover:to-red-600">
            Start as student 
          </button>
          <button className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-full border border-gray-300 hover:bg-gray-100">
            Join as Instructor It's Free!
          </button>
           </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img src={img2} alt="Banner Illustration" className="w-full max-w-md h-auto" />
          </div>
        </div>

        
        {/* Parent Join Text */}
        <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
          <span className="text-xl">🛡️</span> You can also join as parent to explore join today
        </p>

        
      </div>
    </div>
  );
};

export default Banner;