// // // import React from 'react'
// // // import './Header.css'

// // // const Header = () => {
// // //   return (
// // //     <div className='header'>
// // //         <div className="header-contents">
// // //             <h2>Order Your Favourite Cake here</h2>
// // //             <p>Welcome to our cake shop, where we offer a delightful array of treats to satisfy your sweetest cravings. Our mission is to elevate your dessert experience, one delicious slice at a time. Indulge in our diverse menu of cakes, crafted with love and the finest ingredients just for you!</p>
// // //             <button>View menu</button>
// // //         </div>

// // //     </div>
// // //   )
// // // }

// // // export default Header

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import pngimg from '../../assets/pngwing.com (5).png'
// // // const header = () => {
// // //   return (
// // //     <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
// // //       {/* Background Image */}
// // //       <div
// // //   className="absolute inset-0 bg-cover bg-center"
// // //   style={{
// // //     backgroundImage: "url('https://www.recipetineats.com/tachyon/2016/03/Baked-Cheesecake_8-SQ.jpg')"
// // //   }}
// // // ></div>
// // // <div
// // //   className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"
// // //   style={{ opacity: 0.9 }}
// // // ></div>

// // //       {/* Animated Coffee PNG */}
// // //       <motion.img
// // //         src={pngimg}
// // //         alt="Coffee Cup"
// // //         initial={{ x: "-150%", opacity: 0 }}
// // //         animate={{ x: "0", opacity: 1 }}
// // //         transition={{ duration: 1.5, ease: "easeOut" }}
// // //         className="absolute z-50 left-10 bottom-10 w-56 h-[500px]"
// // //       />

// // //       {/* Curved White Section */}
// // //       <div className="absolute bottom-0 left-0 w-full">
// // //         <svg viewBox="0 0 1440 320" className="w-full h-auto">
// // //           <path
// // //             fill="#ffffff"
// // //             d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,181.3C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64V320H0Z"
// // //           ></path>
// // //         </svg>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="relative text-center text-white z-10 p-6 max-w-2xl">
// // //         <h1 className="text-5xl font-serif font-bold mb-4">
// // //           Start your Day with a <span className="text-[#C59D5F]">Coffee</span>
// // //         </h1>
// // //         <p className="text-lg mb-6">
// // //           Way too much coffee. But if it weren’t for the coffee, I’d have no identifiable personality whatsoever.
// // //         </p>
// // //         <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
// // //           OUR OFFER
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default header;

// import { CgProfile } from "react-icons/cg";

// import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import { NavLink, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import { assets } from "../../assets/assets";
// import pngimg from '../../assets/baker-png-removebg-preview.png';
// import strawberryImg from '../../assets/pngwing.com (6).png';
// const Navbar = ({ setShowLogin }) => {
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/menu", label: "Menu" },
//     { path: "/contact", label: "Contact Us" },
//   ];

//   return (
//     <div className="absolute top-2 left-0 w-full bg-transparent shadow-none z-50 py-4 px-4 md:px-10 flex justify-between items-center">
//       {/* Logo */}
//       <NavLink to="/">
//         <img src={assets.logo} alt="Logo" className="w-36 md:w-40" />
//       </NavLink>

//       {/* Navigation Links */}

// <ul className="hidden md:flex space-x-6 text-white text-xl">
//   {navLinks.map((link) => (
//     <li key={link.path}>
//       <NavLink
//         to={link.path}
//         className={({ isActive }) =>
//           `transition-colors duration-300 ${
//             isActive
//               ? "border-b-2 border-orange-600 pb-1"
//               : "hover:text-orange-600"
//           }`
//         }
//       >
//         {link.label}
//       </NavLink>
//     </li>
//   ))}
// </ul>

//       {/* Right Section (Search, Cart, Profile) */}
//       <div className="flex items-center space-x-6">
//         <IoSearchOutline className="text-3xl text-white cursor-pointer hover:text-orange-500" />
//         <div className="relative">
//           <NavLink to="/cart">
//             <IoBagHandleOutline  className="text-3xl text-white cursor-pointer  hover:text-orange-500 " />
//           </NavLink>
//           {getTotalCartAmount() !== 0 && (
//             <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
//           )}
//         </div>

//         {!token ? (
//           <button
//             onClick={() => setShowLogin(true)}
//             className="border border-white text-white px-4 py-2 rounded-full transition hover:bg-white hover:text-black"
//           >
//             Sign In
//           </button>
//         ) : (
//           <div className="relative group">
//             <CgProfile  className="text-3xl text-white cursor-pointer  hover:text-orange-500  " />
//             <ul className="absolute right-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-5 w-40 py-3 space-y-3">
//               <li onClick={() => navigate("/orders")} className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
//                 <img src={assets.bag_icon} alt="Orders" className="w-5" />
//                 <p>My Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout} className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
//                 <img src={assets.logout_icon}  alt="Logout" className="w-5" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// const Header = ({ setShowLogin }) => {
//   const fallingStrawberries = [1, 2, 3, 4, 5]; // Number of strawberries

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
//       <Navbar setShowLogin={setShowLogin} />
//       <div
//   className="absolute inset-0 bg-cover bg-center"
//   style={{
//     backgroundImage: "url('https://www.recipetineats.com/tachyon/2016/03/Baked-Cheesecake_8-SQ.jpg')",
//     backgroundAttachment: "fixed", // This makes the background image fixed
//     backgroundSize: "cover",
//     backgroundPosition: "center"
//   }}
// ></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" style={{ opacity: 1 }}></div>

