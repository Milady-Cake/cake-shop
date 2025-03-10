

// import { useState, useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaCodeBranch, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { motion } from "framer-motion";

// import { Dialog } from "@headlessui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules"; // ✅ Added Autoplay
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import React from "react";
// import { HelpCircle, Share2 } from "lucide-react";
// import { FiPlusCircle } from "react-icons/fi";
// import { LuCircleMinus } from "react-icons/lu";
// const CakeItem = ({
//   id,
//   name,
//   price,
//   description,
//   image,
//   rating,
//   reviews = 20,
//   weights,
//   category,
//   offerPrice = 20,
// }) => {
//   const { url } = useContext(StoreContext);
//   const [hovered, setHovered] = useState(false);
//   const [liked, setLiked] = useState(false);
  
//   const [isOpen, setIsOpen] = useState(false); // Popup state
//   const navigate = useNavigate();


//   const discount = Math.round(((price - offerPrice) / price) * 100);

//   return (
//     <>
//       <motion.div
//         className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 transition-transform duration-300 hover:scale-105 lg:p-3"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative overflow-hidden">
//           <img
//             src={`${url}images/${image?.[0]}`}
//             alt={name}
//             onClick={() => navigate(`/detail/${id}`)}
//             className={`w-full h-80 max-md:h-36 object-cover rounded-t-xl transition-transform duration-300 ${
//               hovered ? "scale-110" : "scale-100"
//             }`}
//           />
//           <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//             {discount}% OFF
//           </div>
//           <div
//             className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
//               hovered ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//               <FaEye
//                 onClick={() => navigate(`/detail/${id}`)}
//                 className="text-gray-600"
//               />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//               <FaCodeBranch className="text-gray-600" />
//             </button>
//             <button
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//               onClick={() => setLiked(!liked)}
//             >
//               <FaHeart className={liked ? "text-red-500" : "text-gray-600"} />
//             </button>
//           </div>
//         </div>

//         <div className="p-2">
//           <h3 className="text-xl font-bold text-gray-900  max-md:text-base">
//             {name}
//           </h3>
//           <div className="flex justify-start gap-4 items-center max-md:text-base lg:mt-2 ">
//             <p className="text-[20px] max-md:text-[17px] font-bold text-red-500">₹{offerPrice}</p>
//             <p className="text-[15px] max-md:text-[13px]  font-semibold text-gray-500 line-through">
//               ₹{price}
//             </p>
//           </div>

//           <button
//             className=" lg:mt-3 max-md:mt-1 w-full bg-gradient-to-b from-red-500 to-orange-500 text-white lg:py-2  rounded-md flex items-center justify-center gap-2 hover:from-red-600 hover:to-orange-600"
//             onClick={() => setIsOpen(true)}
//           >
//             <FaShoppingCart />
//             Add to cart
//           </button>
//         </div>
//       </motion.div>
//       <ProductPopup
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         name={name}
//         price={offerPrice}
//         description={description}
//         image={image}
//         rating={rating}
//         weights={weights} // Ensure it's an array
//         url={url}
//         id={id}
//         category={category}
//       />
//     </>
//   );
// };


// const ProductPopup = ({
//   isOpen,
//   setIsOpen,
//   id,
//   name,
//   price,
//   description,
//   image,
//   category,
//   rating,
//   weights = [],
//   url,
// }) => {
//   const [selectedWeight, setSelectedWeight] = useState("1kg");
//   const [selectedQuantity, setSelectedQuantity] = useState(1);
//   const [liked, setLiked] = useState(false);
//   const { addToCart } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(id, selectedQuantity);
//     navigate("/cart");
//   };

