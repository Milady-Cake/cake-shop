// // // import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
// // // import React, { useState, useEffect, useContext } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { StoreContext } from "../../context/StoreContext";

// // // const navLinks = [
// // //   { name: "Home", path: "/" },
// // //   { name: "Shop", path: "/shop" },
// // //   { name: "Products", path: "/products" },
// // //   { name: "Pages", path: "/pages" },
// // //   { name: "ContactUs", path: "/contactUs" }
// // // ];

// // // const ToplineNavbar = () => {
// // //   const [active, setActive] = useState("Home");
// // //   const [isFixed, setIsFixed] = useState(false);
// // //   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 100) {
// // //         setIsFixed(true);
// // //       } else {
// // //         setIsFixed(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const logout = () => {
// // //     localStorage.removeItem("token");
// // //     setToken("");
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <div className="w-full">
// // //       {/* Topline Section */}
// // //       <motion.div
// // //         initial={{ y: -50, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //         className={`bg-black text-white border-b-2 border-gray-200 flex justify-between items-center text-xs md:text-sm px-4 md:px-6 transition-transform duration-300 w-full ${
// // //           isFixed ? "fixed top-0 left-0 z-50" : ""
// // //         }`}
// // //       >
// // //         <div className="overflow-hidden w-full">
// // //           <motion.div
// // //             className="whitespace-nowrap"
// // //             animate={{ x: ["100%", "-100%"] }}
// // //             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
// // //           >
// // //             <p>{ ` Free Delivery on orders over RS:500  `}</p>

// // //           </motion.div>
// // //         </div>

// // //       </motion.div>

// // //       {/* Navbar Section */}
// // //       <motion.nav
// // //         initial={{ y: -100 }}
// // //         animate={{ y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className={`w-full bg-black text-white shadow-md transition-all duration-300 z-50 ${
// // //           isFixed ? "fixed top-0 left-0" : "relative top-0"
// // //         }`}
// // //       >
// // //         <div className="flex justify-between items-center p-4">
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 1 }}
// // //             className="text-2xl font-bold"
// // //           >
// // //             Clexy
// // //           </motion.div>
// // //           <div className="hidden md:flex gap-6">
// // //             {navLinks.map(({ name, path }) => (
// // //               <motion.a
// // //                 key={name}
// // //                 href={path}
// // //                 whileHover={{ scale: 1.1 }}
// // //                 className={`hover:text-gray-400 pb-2 ${
// // //                   active === name ? "border-b-2 border-white" : ""
// // //                 }`}
// // //                 onClick={() => setActive(name)}
// // //               >
// // //                 {name}
// // //               </motion.a>
// // //             ))}
// // //           </div>
// // //           <div className="flex gap-4">
// // //             <motion.div whileHover={{ scale: 1.2 }}>
// // //               <Search className="cursor-pointer" />
// // //             </motion.div>
// // //             <motion.div>
// // //               <Link to="/cart">
// // //                 <ShoppingCart className="cursor-pointer" />
// // //               </Link>
// // //               {getTotalCartAmount() !== 0 && (
// // //                 <div className="absolute top-4 right-14  bg-red-500 w-3 h-3 rounded-full"></div>
// // //               )}
// // //             </motion.div>
// // //             {!token ? (
// // //               <button
// // //                 onClick={() => navigate("/login")}
// // //                 className="border border-red-500 text-gray-700 px-4 py-2 rounded-full transition hover:bg-red-100"
// // //               >
// // //                 Sign In
// // //               </button>
// // //             ) : (
// // //               <div className="relative group">
// // //                 <AccountCircle className="cursor-pointer" />
// // //                 <ul className="absolute right-0 top-6 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-7 py-3 space-y-3">
// // //                   <li
// // //                     onClick={() => navigate("/myorders")}
// // //                     className="flex items-center space-x-2 cursor-pointer text-red-500"
// // //                   >
// // //                     <p>Orders</p>
// // //                   </li>
// // //                   <hr />
// // //                   <li
// // //                     onClick={logout}
// // //                     className="flex items-center space-x-2 cursor-pointer text-red-500"
// // //                   >
// // //                     <p>Logout</p>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //           <div className="md:hidden">
// // //             <motion.button whileTap={{ scale: 0.9 }} className="text-white">
// // //               ☰
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //       </motion.nav>

// // //       {/* Prevent Content Overlap */}
// // //       <div className="mt-[40px]"></div>
// // //     </div>
// // //   );
// // // };

// // // export default ToplineNavbar;

// // import React, { useContext, useState } from "react";
// // import { assets } from "../../assets/assets";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { StoreContext } from "../../context/StoreContext";

// // const Navbar = ({ setShowLogin }) => {
// //   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setToken("");
// //     navigate("/");
// //   };

// //   const navLinks = [
// //     { path: "/", label: "Home" },
// //     { path: "/menu", label: "Menu" },
// //     { path: "/contact", label: "Contact Us" },
// //   ];

// //   return (
// //     <div className="fixed top-0 max-md:py-2 left-0 w-full bg-white shadow-md z-50 py-4 px-4 md:px-10 flex justify-between items-center">
// //       {/* Logo */}
// //       <NavLink to="/">
// //         <img src={assets.logo} alt="Logo" className="w-36 md:w-40" />
// //       </NavLink>

// //       {/* Navigation Links */}
// //       <ul className="hidden md:flex space-x-6 text-gray-700 text-lg">
// //         {navLinks.map((link) => (
// //           <NavLink
// //             key={link.path}
// //             to={link.path}
// //             className={({ isActive }) =>
// //               isActive ? "border-b-2 border-gray-700 pb-1" : ""
// //             }
// //           >
// //             {link.label}
// //           </NavLink>
// //         ))}
// //       </ul>

