// // import React, { useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { StoreContext } from "../../context/StoreContext";
// // import { FaTrash } from "react-icons/fa";
// // import { motion } from "framer-motion";
// // import { FiPlusCircle } from "react-icons/fi";
// // import { LuCircleMinus } from "react-icons/lu";
// // import RecommendedProducts from "../Home/RecommendedProducts";
// // import FreeShippingProgress from "../Home/FreeShippingAnimea";
// // import FeaturesSection from "../Home/FeaturesSection";

// // const Cart = () => {
// //   const {
// //     cartItems,
// //     cake_list,
// //     addToCart,
// //     removeFromCart,
// //     removeProductFromCart,
// //     getTotalCartAmount,
// //     url,
// //   } = useContext(StoreContext);
// //   const navigate = useNavigate();

// //   const totalAmount = getTotalCartAmount();
// //   const freeShippingThreshold = 500;
// //   const progress = Math.min((totalAmount / freeShippingThreshold) * 100, 100);
// //   const deliveryFee = totalAmount >= freeShippingThreshold ? 0 : 50;

// //   return (
// //     <div className="flex flex-col w-full max-md:px-1 items-center">
// //       <div className="flex flex-col lg:flex-row w-full max-md:pt-16  pt-20">
// //         {/* Left Section - Product Images */}
// //         <div className="lg:w-2/3   lg:h-[700px] flex flex-col items-center py-5">
// //           <div className="w-full max-md:w-full  lg:sticky lg:top-24 max-md:top-20 max-md:p-1 p-4">
// //             <div className="border-2  border-gray-300">
// //               {/* Table Header */}
// //               <div className="grid grid-cols-4 border-b-2 max-sm:hidden  border-gray-300 text-center text-gray-600 text-sm md:text-base font-medium py-3">
// //                 <p className="border-r-2  border-gray-300">Product</p>
// //                 <p className="border-r-2  border-gray-300">Quantity</p>
// //                 <p className="border-r-2  border-gray-300">Total</p>
// //                 <p>Remove</p>
// //               </div>

// //               {/* Table Rows */}
// //               {cake_list.map((item) => {
// //                 if (cartItems[item._id] > 0) {
// //                   return (
// //                     <div
// //                       key={item._id}
// //                       className=" lg:grid grid-cols-4 items-center  max-md:flex max-md:justify-between  max-sm:h-[150px] text-black py-2 border-b border-gray-300 text-center"
// //                     >
// //                       {/* Product Info */}
// //                       <div className="flex w-full items-center max-lg:justify-around  gap-4 max-sm:px-2  lg:px-4 lg:border-r-2 border-gray-300">
// //                         <img
// //                           src={`${url}images/${
// //                             item.images?.length > 0
// //                               ? item.images[0]
// //                               : "default.jpg"
// //                           }`}
// //                           alt={item.name}
// //                           className="w-16 h-16 max-sm:w-32 max-sm:h-32 object-cover border border-gray-300"
// //                         />

// //                         <div className="text-left max-md:hidden ">
// //                           <p className="font-medium">{item.name}</p>
// //                           <p className="text-sm text-gray-600">
// //                             ₹ {item.price}
// //                           </p>
// //                           <p className="text-sm text-gray-500">{item.weight}</p>
// //                         </div>

// //                         <div className="flex lg:hidden flex-col">
// //                           {/* Quantity Controls */}

// //                           <div className="text-left flex justify-between items-center gap-3">
// //                             <div className="flex flex-col ">
// //                               <p className="font-medium text-xs text-gray-500">
// //                                 {item.category}
// //                               </p>