//   return (
//     <Dialog
//       open={isOpen}
//       onClose={() => setIsOpen(false)}
//       className="relative z-50"
//     >
//       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white p-6 w-full max-w-screen-xl max-md:overflow-y-auto hide-scrollbar h-[80vh] max-md:h-[95vh] shadow-lg relative">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 max-md:top-2 max-md:right-2 right-4 text-gray-500 text-xl max-md:text-xs hover:text-red-600 max-md:w-4 max-md:h-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 shadow-md transition"
//           >
//             ✕
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-2 h-full">
//             {/* Image Carousel */}
//             <div className="relative h-full ">
//               <Swiper
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 4000, disableOnInteraction: false }}
//                 speed={1000}
//                 effect="fade"
//                 modules={[Autoplay, Navigation, Pagination]}
//                 className="w-full h-full rounded-md" // Removed sticky positioning
//               >
//                 {Array.isArray(image) &&
//                   image.map((img, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={`${url}images/${img}`}
//                         alt={`Product ${index}`}
//                         className="w-full h-[75vh] max-md:h-[30vh] object-cover rounded-md"
//                       />
//                     </SwiperSlide>
//                   ))}
//               </Swiper>
//             </div>

//             {/* Product Details */}
//             <div className="flex flex-col">
//               <p className="text-sm text-gray-500 max-md:text-xs  lg:py-1 ">
//                 {category}
//               </p>
//               <h1 className="text-3xl max-md:text-xl font-medium py-1">
//                 {name}
//               </h1>
//               <p className="text-gray-600 py-2 text-pretty">{description}</p>
//               <div className="flex items-center gap-2 py-1 text-gray-600">
//               {Array.from({ length: 5 }, (_, index) => (
//                 <span
//                   key={index}
//                   className={
//                     index < Math.round(rating)
//                       ? "text-yellow-500 text-xl"
//                       : "text-gray-400"
//                   }
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="text-sm">20 reviews</span>
//             </div>
//               <p className="text-lg font-medium py-1 text-gray-800">
//                 Rs: <span className="text-xl font-semibold">{price}</span>
//               </p>

//               {/* Weight Selection */}
//               <div>
//                 <div className="flex gap-2 mt-1 flex-wrap">
//                   {weights.map((weight) => (
//                     <button
//                       key={weight}
//                       onClick={() => setSelectedWeight(weight)}
//                       className={`px-3 py-1 border rounded-md text-sm transition-all duration-300 ${
//                         selectedWeight === weight
//                           ? "border-black bg-gray-200"
//                           : "border-gray-300 hover:bg-gray-100"
//                       }`}
//                     >
//                       {weight}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="font-medium text-sm py-2">
//                   Weight: <span className="font-bold">{selectedWeight}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-4 pt-4 text-gray-700 text-sm py-2">
//                 <button className="flex items-center gap-1 hover:text-black">
//                   <HelpCircle size={16} /> Ask a Question
//                 </button>
//                 <button className="flex items-center gap-1 hover:text-black">
//                   <Share2 size={16} /> Share
//                 </button>
//               </div>

//               {/* Quantity & Add to Cart Section */}
//               <div className="flex max-md:flex-col flex-col-reverse sm:flex-row items-center gap-3 py-3 w-full">
//                 <div className="flex gap-5">
//                   <div className="flex border-2 border-gray-300">
//                     <button
//                       onClick={() =>
//                         setSelectedQuantity((prev) => Math.max(prev - 1, 1))
//                       }
//                       className="border-r px-3 py-2"
//                       disabled={selectedQuantity === 1}
//                     >
//                       <LuCircleMinus size={20} />
//                     </button>
//                     <span className="px-5 py-2">{selectedQuantity}</span>
//                     <button
//                       className="px-3 py-2 border-l"
//                       onClick={() => setSelectedQuantity((prev) => prev + 1)}
//                     >
//                       <FiPlusCircle size={20} />
//                     </button>
//                   </div>
//                   <button
//                     className="p-3 border-2 border-gray-300"
//                     onClick={() => setLiked(!liked)}
//                   >
//                     <FaHeart
//                       size={18}
//                       className={liked ? "text-red-500" : "text-gray-600"}
//                     />
//                   </button>
//                 </div>

//                 <button
//                   className="flex-1 px-4 py-3 bg-black text-white font-semibold w-full sm:w-auto"
//                   onClick={handleAddToCart}
//                 >
//                   ADD TO CART
//                 </button>
//               </div>

//               {/* Terms & Conditions */}
//               <div className="flex items-center gap-2 py-4 text-sm">
//                 <input type="checkbox" className="w-5 h-5" />
//                 <label className="text-gray-600">
//                   I agree with{" "}
//                   <span className="underline cursor-pointer">
//                     Terms & Conditions
//                   </span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default CakeItem;








