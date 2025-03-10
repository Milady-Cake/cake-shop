

// import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
// import React, { useState, useEffect } from "react";

// const navLinks = ["Home", "Shop", "Products", "Pages", "Contact"];

// const ToplineNavbar = () => {
//   const [active, setActive] = useState("Home");
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 120) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Topline Section */}
//       <div
//         className={`bg-black text-white border-b-2 border-gray-200 flex justify-between items-center text-xs md:text-sm px-4 md:px-6 transition-transform duration-300 w-full ${
//           isFixed ? "fixed top-0 left-0 z-50" : ""
//         }`}
//       >
//         <span className="text-center md:text-left">
//           Free Delivery on orders over $260
//         </span>
//         <div className="flex gap-4 sm:gap-6">
//           <a href="#" className="hover:text-gray-400">
//             Track your Order
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Find a Store
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             INR ₹
//           </a>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <nav
//         className={`w-full bg-black text-white shadow-md transition-all duration-300 z-50 ${
//           isFixed ? "fixed top-0 left-0" : "relative top-0"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4">
//           <div className="text-2xl font-bold">Clexy</div>
//           <div className="hidden md:flex gap-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`hover:text-gray-400 pb-2 ${
//                   active === link ? "border-b-2 border-white" : ""
//                 }`}
//                 onClick={() => setActive(link)}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//           <div className="flex gap-4">
//             <Search className="cursor-pointer" />
//             <ShoppingCart className="cursor-pointer" />
//             <AccountCircle className="cursor-pointer" />
//           </div>
//           <div className="md:hidden">
//             <button className="text-white">☰</button>
//           </div>
//         </div>
//       </nav>

//       {/* Prevent Content Overlap */}
//       <div className="mt-[60px]"></div>
//     </div>
//   );
// };

// export default ToplineNavbar;




import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Shop", "Products", "Pages", "Contact"];

const ToplineNavbar = () => {
  const [active, setActive] = useState("Home");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Topline Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-black text-white border-b-2 border-gray-200 flex justify-between items-center text-xs md:text-sm px-4 md:px-6 transition-transform duration-300 w-full ${
          isFixed ? "fixed top-0 left-0 z-50" : ""
        }`}
      >
        <span className="text-center md:text-left">
          Free Delivery on orders over $260
        </span>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-gray-400">
            Track your Order
          </a>
          <a href="#" className="hover:text-gray-400">
            Find a Store
          </a>
          <a href="#" className="hover:text-gray-400">
            INR ₹
          </a>
        </div>
      </motion.div>

      {/* Navbar Section */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full bg-black text-white shadow-md transition-all duration-300 z-50 ${
          isFixed ? "fixed top-0 left-0" : "relative top-0"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold"
          >
            Clexy
          </motion.div>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`hover:text-gray-400 pb-2 ${
                  active === link ? "border-b-2 border-white" : ""
                }`}
                onClick={() => setActive(link)}
              >
                {link}
              </motion.a>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Search className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <ShoppingCart className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <AccountCircle className="cursor-pointer" />
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              ☰
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Prevent Content Overlap */}
      <div className="mt-[60px]"></div>
    </div>
  );
};

export default ToplineNavbar;
