// import React, { useState } from "react";
// import { FaEye, FaCodeBranch, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// const products = [
//   {
//     id: 1,
//     name: "LF 7 pro",
//     price: 39900,
//     offerPrice: 35900,
//     image: "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-3-700x1000.jpg",
//     rating: 5.0,
//     reviews: 2,
//     description: "A high-performance laptop with a sleek design. Perfect for professionals ."
//   },
//   {
//     id: 2,
//     name: "XG Ultra",
//     price: 49500,
//     offerPrice: 45000,
//     image: "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-5-700x1000.jpg",
//     rating: 4.8,
//     reviews: 5,
//     description: "Powerful processing and a stunning display. Ideal for creative professionals."
//   },
//   {
//     id: 3,
//     name: "GTX Nova",
//     price: 55000,
//     offerPrice: 50000,
//     image: "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-2-700x1000.jpg",
//     rating: 4.7,
//     reviews: 3,
//     description: "Cutting-edge technology for seamless performance. Experience speed"
//   },
//   {
//     id: 4,
//     name: "EliteBook Z",
//     price: 42300,
//     offerPrice: 38900,
//     image: "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-1-700x1000.jpg",
//     rating: 4.9,
//     reviews: 4,
//     description: "Elegant design meets powerful performance. A perfect companion for work"
//   },
// ];

// const ProductCard = ({ product }) => {
//     const [hovered, setHovered] = useState(false);
//     const [liked, setLiked] = useState(false);
//     const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);
  
//     return (
//       <div
//         className="relative w-80 bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 transition-transform duration-300 hover:scale-100 p-4"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Product Image */}
//         <div className="relative overflow-hidden">
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className={`w-full h-64 object-cover rounded-t-xl transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`} 
//           />
//           {/* Offer Badge */}
//           <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//             {discount}% OFF
//           </div>
//           {/* Hover Icons */}
//           <div
//             className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
//               hovered ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
//               <FaEye className="text-gray-600" />
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
  
//         {/* Product Info */}
//         <div className="p-4">
//           {/* <p className="text-sm text-gray-500">elexy-demo</p> */}
//           <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
//           {/* <p className="text-sm text-gray-600 mt-1">{product.description}</p> */}
          
//           {/* Price Layout */}
//           <div className="flex justify-between items-center mt-2">
//             <p className="text-lg font-bold text-red-500">Rs. {product.offerPrice}</p>
//             <p className="text-sm font-semibold text-gray-500 line-through">Rs. {product.price}</p>
//           </div>
          
//           {/* Ratings */}
//           <div className="flex items-center mt-2">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} className={`text-yellow-500 ${i < product.rating ? "" : "opacity-30"}`} />
//             ))}
//             <span className="ml-1 text-sm font-semibold">{product.rating}</span>
//             <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
//           </div>
          
//           {/* Add to Cart Button */}
//           <button className="mt-3 w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800">
//             <FaShoppingCart />
//             Add to cart
//           </button>
//         </div>
//       </div>
//     );
//   };


  
// const ProductList = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-2">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