// correct working code








// import { useState, useContext, useEffect } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaCodeBranch, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { motion } from "framer-motion";

// import { Dialog } from "@headlessui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules"; // ✅ Added Autoplay
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import React from "react";
// import { HelpCircle, Share2 } from "lucide-react";
// import { FiPlusCircle } from "react-icons/fi";
// import { LuCircleMinus } from "react-icons/lu";
// import { IoIosTimer } from "react-icons/io";
// import { TbTruckDelivery } from "react-icons/tb";

// const CakeItem = ({
//   id,
//   name,
//   description,
//   image,
//   rating,
//   reviews = 20,
//   weights,
//   originalPrice=699,
//   prices,
//   category,
// }) => {
//   const { url } = useContext(StoreContext);
//   const [hovered, setHovered] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   // Extract first price and key (weight)
//   const weightKeys = Object.keys(prices);
//   const firstWeight = weightKeys.length > 0 ? weightKeys[0] : "1kg"; // Default to 1kg if missing
//   const offerPrice = prices[firstWeight] ? parseFloat(prices[firstWeight]) : 0;

//   // Set a base price (MRP) assuming a 20% higher price for discount calculation
//   const basePrice = offerPrice * 1.2;
//   const discount = Math.round(((basePrice - offerPrice) / basePrice) * 100);

//   return (
//     <>
//       <motion.div
//         className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 transition-transform duration-300 hover:scale-105 lg:p-3"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="relative overflow-hidden">
//           <img
//             src={`${url}images/${image?.[0]}`}
//             alt={name}
//             onClick={() => navigate(`/detail/${id}`)}
//             className={`w-full h-72 max-md:h-36 object-cover rounded-t-xl transition-transform duration-300 ${
//               hovered ? "scale-110" : "scale-100"
//             }`}
//           />
//           <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//             {discount}% OFF
//           </div>
//           <div
//             className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
//               hovered ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//               <FaEye
//                 onClick={() => navigate(`/detail/${id}`)}
//                 className="text-gray-600"
//               />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//               <FaCodeBranch className="text-gray-600" />
//             </button>
//             <button
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
//               onClick={() => setLiked(!liked)}
//             >
//               <FaHeart className={liked ? "text-red-500" : "text-gray-600"} />
//             </button>
//           </div>
//         </div>

//         <div className="p-2">
//           <h3 className="text-xl font-bold max-md:line-clamp-2 text-gray-900 max-md:text-base">
//             {name}
//           </h3>
//           <p className="line-clamp-2 max-md:hidden  text-pretty">
//             {description}
//           </p>
//           <div className="flex  items-center  lg:gap-1 lg:py-1 text-gray-600">
//               {Array.from({ length: 5 }, (_, index) => (
//                 <span
//                   key={index}
//                   className={
//                     index < Math.round(rating)
//                       ? "text-yellow-500 lg:text-xl"
//                       : "text-gray-400"
//                   }
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="text-sm ">(20 )</span>
//             </div>
//           <div className="flex justify-start gap-4 items-center max-md:text-base ">
  
//   <p className="text-[20px] max-md:text-[17px] font-bold text-red-500">
//     ₹{offerPrice}
//   </p>
//   <p className="text-[18px] max-md:text-[15px] max-md:text-xs text-gray-500 line-through">
//     ₹{originalPrice}
//   </p>
// </div>


//           <button
//             className="lg:mt-3 max-md:mt-1 w-full bg-gradient-to-b from-red-500 to-orange-500 text-white lg:py-2 rounded-md flex items-center justify-center gap-2 hover:from-red-600 hover:to-orange-600"
//             onClick={() => setIsOpen(true)}
//           >
//             <FaShoppingCart />
//             Add to cart
//           </button>
//         </div>
//       </motion.div>

//       <ProductPopup
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         name={name}
//         price={offerPrice}
//         description={description}
//         image={image}
//         rating={rating}
//         weights={weights}
//         url={url}
//         id={id}
//         prices={prices}
//         category={category}
//       />
//     </>
//   );
// };