//       {/* Falling Strawberries */}
//       {fallingStrawberries.map((_, index) => (
//         <motion.img
//           key={index}
//           src={strawberryImg}
//           alt="Strawberry"
//           initial={{ y: "-100vh", x: Math.random() * 200 - 100, opacity: 0 }}
//           animate={{ y: "70vh", opacity: 1, rotate: Math.random() * 360 }}
//           transition={{ duration: Math.random() * 2 + 1, ease: "easeInOut", repeat: Infinity, delay: index * 0.5 }}
//           className="absolute w-28"
//           style={{ left: `${Math.random() * 50 + 30}%` }}
//         />
//       ))}

//       {/*  Cp (Cake Image) */}

//       <div className="absolute bottom-0 left-0 w-full">
//   <svg viewBox="0 0 1440 320" className="w-full h-auto relative">
//   <path fill="#ffffff" d="M1440,250L1380,240C1320,230,1200,210,1080,200C960,190,840,195,720,200C600,205,480,190,360,150C240,100,120,50,60,30L0,10V320H1440Z"></path>

//   </svg>

//   {/* Image Coming from Left and Settling in the Curve */}
//   <motion.img
//     src={pngimg}
//     alt="Coffee Cup"
//     initial={{ x: "-150%", opacity: 0 }} // Start from the left
//     animate={{ x: "0", opacity: 1 }} // Move to position inside curve
//     transition={{ duration: 1.5, ease: "easeOut" }}
//     className="absolute z-30 left-16 bottom-[-40px] w-96 h-[380px]" // Adjust to fit inside the new curve
//   />
// </div>

// <div className="relative text-center text-white z-10 p-6 max-w-2xl">
//   <h1 className="text-5xl font-serif font-bold mb-4">
//     Indulge in the Sweetness of <span className="text-[#C59D5F]">Cakes</span>
//   </h1>
//   <p className="text-lg mb-6">
//     Every bite is a moment of joy! Discover our freshly baked, handcrafted cakes made with love and the finest ingredients.
//   </p>
//   <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
//     EXPLORE MENU
//   </button>
// </div>

//     </div>
//   );
// };

// export default Header;




import { CgProfile } from "react-icons/cg";

import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import pngimg from "../../assets/baker-png-removebg-preview.png";
import strawberryImg from "../../assets/pngwing.com (6).png";
const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="absolute top-2 left-0 w-full bg-transparent shadow-none z-50 py-4 px-4 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/">
        <img src={assets.logo} alt="Logo" className="w-36 max-md:w-44 max-md:h-14 md:w-40" />
      </NavLink>

      {/* Navigation Links */}

      <ul className="hidden md:flex space-x-6 text-white text-xl">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "border-b-2 border-orange-600 pb-1"
                    : "hover:text-orange-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section (Search, Cart, Profile) */}
      <div className="flex items-center space-x-6 max-md:space-x-4 max-md:pl-6">
        <IoSearchOutline className="text-3xl text-white cursor-pointer hover:text-orange-500" />
        <div className="relative">
          <NavLink to="/cart">
            <IoBagHandleOutline className="text-3xl text-white cursor-pointer  hover:text-orange-500 " />
          </NavLink>
          {getTotalCartAmount() !== 0 && (
            <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
          )}
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="border border-white text-white px-2 py-2 max-md:py-1 rounded-full max-md:rounded-md max-md:text-base transition hover:bg-white hover:text-black"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <CgProfile className="text-3xl text-white cursor-pointer  hover:text-orange-500  " />
            <ul className="absolute right-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-5 w-40 py-3 space-y-3">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
              >
                <img src={assets.bag_icon} alt="Orders" className="w-5" />
                <p>My Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
              >
                <img src={assets.logout_icon} alt="Logout" className="w-5" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = ({ setShowLogin }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <Navbar setShowLogin={setShowLogin} />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.recipetineats.com/tachyon/2016/03/Baked-Cheesecake_8-SQ.jpg')",
          backgroundAttachment: "fixed", // This makes the background image fixed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"
        style={{ opacity: 1 }}
      ></div>

      {/* Curve and Cake Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto relative">
          <path
            fill="#ffffff"
            d="M1440,250L1380,240C1320,230,1200,210,1080,200C960,190,840,195,720,200C600,205,480,190,360,150C240,100,120,50,60,30L0,10V320H1440Z"
          ></path>
        </svg>

        {/* Image Coming from Left and Settling in the Curve */}
        <motion.img
          src={pngimg}
          alt="Cake"
          initial={{ x: "-150%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute z-30 left-16 bottom-[-50px] w-96  max-md:hidden h-[380px]"
        />
      </div>

      {/* Content Section */}
      <div className="relative text-center text-white z-10 p-6 max-w-2xl">
        <h1 className="text-5xl font-serif font-bold mb-4">
          Indulge in the Sweetness of{" "}
          <span className="text-[#C59D5F]">Cakes</span>
        </h1>
        <p className="text-lg mb-6">
          Every bite is a moment of joy! Discover our freshly baked, handcrafted
          cakes made with love and the finest ingredients.
        </p>
        <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
          EXPLORE MENU
        </button>
      </div>
    </div>
  );
};

export default Header;