// //                               <p className="font-medium">{item.name}</p>
// //                               <p className="text-sm text-gray-600">
// //                                 ₹ {item.price}
// //                               </p>
// //                               <p className="text-sm text-gray-500">
// //                                 {item.weight}
// //                               </p>
// //                             </div>
// //                           </div>
// //                           <div className="flex w-full max-md:flex-col justify-center items-center  py-2  lg:border-r-2  border-gray-300">
// //                             <div className="flex gap-4">
// //                               <div className="flex  w-24  border-2  border-gray-300 items-center text-center justify-center  ">
// //                                 <button
// //                                   onClick={() => removeFromCart(item._id)}
// //                                   className="border-r px-1 py-1"
// //                                 >
// //                                   <LuCircleMinus size={20} />
// //                                 </button>
// //                                 <p className="px-2 py-1">
// //                                   {cartItems[item._id]}
// //                                 </p>
// //                                 <button
// //                                   onClick={() => addToCart(item._id)}
// //                                   className="px-1 py-1 border-l"
// //                                 >
// //                                   <FiPlusCircle size={20} />
// //                                 </button>
// //                               </div>
// //                               <button
// //                                 onClick={() => removeProductFromCart(item._id)}
// //                                 className="text-red-500   "
// //                               >
// //                                 <FaTrash />
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       {/* Quantity  only on lg  Controls */}
// //                       <div className="flex w-full justify-center max-md:hidden items-center  py-2  border-r-2  border-gray-300">
// //                         <div className="flex w-28 border-2  border-gray-300 items-center text-center justify-center  ">
// //                           <button
// //                             onClick={() => removeFromCart(item._id)}
// //                             className="border-r px-2 py-1"
// //                           >
// //                             <LuCircleMinus size={20} />
// //                           </button>
// //                           <p className="px-3 py-2">{cartItems[item._id]}</p>
// //                           <button
// //                             onClick={() => addToCart(item._id)}
// //                             className="px-2 py-2 border-l"
// //                           >
// //                             <FiPlusCircle size={20} />
// //                           </button>
// //                         </div>
// //                       </div>

// //                       {/* Total Price */}
// //                       <p className="border-r-2 border-gray-300 max-md:hidden  py-5">
// //                         ₹{item.price * cartItems[item._id]}
// //                       </p>

// //                       {/* Remove Button */}
// //                       <button
// //                         onClick={() => removeProductFromCart(item._id)}
// //                         className="text-red-500 flex justify-center max-md:hidden"
// //                       >
// //                         <FaTrash />
// //                       </button>
// //                     </div>
// //                   );
// //                 }
// //                 return null;
// //               })}
// //             </div>
// //             <RecommendedProducts />
// //             <hr className="max-md:visible mt-6 " />
// //           </div>
// //         </div>

// //         {/* Right Section - Product Details */}
// //         <motion.div
// //           className="lg:w-1/3 max-md:pl-5  w-full max-md:w-[95%]  p-8 mt-3 max-md:p-2 space-y-6 "
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <FreeShippingProgress progress={progress} />
// //           <motion.div
// //             className="bg-gray-50 border border-gray-200  mt-3 lg:p-4 max-lg:w-full max-md:px-2  rounded-lg shadow-md"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <div className="  ">
// //               <div className="border-b pb-4">
// //                 <h2 className="text-xl font-semibold text-center py-2">
// //                   Cart Totals
// //                 </h2>
// //               </div>
// //               <div className="flex justify-between text-gray-600 border-b py-4">
// //                 <p>Subtotal</p>
// //                 <p>₹{totalAmount}</p>
// //               </div>
// //               <div className="flex justify-between text-gray-600 border-b py-4">
// //                 <p>Delivery Fee</p>
// //                 <p>₹{deliveryFee}</p>
// //               </div>
// //               <div className="flex justify-between text-lg font-medium border-b py-4">
// //                 <p>Total</p>
// //                 <p>₹{totalAmount + deliveryFee}</p>
// //               </div>
// //               <button
// //                 // onClick={() => navigate("/order")}
// //                 onClick={() => navigate("/order", { state: { cartItems, cake_list, totalAmount, deliveryFee } })}
// //                 className="bg-green-500 text-white py-2 mb-4 px-5 rounded-md w-[100%] hover:bg-green-600 transition mt-4 text-sm sm:text-base md:text-lg lg:text-base "
// //               >
// //                 PROCEED TO CHECKOUT
// //               </button>
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //       <FeaturesSection />
// //     </div>
// //   );
// // };

// // export default Cart;