// const ProductPopup = ({
//   isOpen,
//   setIsOpen,
//   id,
//   name,
//   description,
//   image = [],
//   category,
//   rating,
//   weights = [],
//   prices = {},
//   url,
// }) => {
//   const { addToCart } = useContext(StoreContext);
//   const navigate = useNavigate();

//   // 🛒 State for like, weight, quantity, and price
//   const [liked, setLiked] = useState(false);
//   const [selectedWeight, setSelectedWeight] = useState(weights[0] || "");
//   const [selectedQuantity, setSelectedQuantity] = useState(1);
//   const [price, setPrice] = useState(prices[selectedWeight] || "N/A");

//   useEffect(() => {
//     setPrice(prices[selectedWeight] || "N/A");
//   }, [selectedWeight, prices]);

//   // 🏷️ Handle weight selection
//   const handleWeightSelection = (weight) => {
//     setSelectedWeight(weight);
//     setPrice(prices[weight] || "N/A");
//   };

//   const handleAddToCart = () => {
//     // Add to cart with selected weight and quantity
//     addToCart(id, selectedWeight, selectedQuantity);

//     // Navigate to the cart page
//     navigate("/cart");
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white p-6 w-full max-w-screen-xl max-md:overflow-y-auto hide-scrollbar h-[80vh] max-md:h-[95vh] shadow-lg relative">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 max-md:top-2 max-md:right-2 text-gray-500 text-xl max-md:text-xs hover:text-red-600 max-md:w-4 max-md:h-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 shadow-md transition"
//           >
//             ✕
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-2 h-full">
//             {/* Product Images */}
//             <div className="relative h-full">
//               <Swiper
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 4000, disableOnInteraction: false }}
//                 speed={1000}
//                 effect="fade"
//                 modules={[Autoplay, Navigation, Pagination]}
//                 className="w-full h-full rounded-md"
//               >
//                 {image.length > 0 ? (
//                   image.map((img, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={`${url}images/${img}`}
//                         alt={`Product ${index}`}
//                         className="w-full h-[75vh] max-md:h-[30vh] object-cover rounded-md"
//                       />
//                     </SwiperSlide>
//                   ))
//                 ) : (
//                   <SwiperSlide>
//                     <div className="w-full h-[75vh] max-md:h-[30vh] flex items-center justify-center bg-gray-200 rounded-md">
//                       <p className="text-gray-500">No Image Available</p>
//                     </div>
//                   </SwiperSlide>
//                 )}
//               </Swiper>
//             </div>

//             {/* Product Details */}
//             <div className="flex flex-col">
//               <p className="text-sm text-gray-500 max-md:text-xs lg:py-1">{category}</p>
//               <h1 className="text-3xl max-md:text-xl font-medium py-1">{name}</h1>
//               <p className="text-gray-600 py-2">{description}</p>

//               {/* ⭐ Ratings */}
//               <div className="flex items-center gap-2 py-1 text-gray-600">
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <span
//                     key={index}
//                     className={index < Math.round(rating) ? "text-yellow-500 text-xl" : "text-gray-400"}
//                   >
//                     ★
//                   </span>
//                 ))}
//                 <span className="text-sm">20 reviews</span>
//               </div>

//               {/* Price */}
//               <p className="text-lg font-medium py-1 text-gray-800">
//                 Rs: <span className="text-xl font-semibold">{price}</span>
//               </p>

//               {/* Weight Selection */}
//               <div>
//                 <div className="flex gap-2 mt-1 flex-wrap">
//                   {weights.map((weight) => (
//                     <button
//                       key={weight}
//                       onClick={() => handleWeightSelection(weight)}
//                       className={`px-3 py-1 border rounded-md text-sm transition-all duration-300 ${
//                         selectedWeight === weight ? "border-black bg-gray-200" : "border-gray-300 hover:bg-gray-100"
//                       }`}
//                     >
//                       {weight}
//                     </button>
//                   ))}
//                 </div>
//                 <p className="font-medium text-sm py-2">
//                   Selected Weight: <span className="font-bold">{selectedWeight}</span>
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-4 pt-4 text-gray-700 text-sm py-2">
//                 <button className="flex items-center gap-1 hover:text-black">
//                   <HelpCircle size={16} /> Ask a Question
//                 </button>
//                 <button className="flex items-center gap-1 hover:text-black">
//                   <Share2 size={16} /> Share
//                 </button>
//               </div>