// //       {/* Right Section (Search, Cart, Profile) */}
// //       <div className="flex items-center space-x-6">
// //         {/* Search Icon */}
// //         <img src={assets.search_icon} alt="Search" className="w-6" />

// //         {/* Cart Icon with Badge */}
// //         <div className="relative">
// //           <NavLink to="/cart">
// //             <img src={assets.basket_icon} alt="Cart" className="w-6" />
// //           </NavLink>
// //           {getTotalCartAmount() !== 0 && (
// //             <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
// //           )}
// //         </div>

// //         {/* User Authentication */}
// //         {!token ? (
// //           <button
// //             onClick={() => setShowLogin(true)}
// //             className="border border-red-500 text-gray-700 px-4 py-2 rounded-full transition hover:bg-red-100"
// //           >
// //             Sign In
// //           </button>
// //         ) : (
// //           <div className="relative group">
// //             <img
// //               src={assets.profile_icon}
// //               alt="Profile"
// //               className="w-5 cursor-pointer"
// //             />
// //             <ul className="absolute right-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-5 w-40  py-3 space-y-3">
// //               <li
// //                 onClick={() => navigate("/orders")}
// //                 className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
// //               >
// //                 <img src={assets.bag_icon} alt="Orders" className="w-5" />
// //                 <p>My Orders</p>
// //               </li>
// //               <hr />
// //               <li
// //                 onClick={logout}
// //                 className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
// //               >
// //                 <img src={assets.logout_icon} alt="Logout" className="w-5" />
// //                 <p>Logout</p>
// //               </li>
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useContext, useState, useEffect } from "react";
// import { assets } from "../../assets/assets";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";

// const Navbar = ({ setShowLogin }) => {
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (location.pathname !== "/") {
//       setVisible(true); // Always show navbar on other pages
//       return;
//     }

//     const handleScroll = () => {
//       const halfwayPoint = window.innerHeight / 2;
//       setVisible(window.scrollY > halfwayPoint);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]);

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
//     <div
//       className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-4 md:px-10 flex justify-between items-center transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       {/* Logo */}
//       <NavLink to="/">
//         <img src={assets.logo} alt="Logo" className="w-36 md:w-40" />
//       </NavLink>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex space-x-6 text-gray-700 text-lg">
//         {navLinks.map((link) => (
//           <NavLink
//             key={link.path}
//             to={link.path}
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-gray-700 pb-1" : ""
//             }
//           >
//             {link.label}
//           </NavLink>
//         ))}
//       </ul>

//       {/* Right Section (Search, Cart, Profile) */}
//       <div className="flex items-center space-x-6">
//         {/* Search Icon */}
//         <img src={assets.search_icon} alt="Search" className="w-6" />

//         {/* Cart Icon with Badge */}
//         <div className="relative">
//           <NavLink to="/cart">
//             <img src={assets.basket_icon} alt="Cart" className="w-6" />
//           </NavLink>
//           {getTotalCartAmount() !== 0 && (
//             <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
//           )}
//         </div>

//         {/* User Authentication */}
//         {!token ? (
//           <button
//             onClick={() => setShowLogin(true)}
//             className="border border-red-500 text-gray-700 px-4 py-2 rounded-full transition hover:bg-red-100"
//           >
//             Sign In
//           </button>
//         ) : (
//           <div className="relative group">
//             <img
//               src={assets.profile_icon}
//               alt="Profile"
//               className="w-5 cursor-pointer"
//             />
//             <ul className="absolute right-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-5 w-40 py-3 space-y-3">
//               <li
//                 onClick={() => navigate("/orders")}
//                 className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
//               >
//                 <img src={assets.bag_icon} alt="Orders" className="w-5" />
//                 <p>My Orders</p>
//               </li>
//               <hr />
//               <li
//                 onClick={logout}
//                 className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
//               >
//                 <img src={assets.logout_icon} alt="Logout" className="w-5" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FiShoppingBag } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setVisible(true); // Always show navbar on other pages
      return;
    }

    // Reset visibility when coming back to the home page
    setVisible(false);

    const handleScroll = () => {
      const halfwayPoint = window.innerHeight / 3;
      setVisible(window.scrollY > halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
    <div
      className={`fixed top-0 z-50 left-0 w-full bg-white shadow-md  py-4 px-4 md:px-10 flex justify-between items-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img src={assets.logo} alt="Logo" className="w-36 md:w-40" />
      </NavLink>

     {/* Navigation Links */}
<ul className="hidden md:flex space-x-6 text-black text-xl">
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
             <IoSearchOutline className="text-3xl text-black cursor-pointer hover:text-orange-500" />
             <div className="relative">
               <NavLink to="/cart">
                 <IoBagHandleOutline className="text-3xl text-black cursor-pointer  hover:text-orange-500 " />
               </NavLink>
               {getTotalCartAmount() !== 0 && (
                 <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
               )}
             </div>
     
             {!token ? (
               <button
                 onClick={() => setShowLogin(true)}
                 className="border border-orange-500 text-black px-2 py-2 max-md:py-1 rounded-full max-md:rounded-md max-md:text-base transition hover:bg-white hover:text-black"
               >
                 Login
               </button>
             ) : (
               <div className="relative group">
                 <CgProfile className="text-3xl text-black cursor-pointer  hover:text-orange-500  " />
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

export default Navbar;