// // changing ui 

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import { FaTrash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { FiPlusCircle } from "react-icons/fi";
// import { LuCircleMinus } from "react-icons/lu";
// import RecommendedProducts from "../Home/RecommendedProducts";
// import FreeShippingProgress from "../Home/FreeShippingAnimea";
// import FeaturesSection from "../Home/FeaturesSection";

// const Cart = () => {
//   const {
//     cartItems,
//     cake_list,
//     addToCart,
//     removeFromCart,
//     removeProductFromCart,
//     getTotalCartAmount,
//     url,
//   } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const totalAmount = getTotalCartAmount();
//   const freeShippingThreshold = 500;
//   const progress = Math.min((totalAmount / freeShippingThreshold) * 100, 100);
//   const deliveryFee = totalAmount >= freeShippingThreshold ? 0 : 50;

//   return (
//     <div className="flex flex-col w-full max-md:px-1 items-center">
//       <div className="flex flex-col lg:flex-row w-full max-md:pt-16  pt-20">
//         {/* Left Section - Product Images */}
//         <div className="lg:w-2/3   lg:h-[700px] flex flex-col items-center py-5">
//           <div className="w-full max-md:w-full  lg:sticky lg:top-24 max-md:top-20 max-md:p-1 p-4">
//             <div className="border-2  border-gray-300">
//               {/* Table Header */}
//               <div className="grid grid-cols-4 border-b-2 max-sm:hidden  border-gray-300 text-center text-gray-600 text-sm md:text-base font-medium py-3">
//                 <p className="border-r-2  border-gray-300">Product</p>
//                 <p className="border-r-2  border-gray-300">Quantity</p>
//                 <p className="border-r-2  border-gray-300">Total</p>
//                 <p>Remove</p>
//               </div>

//               {/* Table Rows */}
//               {cake_list.map((item) => {
//                 // Check for each weight of the product in the cartItems
//                 return item.weights.map((weight) => {
//                   const cartKey = `${item._id}-${weight}`;
//                   if (cartItems[cartKey] > 0) {
//                     return (
//                       <div
//                         key={cartKey}
//                         className="lg:grid  grid-cols-4 items-center max-md:flex max-md:justify-between max-sm:h-[150px] text-black py-2 border-b border-gray-300 text-center"
//                       >
//                         {/* Product Info */}
//                         <div className="flex w-full items-center max-lg:justify-around gap-4 max-sm:px-2 lg:px-4 lg:border-r-2 border-gray-300">
//                           <img
//                             src={`${url}images/${
//                               item.images?.length > 0
//                                 ? item.images[0]
//                                 : "default.jpg"
//                             }`}
//                             alt={item.name}
//                             className="w-16 h-16 max-sm:w-32 max-sm:h-32 object-cover border border-gray-300"
//                           />

// <div className="text-left max-md:hidden">
//                             <p className="font-medium">{item.name}</p>
//                             <p className="text-sm text-gray-600">
//                               ₹ {item.prices[weight]}{" "}
//                               {/* Price based on selected weight */}
//                             </p>
//                             <p className="text-sm text-gray-500">{weight}</p>{" "}
//                             {/* Display weight */}
//                           </div>

//                           <div className="flex lg:hidden flex-col">
//                             <div className="text-left flex justify-between items-center gap-3">
//                               <div className="flex flex-col">
//                                 <p className="font-medium text-xs text-gray-500">
//                                   {item.category}
//                                 </p>
//                                 <p className="font-medium">{item.name}</p>
//                                 <p className="text-sm text-gray-600">
//                                   ₹ {item.prices[weight]}
//                                 </p>
//                                 <p className="text-sm text-gray-500">
//                                   {weight}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex w-full max-md:flex-col justify-center items-center py-2 lg:border-r-2 border-gray-300">
//                               <div className="flex gap-4">
//                                 <div className="flex w-24 border-2 border-gray-300 items-center text-center justify-center">
//                                   <button
//                                     onClick={() =>
//                                       removeFromCart(item._id, weight)
//                                     }
//                                     className="border-r px-1 py-1"
//                                   >
//                                     <LuCircleMinus size={20} />
//                                   </button>
//                                   <p className="px-2 py-1">
//                                     {cartItems[cartKey]}
//                                   </p>
//                                   <button
//                                     onClick={() => addToCart(item._id, weight)}
//                                     className="px-1 py-1 border-l"
//                                   >
//                                     <FiPlusCircle size={20} />
//                                   </button>
//                                 </div>
//                                 <button
//                                   onClick={() =>
//                                     removeProductFromCart(item._id, weight)
//                                   }
//                                   className="text-red-500"
//                                 >
//                                   <FaTrash />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                       </div>

//                       {/* Quantity  only on lg  Controls */}
//                       <div className="flex w-full justify-center max-md:hidden items-center  py-2  border-r-2  border-gray-300">
//                         <div className="flex w-28 border-2  border-gray-300 items-center text-center justify-center  ">
//                           <button
//                             onClick={() => removeFromCart(item._id,weight)}
//                             className="border-r px-2 py-1"
//                           >
//                             <LuCircleMinus size={20} />
//                           </button>
//                           <p className="px-3 py-2">{cartItems[cartKey]}</p>
//                           <button
//                            onClick={() => addToCart(item._id, weight)}
//                             className="px-2 py-2 border-l"
//                           >
//                             <FiPlusCircle size={20} />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Total Price */}
//                       <p className="border-r-2 border-gray-300 max-md:hidden  py-5">
//                       ₹{item.prices[weight] * cartItems[cartKey]}
//                       </p>

//                       {/* Remove Button */}
//                       <button
//                         onClick={() =>  removeProductFromCart(item._id, weight)}
//                         className="text-red-500 flex justify-center max-md:hidden"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//             <RecommendedProducts />
//             <hr className="max-md:visible mt-6 " />
//           </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <motion.div
//           className="lg:w-1/3 max-md:pl-5  w-full max-md:w-[95%]  p-8 mt-3 max-md:p-2 space-y-6 "
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FreeShippingProgress progress={progress} />
//           <motion.div
//             className="bg-gray-50 border border-gray-200  mt-3 lg:p-4 max-lg:w-full max-md:px-2  rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="  ">
//               <div className="border-b pb-4">
//                 <h2 className="text-xl font-semibold text-center py-2">
//                   Cart Totals
//                 </h2>
//               </div>
//               <div className="flex justify-between text-gray-600 border-b py-4">
//                 <p>Subtotal</p>
//                 <p>₹{totalAmount}</p>
//               </div>
//               <div className="flex justify-between text-gray-600 border-b py-4">
//                 <p>Delivery Fee</p>
//                 <p>₹{deliveryFee}</p>
//               </div>
//               <div className="flex justify-between text-lg font-medium border-b py-4">
//                 <p>Total</p>
//                 <p>₹{totalAmount + deliveryFee}</p>
//               </div>
//               <button
//                 // onClick={() => navigate("/order")}
//                 onClick={() => navigate("/order", { state: { cartItems, cake_list, totalAmount, deliveryFee } })}
//                 className="bg-green-500 text-white py-2 mb-4 px-5 rounded-md w-[100%] hover:bg-green-600 transition mt-4 text-sm sm:text-base md:text-lg lg:text-base "
//               >
//                 PROCEED TO CHECKOUT
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <FeaturesSection />
//     </div>
//   );
// };

// export default Cart;

// // // // // // updateing code


// {/*  

//  import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import { FaTrash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { FiPlusCircle } from "react-icons/fi";
// import { LuCircleMinus } from "react-icons/lu";
// import RecommendedProducts from "../Home/RecommendedProducts";
// import FreeShippingProgress from "../Home/FreeShippingAnimea";
// import FeaturesSection from "../Home/FeaturesSection";

// const Cart = () => {
//   const {
//     cartItems,
//     cake_list,
//     addToCart,
//     removeFromCart,
//     removeProductFromCart,
//     getTotalCartAmount,
//     url,
//   } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const totalAmount = getTotalCartAmount();
//   const freeShippingThreshold = 500;
//   const progress = Math.min((totalAmount / freeShippingThreshold) * 100, 100);
//   const deliveryFee = totalAmount >= freeShippingThreshold ? 0 : 50;


//   return (
//     <div className="flex flex-col w-full max-md:px-1 items-center">
//       <div className="flex flex-col lg:flex-row w-full max-md:pt-16  pt-20">
       
//         <div className="lg:w-2/3   lg:h-[700px] flex flex-col items-center py-5">
//           <div className="w-full max-md:w-full  lg:sticky lg:top-24 max-md:top-20 max-md:p-1 p-4">
//             <div className="border-2  border-gray-300">
         
//               <div className="grid grid-cols-4 border-b-2 max-sm:hidden  border-gray-300 text-center text-gray-600 text-sm md:text-base font-medium py-3">
//                 <p className="border-r-2  border-gray-300">Product</p>
//                 <p className="border-r-2  border-gray-300">Quantity</p>
//                 <p className="border-r-2  border-gray-300">Total</p>
//                 <p>Remove</p>
//               </div>

         
//               {cake_list.map((item) => {
//                 // Check for each weight of the product in the cartItems
//                 return item.weights.map((weight) => {
//                   const cartKey = `${item._id}-${weight}`;
//                   if (cartItems[cartKey] > 0) {
//                     return (
//                       <div
//                         key={cartKey}
//                         className="lg:grid  grid-cols-4 items-center max-md:flex max-md:justify-between max-sm:h-[150px] text-black py-2 border-b border-gray-300 text-center"
//                       >
                       
//                         <div className="flex w-full items-center max-lg:justify-around gap-4 max-sm:px-2 lg:px-4 lg:border-r-2 border-gray-300">
//                           <img
//                             src={`${url}images/${
//                               item.images?.length > 0
//                                 ? item.images[0]
//                                 : "default.jpg"
//                             }`}
//                             alt={item.name}
//                             className="w-16 h-16 max-sm:w-32 max-sm:h-32 object-cover border border-gray-300"
//                           />
//                           <div className="text-left max-md:hidden">
//                             <p className="font-medium">{item.name}</p>
//                             <p className="text-sm text-gray-600">
//                               ₹ {item.prices[weight]}{" "}
                             
//                             </p>
//                             <p className="text-sm text-gray-500">{weight}</p>{" "}
                       
//                           </div>

                         
//                           <div className="flex lg:hidden flex-col">
//                             <div className="text-left flex justify-between items-center gap-3">
//                               <div className="flex flex-col">
//                                 <p className="font-medium text-xs text-gray-500">
//                                   {item.category}
//                                 </p>
//                                 <p className="font-medium">{item.name}</p>
//                                 <p className="text-sm text-gray-600">
//                                   ₹ {item.prices[weight]}
//                                 </p>
//                                 <p className="text-sm text-gray-500">
//                                   {weight}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex w-full max-md:flex-col justify-center items-center py-2 lg:border-r-2 border-gray-300">
//                               <div className="flex gap-4">
//                                 <div className="flex w-24 border-2 border-gray-300 items-center text-center justify-center">
//                                   <button
//                                     onClick={() =>
//                                       removeFromCart(item._id, weight)
//                                     }
//                                     className="border-r px-1 py-1"
//                                   >
//                                     <LuCircleMinus size={20} />
//                                   </button>
//                                   <p className="px-2 py-1">
//                                     {cartItems[cartKey]}
//                                   </p>
//                                   <button
//                                     onClick={() => addToCart(item._id, weight)}
//                                     className="px-1 py-1 border-l"
//                                   >
//                                     <FiPlusCircle size={20} />
//                                   </button>
//                                 </div>
//                                 <button
//                                   onClick={() =>
//                                     removeProductFromCart(item._id, weight)
//                                   }
//                                   className="text-red-500"
//                                 >
//                                   <FaTrash />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex w-full justify-center max-md:hidden items-center  py-2  border-r-2  border-gray-300">
//                           <div className="flex w-28 border-2  border-gray-300 items-center text-center justify-center  ">
//                             <button
//                               onClick={() => removeFromCart(item._id, weight)}
//                               className="border-r px-1 py-1"
//                             >
//                               <LuCircleMinus size={20} />
//                             </button>
//                             <p className="px-2 py-1">{cartItems[cartKey]}</p>
//                             <button
//                               onClick={() => addToCart(item._id, weight)}
//                               className="px-1 py-1 border-l"
//                             >
//                               <FiPlusCircle size={20} />
//                             </button>
//                           </div>
//                         </div>

                    
//                         <p className="border-r-2 border-gray-300 max-md:hidden py-5">
//                           ₹{item.prices[weight] * cartItems[cartKey]}
//                         </p>

                 
//                         <button
//                           onClick={() =>
//                             removeProductFromCart(item._id, weight)
//                           }
//                           className="text-red-500 flex justify-center max-md:hidden"
//                         >
//                           <FaTrash />
//                         </button>
//                       </div>
//                     );
//                   }
//                   return null;
//                 });
//               })}
//             </div>
//             <RecommendedProducts />
//             <hr className="max-md:visible mt-6 " />
//           </div>
//         </div>

//         <motion.div
//           className="lg:w-1/3 max-md:pl-5  w-full max-md:w-[95%]  p-8 mt-3 max-md:p-2 space-y-6 "
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FreeShippingProgress progress={progress} />
//           <motion.div
//             className="bg-gray-50 border border-gray-200 mt-3 lg:p-4 max-lg:w-full max-md:px-2 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="">
//               <div className="border-b pb-4">
//                 <h2 className="text-xl font-semibold text-center py-2">
//                   Cart Totals
//                 </h2>
//               </div>
//               <div className="flex justify-between text-gray-600 border-b py-4">
//                 <p>Subtotal</p>
//                 <p>₹{totalAmount}</p>
//               </div>
//               <div className="flex justify-between text-gray-600 border-b py-4">
//                 <p>Delivery Fee</p>
//                 <p>₹{deliveryFee}</p>
//               </div>
//               <div className="flex justify-between text-lg font-medium border-b py-4">
//                 <p>Total</p>
//                 <p>₹{totalAmount + deliveryFee}</p>
//               </div>
//               <button
//                 onClick={() =>
//                   navigate("/order", {
//                     state: { cartItems, cake_list, totalAmount, deliveryFee },
//                   })
//                 }
//                 className="bg-green-500 text-white py-2 mb-4 px-5 rounded-md w-[100%] hover:bg-green-600 transition mt-4 text-sm sm:text-base md:text-lg lg:text-base "
//               >
//                 PROCEED TO CHECKOUT
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <FeaturesSection />
//     </div>
//   );
// };

// export default Cart; 




//  */}

// correctly working 

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";
import { LuCircleMinus } from "react-icons/lu";
import RecommendedProducts from "../Home/RecommendedProducts";
import FreeShippingProgress from "../Home/FreeShippingAnimea";
import FeaturesSection from "../Home/FeaturesSection";

const Cart = () => {
  const {
    cartItems,
    cake_list,
    addToCart,
    removeFromCart,
    removeProductFromCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();
  const freeShippingThreshold = 500;
  const progress = Math.min((totalAmount / freeShippingThreshold) * 100, 100);
  const deliveryFee = totalAmount >= freeShippingThreshold ? 0 : 50;
console.log("cart in cartItems" ,cartItems);

  return (
    <div className="flex flex-col w-full  items-center">
      <div className="flex flex-col lg:flex-row w-full max-md:pt-16 pt-20">
        {/* Left Section - Product Images */}
        <div className="lg:w-2/3 max-lg:h-[700px] max-lg:max-h-screen  flex flex-col items-center py-5">
          <div className="w-full max-md:w-full   lg:sticky lg:top-24 max-md:top-20 max-md:p-1 p-4">
            <div className="border-2 border-gray-300">
              {/* Table Header */}
              <div className="grid grid-cols-4 border-b-2 max-sm:hidden border-gray-300 text-center text-gray-600 text-sm md:text-base font-medium py-3">
                <p className="border-r-2 border-gray-300">Product</p>
                <p className="border-r-2 border-gray-300">Quantity</p>
                <p className="border-r-2 border-gray-300">Total</p>
                <p>Remove</p>
              </div>

              {/* Table Rows */}
              {cake_list.map((item) => {
                return item.weights.map((weight) => {
                  const cartKey = `${item._id}-${weight}`;
                  if (cartItems[cartKey] > 0) {
                    return (
                      <div
                        key={cartKey}
                        className="lg:grid grid-cols-4 items-center max-md:flex max-md:justify-between max-sm:h-[170px]   text-black lg:py-2 border-b border-gray-300 text-center"
                      >
                        {/* Product Info */}
                        <div className="flex w-full items-center max-lg:justify-around gap-4   max-sm:px-2 lg:px-4 lg:border-r-2 border-gray-300">
                          <img
                            src={`${url}images/${
                              item.images?.length > 0
                                ? item.images[0]
                                : "default.jpg"
                            }`}
                            alt={item.name}
                            onClick={() => navigate(`/detail/${item.itemId}`)}
                            className="w-16 h-16 max-sm:w-32  max-sm:h-32 object-cover border border-gray-300"
                          />
                          <div className="text-left  max-md:hidden">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              ₹ {item.prices[weight]}
                            </p>
                            <p className="text-sm text-gray-500">{weight}</p>
                          </div>
                          <div className="flex lg:hidden flex-col">
                            <div className="text-left flex justify-between items-center gap-3">
                              <div className="flex flex-col">
                                <p className="font-medium text-xs text-gray-500">
                                  {item.category}
                                </p>
                                <p className="font-medium max-md:line-clamp-1">{item.name}</p>
                                <div className="flex">
                                  
                                </div>
                                <p className="text-xs py-1 text-gray-700">
                                  Weight- {weight}
                                </p>
                                <p className="text-sm text-gray-600">
                                  ₹ {item.prices[weight]}
                                </p>
                               
                                  
                                <div className="flex w-full max-md:flex-col justify-center items-center py-2 lg:border-r-2 border-gray-300">
                              <div className="flex gap-4">
                                <div className="flex w-24 border-2 border-gray-300 items-center text-center justify-center">
                                  <button
                                    onClick={() =>
                                      removeFromCart(item._id, weight)
                                    }
                                    className="border-r px-1 py-1"
                                  >
                                    <LuCircleMinus size={20} />
                                  </button>
                                  <p className="px-2 py-1">
                                    {cartItems[cartKey]}
                                  </p>
                                  <button
                                    onClick={() => addToCart(item._id, weight)}
                                    className="px-1 py-1 border-l"
                                  >
                                    <FiPlusCircle size={20} />
                                  </button>
                                </div>
                                <button
                                  onClick={() =>
                                    removeProductFromCart(item._id, weight)
                                  }
                                  className="text-red-500"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                        <p className="border-r-2 border-gray-300  ">
                         Total- ₹{item.prices[weight] * cartItems[cartKey]}
                        </p>
                              </div>
                            </div>
                          
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex w-full justify-center max-md:hidden items-center py-2 border-r-2 border-gray-300">
                          <div className="flex w-28 border-2 border-gray-300 items-center text-center justify-center">
                            <button
                              onClick={() => removeFromCart(item._id, weight)}
                              className="border-r px-2 py-1"
                            >
                              <LuCircleMinus size={20} />
                            </button>
                            <p className="px-3 py-2">{cartItems[cartKey]}</p>
                            <button
                              onClick={() => addToCart(item._id, weight)}
                              className="px-2 py-2 border-l"
                            >
                              <FiPlusCircle size={20} />
                            </button>
                          </div>
                        </div>

                        {/* Total Price */}
                        <p className="border-r-2 border-gray-300 max-md:hidden py-5">
                          ₹{item.prices[weight] * cartItems[cartKey]}
                        </p>

                        {/* Remove Button */}
                        <button
                          onClick={() =>
                            removeProductFromCart(item._id, weight)
                          }
                          className="text-red-500 flex justify-center max-md:hidden"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    );
                  }
                  return null;
                });
              })}
            </div>
            <RecommendedProducts />
            <hr className="max-md:visible mt-6" />
          </div>
        </div>

        <motion.div
          className="lg:w-1/3 max-md:pl-5  w-full max-md:w-[95%]  p-8 mt-3 max-md:p-2 space-y-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FreeShippingProgress progress={progress} />
          <motion.div
            className="bg-gray-50 border border-gray-200  mt-3 lg:p-4 max-lg:w-full max-md:px-2  rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="  ">
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold text-center py-2">
                  Cart Totals
                </h2>
              </div>
              <div className="flex justify-between text-gray-600 border-b py-4">
                <p>Subtotal</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className="flex justify-between text-gray-600 border-b py-4">
                <p>Delivery Fee</p>
                <p>₹{deliveryFee}</p>
              </div>
              <div className="flex justify-between text-lg font-medium border-b py-4">
                <p>Total</p>
                <p>₹{totalAmount + deliveryFee}</p>
              </div>
              <button
                // onClick={() => navigate("/order")}
                onClick={() => navigate("/order", { state: { cartItems, cake_list, totalAmount, deliveryFee } })}
                className="bg-green-500 text-white py-2 mb-4 px-5 rounded-md w-[100%] hover:bg-green-600 transition mt-4 text-sm sm:text-base md:text-lg lg:text-base "
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </motion.div>
            
        </motion.div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default Cart;