//               {/* Quantity & Add to Cart Section */}
//               <div className="flex max-md:flex-col flex-col-reverse sm:flex-row items-center gap-3 py-3 w-full">
//                 <div className="flex gap-5">
//                   <div className="flex border-2 border-gray-300">
//                     <button
//                       onClick={() => setSelectedQuantity((prev) => Math.max(prev - 1, 1))}
//                       className="border-r px-3 py-2"
//                       disabled={selectedQuantity === 1}
//                     >
//                       <LuCircleMinus size={20} />
//                     </button>
//                     <span className="px-5 py-2">{selectedQuantity}</span>
//                     <button
//                       className="px-3 py-2 border-l"
//                       onClick={() => setSelectedQuantity((prev) => prev + 1)}
//                     >
//                       <FiPlusCircle size={20} />
//                     </button>
//                   </div>
//                   <button
//                     className="p-3 border-2 border-gray-300"
//                     onClick={() => setLiked(!liked)}
//                   >
//                     <FaHeart size={18} className={liked ? "text-red-500" : "text-gray-600"} />
//                   </button>
//                 </div>

//                 <button
//                   className="flex-1 px-4 py-3 bg-black text-white font-semibold w-full sm:w-auto"
//                   onClick={handleAddToCart}
//                 >
//                   ADD TO CART
//                 </button>
//               </div>
//               <div className="flex items-center gap-2 py-2 max-md:py-1 text-xs sm:text-sm md:text-base lg:text-lg">
//               <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" />
//               <label className="text-gray-600">
//                 I agree with{" "}
//                 <span className="underline cursor-pointer">
//                   Terms & Conditions
//                 </span>
//               </label>
//             </div>
//                  <div className="text-gray-700 py-4 max-md:pt-1 text-base max-md:text-sm  lg:text-base space-y-2 sm:space-y-3 md:space-y-4">
//                           <p className="flex items-center gap-2 sm:gap-3">
//                             Usually ready in <strong>24 hours</strong>.
//                           </p>
//                           <p className="flex items-center gap-2 sm:gap-3">
//                             <IoIosTimer className="text-sm sm:text-lg md:text-xl lg:text-2xl" />
//                             <span>
//                               Estimate delivery times: <strong>1 - 3 days</strong>{" "}
//                               (International), <strong>3 - 6 days</strong> (United States).
//                             </span>
//                           </p>
//                           <p className="flex items-center gap-2 sm:gap-3">
//                             <TbTruckDelivery className="text-sm sm:text-lg md:text-xl lg:text-2xl" />
//                             <span>
//                               Return within <strong>Same Day</strong> of purchase. Duties &
//                               taxes are <strong>non-refundable</strong>.
//                             </span>
//                           </p>
//                         </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// };

// export default CakeItem;


// updated deva

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FaCodeBranch, FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

import { Dialog } from "@headlessui/react";
import { HelpCircle, Share2 } from "lucide-react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // ✅ Added Autoplay
import { Swiper, SwiperSlide } from "swiper/react";

