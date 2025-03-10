import { motion } from "framer-motion";
import { HelpCircle, Share2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import ProductTabs from "./ProductNav";

const ProductDetails = () => {
  const { cartItems, addToCart, cake_list } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "https://cake-shop-backend-qfhf.onrender.com";

  const [message, setMessage] = useState("");
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [price, setPrice] = useState("N/A");

  const cakeDetails = cake_list.find((cake) => cake._id === id);
  const prices = cakeDetails?.prices || {};
  const weights = cakeDetails?.weights || [];

  useEffect(() => {
    if (cakeDetails?.images?.length) {
      setSelectedImage(`${url}images/${cakeDetails.images[0]}`);
    }
    if (weights.length > 0) {
      setSelectedWeight(weights[0]);
      setPrice(prices[weights[0]] || "N/A");
    }
  }, [cakeDetails]);

  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
    setPrice(prices[weight] || "N/A");
  };

  const handleAddToCart = () => {
    addToCart(id, selectedWeight, selectedQuantity);
    navigate("/cart");
  };

  if (!cakeDetails) {
    return <p className="text-center text-red-500">Cake not found</p>;
  }

  return (
    <div className="flex flex-col w-full max-md:px-1 items-center">
      <div className="flex flex-col lg:flex-row w-full pt-20">
        {/* Left Section - Product Images */}
        <div className="lg:w-1/2  max-md:w-full p-4  lg:sticky  lg:top-12 max-md:top-20 lg:h-[700px] flex flex-col items-center py-5">
          <motion.img
            src={selectedImage}
            alt="Product"
            className="w-full max-w-[550px] h-[500px] max-md:h-[250px] object-cover rounded-lg mb-4 lg:py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          <div className="flex justify-center gap-2">
            {cakeDetails.images.map((image, index) => {
              const fullImagePath = `${url}images/${image}`;
              return (
                <motion.img
                  key={index}
                  src={fullImagePath}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-32 h-32 max-md:w-14 max-md:h-14 rounded-lg cursor-pointer border-2 ${
                    selectedImage === fullImagePath
                      ? "border-gray-400"
                      : "border-transparent"
                  } hover:border-gray-400 transition-all`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedImage(fullImagePath)}
                />
              );
            })}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <motion.div
          className="lg:w-2/3  w-full p-6 max-md:p-2 space-y-6 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-50 lg:p-4 max-lg:w-full max-md:px-2  rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-gray-500 max-md:text-xs max-md:py-1 py-2">
              {cakeDetails.category}
            </p>
            <h1 className="text-4xl max-md:text-2xl  font-medium py-1">
              {cakeDetails.name}
            </h1>
            <p className="text-gray-600 pt-2   max-md:text-sm text-pretty text-[17px] ">
              {cakeDetails.description}
            </p>
            <div className="flex items-center gap-2 py-1 text-gray-600">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < Math.round(cakeDetails.rating)
                      ? "text-yellow-500 text-xl"
                      : "text-gray-400"
                  }
                >
                  ★
                </span>
              ))}
              <span className="text-sm">20 reviews</span>
            </div>

            <p className="text-lg md:text-2xl font-medium py-2 text-gray-800">
              Rs: {price}
            </p>

            {/* Weight Selection */}
            <div>
              <div className="flex gap-2 mt-1 flex-wrap">
                {weights.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => handleWeightSelection(weight)}
                    className={`px-3 py-1 border rounded-md text-sm transition-all duration-300 ${
                      selectedWeight === weight
                        ? "border-black bg-gray-200"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
              <p className="font-medium text-sm py-2">
                Selected Weight:{" "}
                <span className="font-bold">{selectedWeight}</span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 max-md:pt-4 text-gray-700 max-md:text-xs   py-2">
              <button className="flex items-center gap-1  hover:text-black">
                <HelpCircle size={16} /> Ask a Question
              </button>
              <button
  className="flex items-center gap-1 hover:text-black"
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
  <Share2 size={16} /> Share
</button>

            </div>
            {/* Message Input */}
            <div className="pt-4 max-md:pt-2 lg:py-4">
              <h2 className="text-base sm:text-lg md:text-xl text-gray-700 lg:text-xl  font-semibold">
                Add a Message on the Cake
              </h2>
              <p className="text-gray-600 pt-2 text-xs sm:text-sm md:text-base lg:text-base">
                Enter the message you want to appear on your cake. Custom items
                cannot be returned or exchanged.
              </p>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                maxLength={30}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm md:text-base lg:text-lg"
              />
              {message && (
                <p className="text-gray-700 py-2 text-xs sm:text-sm md:text-base lg:text-lg">
                  <strong>Preview:</strong> "{message}"
                </p>
              )}
            </div>

            {/* Quantity & Add to Cart Section */}
            <div className="flex max-md:flex-col flex-col-reverse max-md:py-4 sm:flex-row items-center gap-3 py-3 w-full">
              <div className="flex gap-5">
                <div className="flex border-2  border-gray-300">
                  <button
                    onClick={() =>
                      setSelectedQuantity((prev) => Math.max(prev - 1, 1))
                    }
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
                  <FaHeart
                    size={18}
                    className={liked ? "text-red-500" : "text-gray-600"}
                  />
                </button>
              </div>

              <button
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 max-md:text-sm bg-black text-white font-semibold w-full sm:w-auto"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 py-4 max-md:py-1 text-xs sm:text-sm md:text-base lg:text-lg">
              <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" />
              <label className="text-gray-600">
                I agree with{" "}
                <span className="underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            {/* Buy It Now Button */}
            <button className="w-full py-3 bg-gray-300 text-gray-600 hover:text-white hover:bg-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
              BUY IT NOW
            </button>

            <hr className="my-4" />
            {/* Shipping & Returns Info */}
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

            {/* SKU, Availability, Vendor */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              <strong>Available:</strong>{" "}
              <span className="text-green-600 text-sm sm:text-base md:text-lg lg:text-xl">
                In Stock
              </span>
            </p>

            {/* Guarantee Safe Checkout */}
            <div className="mt-4 border-t py-4 flex flex-col items-center text-center">
              <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
                Guarantee Safe Checkout
              </p>
              <div className="border border-gray-300 rounded-lg p-3 sm:p-4 md:p-5 mt-2 flex justify-center items-center">
                <img
                  src="https://demo-alukas.myshopify.com/cdn/shop/files/trust_badge.png?v=1712024964&width=533"
                  alt="Safe Checkout"
                  className="h-6 sm:h-8 md:h-10 lg:h-12"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ProductTabs />

      <div className="flex py-7">
        <p className=" text-4xl max-md:text-xl  ">Related Product </p>
      </div>
    </div>
  );
};

export default ProductDetails;
