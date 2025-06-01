


// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Shared/Navbar/Navbar";
// import Footer from "../Shared/Footer/Footer";

// const Main = () => {
//     const location = useLocation();

    
//     const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup' ;
//     return (
//         <div>
//            {noHeaderFooter || <Navbar></Navbar>}
//            <Outlet></Outlet>
//               {noHeaderFooter || <Footer></Footer>}
//         </div>
//     );
// };

// export default Main;


import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="min-h-screen flex flex-col w-full">
            {noHeaderFooter || <Navbar />}
            <main className="flex-grow w-full pt-[60px]">
                <Outlet />
            </main>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;

// import { Outlet, useLocation } from "react-router-dom";
// import Footer from './../Shared/Footer/Footer';
// import Navbar from './../Shared/Navbar/Navbar';

// const Main = () => {
//     const location = useLocation();
//     const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

//     return (
//         <div className="min-h-screen flex flex-col w-full">
//             {noHeaderFooter || <Navbar />}
//             <main className="flex-grow w-full pt-[60px]">
//                 <Outlet />
//             </main>
//             {noHeaderFooter || <Footer />}
//         </div>
//     );
// };

// export default Main;