const CakeItem = ({
  id,
  name,
  description,
  image,
  rating,
  reviews = 20,
  weights,
  originalPrice=699,
  prices,
  category,
}) => {
  const { url } = useContext(StoreContext);
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Extract first price and key (weight)
  const weightKeys = Object.keys(prices);
  const firstWeight = weightKeys.length > 0 ? weightKeys[0] : "1kg"; // Default to 1kg if missing
  const offerPrice = prices[firstWeight] ? parseFloat(prices[firstWeight]) : 0;

  // Set a base price (MRP) assuming a 20% higher price for discount calculation
  const basePrice = offerPrice * 1.2;
  const discount = Math.round(((basePrice - offerPrice) / basePrice) * 100);

  return (
    <>
      <motion.div
        className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 transition-transform duration-300 hover:scale-105 lg:p-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={`${url}images/${image?.[0]}`}
            alt={name}
            onClick={() => navigate(`/detail/${id}`)}
            className={`w-full h-72 max-md:h-36 object-cover rounded-t-xl transition-transform duration-300 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discount}% OFF
          </div>
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              <FaEye
                onClick={() => navigate(`/detail/${id}`)}
                className="text-gray-600"
              />
            </button>
            <button
  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  onClick={() => {
    if (navigator.share) {
      navigator
        .share({
          title: name,
          text: `Check out this delicious cake: ${name}`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      alert("Sharing not supported in this browser.");
    }
  }}
>
<button
  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  onClick={() => {
    const productUrl = `${window.location.origin}/detail/${id}`; // Ensure correct product URL

    if (navigator.share) {
      navigator
        .share({
          title: name,
          text: `Check out this delicious cake: ${name}`,
          url: productUrl, // Share the correct product page URL
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      alert("Sharing not supported in this browser.");
    }
  }}
>
  <FaCodeBranch className="text-gray-600" />
</button>


            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => setLiked(!liked)}
            >
              <FaHeart className={liked ? "text-red-500" : "text-gray-600"} />
            </button>
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-xl font-bold max-md:line-clamp-2 text-gray-900 max-md:text-base">
            {name}
          </h3>
          <p className="line-clamp-2 max-md:hidden  text-pretty">
            {description}
          </p>
          <div className="flex  items-center  lg:gap-1 lg:py-1 text-gray-600">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < Math.round(rating)
                      ? "text-yellow-500 lg:text-xl"
                      : "text-gray-400"
                  }
                >
                  ★
                </span>
              ))}
              <span className="text-sm ">(20 )</span>
            </div>
          <div className="flex justify-start gap-4 items-center max-md:text-base ">
  
  <p className="text-[20px] max-md:text-[17px] font-bold text-red-500">
    ₹{offerPrice}
  </p>
  <p className="text-[18px] max-md:text-[15px] max-md:text-xs text-gray-500 line-through">
    ₹{originalPrice}
  </p>
</div>


          <button
            className="lg:mt-3 max-md:mt-1 w-full bg-gradient-to-b from-red-500 to-orange-500 text-white lg:py-2 rounded-md flex items-center justify-center gap-2 hover:from-red-600 hover:to-orange-600"
            onClick={() => setIsOpen(true)}
          >
            <FaShoppingCart />
            Add to cart
          </button>
        </div>
      </motion.div>

      <ProductPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        price={offerPrice}
        description={description}
        image={image}
        rating={rating}
        weights={weights}
        url={url}
        id={id}
        prices={prices}
        category={category}
      />
    </>
  );
};

const ProductPopup = ({
  isOpen,
  setIsOpen,
  id,
  name,
  description,
  image = [],
  category,
  rating,
  weights = [],
  prices = {},
  url,
}) => {
  const { addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // 🛒 State for like, weight, quantity, and price
  const [liked, setLiked] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(weights[0] || "");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [price, setPrice] = useState(prices[selectedWeight] || "N/A");

  useEffect(() => {
    setPrice(prices[selectedWeight] || "N/A");
  }, [selectedWeight, prices]);

  // 🏷️ Handle weight selection
  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
    setPrice(prices[weight] || "N/A");
  };

  const handleAddToCart = () => {
    // Add to cart with selected weight and quantity
    addToCart(id, selectedWeight, selectedQuantity);

    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 w-full max-w-screen-xl max-md:overflow-y-auto hide-scrollbar h-[80vh] max-md:h-[95vh] shadow-lg relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 max-md:top-2 max-md:right-2 text-gray-500 text-xl max-md:text-xs hover:text-red-600 max-md:w-4 max-md:h-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 shadow-md transition"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-2 h-full">
            {/* Product Images */}
            <div className="relative h-full">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={1000}
                effect="fade"
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-full rounded-md"
              >
                {image.length > 0 ? (
                  image.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${url}images/${img}`}
                        alt={`Product ${index}`}
                        className="w-full h-[75vh] max-md:h-[30vh] object-cover rounded-md"
                      />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="w-full h-[75vh] max-md:h-[30vh] flex items-center justify-center bg-gray-200 rounded-md">
                      <p className="text-gray-500">No Image Available</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 max-md:text-xs lg:py-1">{category}</p>
              <h1 className="text-3xl max-md:text-xl font-medium py-1">{name}</h1>
              <p className="text-gray-600 py-2">{description}</p>

              {/* ⭐ Ratings */}
              <div className="flex items-center gap-2 py-1 text-gray-600">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={index < Math.round(rating) ? "text-yellow-500 text-xl" : "text-gray-400"}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm">20 reviews</span>
              </div>

              {/* Price */}
              <p className="text-lg font-medium py-1 text-gray-800">
                Rs: <span className="text-xl font-semibold">{price}</span>
              </p>

              {/* Weight Selection */}
              <div>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => handleWeightSelection(weight)}
                      className={`px-3 py-1 border rounded-md text-sm transition-all duration-300 ${
                        selectedWeight === weight ? "border-black bg-gray-200" : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
                <p className="font-medium text-sm py-2">
                  Selected Weight: <span className="font-bold">{selectedWeight}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 text-gray-700 text-sm py-2">
                <button className="flex items-center gap-1 hover:text-black">
                  <HelpCircle size={16} /> Ask a Question
                </button>
                <button
  className="flex items-center gap-1 hover:text-black"
  onClick={() => {
    const productUrl = `${window.location.origin}${window.location.pathname}`; // Ensures correct shared URL

    if (navigator.share) {
      navigator
        .share({
          title: name,
          text: `Check out this delicious cake: ${name}`,
          url: productUrl, // Uses the correct URL for the current page
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      alert("Sharing not supported in this browser.");
    }
  }}
>
  <Share2 size={16} /> Share
</button>


              </div>

              {/* Quantity & Add to Cart Section */}
              <div className="flex max-md:flex-col flex-col-reverse sm:flex-row items-center gap-3 py-3 w-full">
                <div className="flex gap-5">
                  <div className="flex border-2 border-gray-300">
                    <button
                      onClick={() => setSelectedQuantity((prev) => Math.max(prev - 1, 1))}
                      className="border-r px-3 py-2"
                      disabled={selectedQuantity === 1}
                    >
                      <LuCircleMinus size={20} />
                    </button>
                    <span className="px-5 py-2">{selectedQuantity}</span>
                    <button
                      className="px-3 py-2 border-l"
                      onClick={() => setSelectedQuantity((prev) => prev + 1)}
                    >
                      <FiPlusCircle size={20} />
                    </button>
                  </div>
                  <button
                    className="p-3 border-2 border-gray-300"
                    onClick={() => setLiked(!liked)}
                  >
                    <FaHeart size={18} className={liked ? "text-red-500" : "text-gray-600"} />
                  </button>
                </div>

                <button
                  className="flex-1 px-4 py-3 bg-black text-white font-semibold w-full sm:w-auto"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
              </div>
              <div className="flex items-center gap-2 py-2 max-md:py-1 text-xs sm:text-sm md:text-base lg:text-lg">
              <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" />
              <label className="text-gray-600">
                I agree with{" "}
                <span className="underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
                 <div className="text-gray-700 py-4 max-md:pt-1 text-base max-md:text-sm  lg:text-base space-y-2 sm:space-y-3 md:space-y-4">
                          <p className="flex items-center gap-2 sm:gap-3">
                            Usually ready in <strong>24 hours</strong>.
                          </p>
                          <p className="flex items-center gap-2 sm:gap-3">
                            <IoIosTimer className="text-sm sm:text-lg md:text-xl lg:text-2xl" />
                            <span>
                              Estimate delivery times: <strong>1 - 3 days</strong>{" "}
                              (International), <strong>3 - 6 days</strong> (United States).
                            </span>
                          </p>
                          <p className="flex items-center gap-2 sm:gap-3">
                            <TbTruckDelivery className="text-sm sm:text-lg md:text-xl lg:text-2xl" />
                            <span>
                              Return within <strong>Same Day</strong> of purchase. Duties &
                              taxes are <strong>non-refundable</strong>.
                            </span>
                          </p>
                        </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CakeItem;

