



// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// // Required categories
// const requiredCategories = [
//   "Freshcream Cake",
//   "Chocolate Cake",
//   "Cup Cake",
//   "Fondant Cake",
//   "Hampers",
//   "Tier Cake",
//   "Number Cake",
//   "Desserts",
// ];

// const Menu = ({ category, setCategory }) => {
//   const { cake_list, url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       className="mt-8 px-2 w-full lg:px-12 max-md:px-1"
//       id="cake-display"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Header with View All button */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-[max(2vw,24px)] font-semibold">Top Dishes Near You</h2>
//         <button
//           onClick={() => navigate("/cakes")}
//           className="text-pink-600 font-semibold hover:underline"
//         >
//           View All
//         </button>
//       </div>

//       {/* Display Cakes by Category */}
//       {requiredCategories.map((cat) => {
//         const filteredCakes = cake_list
//           .filter((item) => item.category === cat)
//           .slice(0, 4); // Show only 4 items per category

//         if (filteredCakes.length === 0) return null; // Skip empty categories

//         return (
//           <div key={cat} className="mt-6">
//             <h3 className="text-lg font-semibold text-pink-600">{cat}</h3>
//             <motion.div
//               className="grid grid-cols-2 gap-5 max-md:gap-1 mt-4 sm:grid-cols-2 lg:grid-cols-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, staggerChildren: 0.2 }}
//             >
//               {filteredCakes.map((item, index) => (
//                 <CakeCard key={item._id} item={item} index={index} url={url} />
//               ))}
//             </motion.div>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// };

// const CakeCard = ({ item, index }) => {
//     // const { url } = useContext(StoreContext); // Get URL from context
//     const url = "https://cake-shop-backend-qfhf.onrender.com";
//     // Log the image URL
//     console.log("Image URL:", `${url}/images/${item.images?.[0]}`);

//     return (
//       <motion.div
//         className="cursor-pointer text-center relative overflow-hidden shadow-md hover:shadow-lg transition-all"
//         layout
//       >
//         <div className="relative">
//           <motion.img
//             className="w-full h-[250px] object-cover"
//             src={`${url}/images/${item.images?.[0]}`} // Fixed URL
//             alt={item.name}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//           />
//           <div className="absolute inset-2 border-2 border-white opacity-80"></div>
//         </div>
//         <p className="py-3 text-gray-800 text-lg font-semibold bg-white">{item.name}</p>
//       </motion.div>
//     );
// };

  

// export default Menu;




import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

// Required categories
const requiredCategories = [
  "Freshcream Cake",
  "Chocolate Cake",
  "Cup Cake",
  "Fondant Cake",
  "Hampers",
  "Tier Cake",
  "Number Cake",
  "Desserts",
];

const Menu = ({ category, setCategory }) => {
  const { cake_list, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className="mt-8 px-2 w-full lg:px-12 max-md:px-1"
      id="cake-display"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header with View All button */}
      <div className="flex justify-between items-center">
        <h2 className="text-[max(2vw,24px)] font-semibold">Top Dishes Near You</h2>
        <button
          onClick={() => navigate("/cakes")}
          className="text-pink-600 font-semibold hover:underline"
        >
          View All
        </button>
      </div>

      {/* Display Cakes by Category */}
      {requiredCategories.map((cat) => {
        const filteredCakes = cake_list
          .filter((item) => item.category === cat)
          .slice(0, 4); // Show only 4 items per category

        if (filteredCakes.length === 0) return null; // Skip empty categories

        return (
          <div key={cat} className="mt-6">
            {/* Category heading with View All button */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl py-3 font-semibold text-black  ">{cat}</h3>
              <button
                onClick={() => navigate(`/cakes?category=${encodeURIComponent(cat)}`)}
                className="text-pink-600  font-semibold hover:underline"
              >
                View All
              </button>
            </div>

            {/* Cake list */}
            <motion.div
              className="grid grid-cols-2 gap-5 max-md:gap-1 mt-4 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              {filteredCakes.map((item, index) => (
                <CakeCard key={item._id} item={item} index={index} url={url} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

// Cake Card Component
const CakeCard = ({ item, index }) => {
  const url = "https://cake-shop-backend-qfhf.onrender.com"; // Hardcoded URL

  // Log the image URL
  console.log("Image URL:", `${url}/images/${item.images?.[0]}`);

  return (
    <motion.div
      className="cursor-pointer text-center relative overflow-hidden shadow-md hover:shadow-lg transition-all"
      layout
    >
      <div className="relative">
        <motion.img
          className="w-full h-[250px] object-cover"
          src={`${url}/images/${item.images?.[0]}`} // Fixed URL
          alt={item.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        />
        <div className="absolute inset-2 border-2 border-white opacity-80"></div>
      </div>
      <p className="py-3 text-gray-800 text-lg font-semibold bg-white">{item.name}</p>
    </motion.div>
  );
};

export default Menu;
