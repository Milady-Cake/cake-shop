// import React, { useContext, useEffect, useState } from "react";
// import "./PlaceOrder.css";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const PlaceOrder = () => {
//   const { getTotalCartAmount, token, cake_list, cartItems, url } =
//     useContext(StoreContext);

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     let orderItems = [];
//     cake_list.map((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = item;
//         itemInfo["quantity"] = cartItems[item._id];
//         orderItems.push(itemInfo);
//       }
//     });
//     let orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() + 30,
//     };
//     let response = await axios.post(url + "api/order/place", orderData, {
//       headers: { token },
//     });
//     if (response.data.success) {
//       const { session_url } = response.data;
//       window.location.replace(session_url);
//     } else {
//       alert("Failed to place order");
//     }
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/cart");
//     } else if (getTotalCartAmount() === 0) {
//       navigate("/cart");
//     }
//   }, [token]);

//   return (
//     <form onSubmit={placeOrder} className="place-order">
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input
//             required
//             name="firstName"
//             onChange={onChangeHandler}
//             value={data.firstName}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             required
//             name="lastName"
//             onChange={onChangeHandler}
//             value={data.lastName}
//             type="text"
//             placeholder="Last Name"
//           />
//         </div>
//         <input
//           required
//           name="email"
//           onChange={onChangeHandler}
//           value={data.email}
//           type="email"
//           placeholder="Email address"
//         />
//         <input
//           required
//           name="street"
//           onChange={onChangeHandler}
//           value={data.street}
//           type="text"
//           placeholder="Street"
//         />

//         <div className="multi-fields">
//           <input
//             required
//             name="city"
//             onChange={onChangeHandler}
//             value={data.city}
//             type="text"
//             placeholder="City"
//           />
//           <input
//             required
//             name="state"
//             onChange={onChangeHandler}
//             value={data.state}
//             type="text"
//             placeholder="State"
//           />
//         </div>

//         <div className="multi-fields">
//           <input
//             required
//             name="zipcode"
//             onChange={onChangeHandler}
//             value={data.zipcode}
//             type="text"
//             placeholder="Zip code"
//           />
//           <input
//             required
//             name="country"
//             onChange={onChangeHandler}
//             value={data.country}
//             type="text"
//             placeholder="Country"
//           />
//         </div>

//         <input
//           required
//           name="phone"
//           onChange={onChangeHandler}
//           value={data.phone}
//           type="text"
//           placeholder="Phone"
//         />
//       </div>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>₹{getTotalCartAmount() === 0 ? 0 : 30}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>
//                 ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
//               </b>
//             </div>
//           </div>

//           <button type="submit">PROCEED TO PAYMENT</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;

// import React, { useContext, useEffect, useState } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// import { FaTruck, FaStore, FaEdit } from "react-icons/fa";

// const PlaceOrder = () => {
//  const [step, setStep] = useState(1);
//   const [deliveryMethod, setDeliveryMethod] = useState("");
//   const [showShippingForm, setShowShippingForm] = useState(false);
//   const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
//   const [showSummary, setShowSummary] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     phone: "",
//     country: "India",
//     address: "",
//     city: "",
//     region: "Tamil Nadu",
//     postalCode: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCustomerContinue = () => {
//     setStep(2);
//     setShowDeliveryOptions(true);
//   };

//   const handleDeliveryMethodChange = (method) => {
//     setDeliveryMethod(method);
//     setShowShippingForm(method === "Ship");
//   };

//   const handleDeliveryContinue = () => {
//     setShowShippingForm(false);
//     setShowDeliveryOptions(false);
//     setShowSummary(true);
//   };

//   const handleEditDeliveryMethod = () => {
//     setShowSummary(false);
//     setShowDeliveryOptions(true);
//     setShowShippingForm(false);
//   };

//   const handleEditSummary = () => {
//     setShowSummary(false);
//     setShowShippingForm(true);
//     setShowDeliveryOptions(false);
//   };

//   const { getTotalCartAmount, token, url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cartItems, cake_list, totalAmount, deliveryFee } =
//     location.state || {};

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     let orderItems = cake_list
//       .filter((item) => cartItems[item._id] > 0)
//       .map((item) => ({ ...item, quantity: cartItems[item._id] }));

//     const orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() + 30,
//     };

//     try {
//       let response = await axios.post(`${url}api/order/place`, orderData, {
//         headers: { token },
//       });
//       if (response.data.success) {
//         window.location.replace(response.data.session_url);
//       } else {
//         alert("Failed to place order");
//       }
//     } catch (error) {
//       console.error("Order Error:", error);
//       alert("Error placing order");
//     }
//   };

//   useEffect(() => {
//     if (!token || getTotalCartAmount() === 0) {
//       navigate("/cart");
//     }
//   }, [token, navigate, getTotalCartAmount]);

//   return (
//     <div className="flex flex-col w-full max-md:px-1 items-center">
//       <div className="flex flex-col lg:flex-row w-full pt-20">
//         {/* Left Section - Product Images */}
//         <div className="lg:w-2/3  space-y-6 overflow-auto max-md:w-full p-4  lg:h-[700px] flex flex-col items-center py-5">
//      <div className="flex flex-col items-center py-10 mt-14">
//          <div className="bg-white shadow-lg rounded-xl p-6  w-[700px]">
//            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
//            <hr className="my-4" />

//            {/* Moved Customer Details Summary Here */}
//            {step === 2 && (
//              <div className="mb-6 p-4 bg-gray-100 rounded-lg">
//                <div>
//                  <p className="text-lg font-medium">
//                    {formData.firstName} {formData.lastName}
//                  </p>
//                  <p className="text-gray-600">{formData.email}</p>
//                  <p className="text-gray-600">{formData.phone}</p>
//                </div>
//              </div>
//            )}

//            {step === 1 && (
//              <div className="mb-6 space-y-4">
//                <input
//                  type="text"
//                  placeholder="Email"
//                  name="email"
//                  value={formData.email}
//                  onChange={handleChange}
//                  className="w-full p-2 border rounded"
//                  required
//                />
//                <div className="flex gap-4">
//                  <input
//                    type="text"
//                    placeholder="First Name"
//                    name="firstName"
//                    value={formData.firstName}
//                    onChange={handleChange}
//                    className="w-1/2 p-2 border rounded"
//                    required
//                  />
//                  <input
//                    type="text"
//                    placeholder="Last Name"
//                    name="lastName"
//                    value={formData.lastName}
//                    onChange={handleChange}
//                    className="w-1/2 p-2 border rounded"
//                    required
//                  />
//                </div>
//                <input
//                  type="text"
//                  placeholder="Phone"
//                  name="phone"
//                  value={formData.phone}
//                  onChange={handleChange}
//                  className="w-full p-2 border rounded"
//                  required
//                />
//                <button
//                  className="w-full bg-blue-600 text-white p-2 rounded mt-4"
//                  onClick={handleCustomerContinue}
//                >
//                  Continue
//                </button>
//              </div>
//            )}

//            <div className="flex w-full justify-between items-center px-2">
//              <h2 className="text-xl font-semibold mb-4 flex-1">Delivery Method</h2>
//              {showSummary && (
//                <button
//                  className="text-blue-600 hover:text-blue-700 ml-4"
//                  onClick={handleEditDeliveryMethod}
//                >
//                  <FaEdit className="w-5 h-5 mb-4" />
//                </button>
//              )}
//            </div>

//            <hr className="my-4" />

//            {step === 2 && (
//              <>
//                <h2 className="text-xl font-semibold mb-4 flex justify-between items-center"></h2>

//                {!showSummary && showDeliveryOptions && (
//                  <div className="mb-6 space-y-4">
//                    <div className="border rounded-lg overflow-hidden">
//                      <label
//                        className={`flex justify-between items-center p-4 cursor-pointer ${
//                          deliveryMethod === "Ship" ? "bg-gray-100" : ""
//                        }`}
//                      >
//                        <div className="flex items-center gap-2">
//                          <input
//                            type="radio"
//                            value="Ship"
//                            checked={deliveryMethod === "Ship"}
//                            onChange={() => handleDeliveryMethodChange("Ship")}
//                          />
//                          Ship
//                        </div>
//                        <FaTruck className="text-gray-600" />
//                      </label>
//                        <label
//                        className={`flex justify-between items-center p-4 cursor-pointer ${
//                          deliveryMethod === "Ship" ? "bg-gray-100" : ""
//                        }`}
//                      >
//                        <div className="flex items-center gap-2">

//                          <input
//                            type="radio"
//                            value="Pickup"
//                            checked={deliveryMethod === "Pickup"}
//                            onChange={() => handleDeliveryMethodChange("Pickup")}
//                          />
//                          Pickup in Store

//                        </div>
//                        <FaStore className="text-gray-600" />
//                      </label>
//                    </div>
//                  </div>
//                )}
//                {showShippingForm && deliveryMethod === "Ship" && (
//                  <div className="mb-6 space-y-4">
//                    <input
//                      type="text"
//                      placeholder="Address"
//                      name="address"
//                      value={formData.address}
//                      onChange={handleChange}
//                      className="w-full p-2 border rounded"
//                      required
//                    />
//                    <input
//                      type="text"
//                      placeholder="City"
//                      name="city"
//                      value={formData.city}
//                      onChange={handleChange}
//                      className="w-full p-2 border rounded"
//                      required
//                    />
//                    <input
//                      type="text"
//                      placeholder="Zip / Postal Code"
//                      name="postalCode"
//                      value={formData.postalCode}
//                      onChange={handleChange}
//                      className="w-full p-2 border rounded"
//                      required
//                    />
//                  </div>
//                )}
//                {!showSummary && (
//                  <button
//                    className="w-full bg-blue-600 text-white p-2 rounded mt-4"
//                    onClick={handleDeliveryContinue}
//                  >
//                    Continue
//                  </button>
//                )}
//                {showSummary && (
//                  <div className="mb-6 p-4 bg-gray-100 rounded-lg">
//                    <p className="text-lg font-medium">
//                      {deliveryMethod === "Ship"
//                        ? `${formData.address}, ${formData.city}, ${formData.region} - ${formData.postalCode}`
//                        : (   <div className="p-4 bg-gray-100 rounded-lg">
//                         <h3 className="font-semibold">Store Pickup [Madipakkam]</h3>
//                         <p className="text-gray-700">5, Sabari Salai, Chennai, Tamil Nadu, 600091, India</p>
//                         <p className="text-gray-700">Pickup Time (11AM - 7PM)</p>
//                         <div className="p-4 bg-white border rounded-lg mt-2">
//                           <h4 className="font-semibold">Pickup instructions</h4>
//                           <p className="text-gray-600 text-sm mt-1">
//                             Dear Customer, We are pleased to inform you that store pickup is currently available at our Madipakkam Store only.
//                             However, if you prefer to pickup from any of our outlets, please let us know in advance before placing an order.
//                             Call +91 73053 29826
//                           </p>
//                         </div>
//                       </div>) }
//                    </p>
//                    {deliveryMethod === "Ship" && (
//                      <button
//                        className="border px-3 py-1 rounded text-blue-600 mt-4"
//                        onClick={handleEditSummary}
//                      >
//                        Edit
//                      </button>
//                    )}
//                  </div>
//                )}
//              </>
//            )}
//          </div>
//        </div>
//         </div>

//         {/* Right Section - Product Details */}
//         <motion.div
//           className="lg:w-2/3   w-full p-6 max-md:p-2 "
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="  lg:sticky   lg:top-24 max-md:top-20 bg-slate-50 lg:p-4 max-lg:w-full max-md:px-2   rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >

//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//               {/* Cart Items Display */}
//               <div className="mb-6 border-b pb-4">
//                 {cake_list.map((item) => {
//                   if (cartItems[item._id] > 0) {
//                     return (
//                       <div
//                         key={item._id}
//                         className="flex items-center gap-4 p-2 border-b"
//                       >
//                         <img
//                           src={`http://localhost:4000/images/${
//                             item.images?.length > 0
//                               ? item.images[0]
//                               : "default.jpg"
//                           }`}
//                           alt={item.name}
//                           className="w-16 h-16 object-cover border border-gray-300"
//                         />
//                         <div className="flex-1">
//                           <p className="font-medium">{item.name}</p>
//                           <p className="text-gray-600">
//                             Qty: {cartItems[item._id]}
//                           </p>
//                         </div>
//                         <p className="font-semibold">
//                           ₹{item.price * cartItems[item._id]}
//                         </p>
//                       </div>
//                     );
//                   }
//                   return null;
//                 })}
//               </div>

//               {/* Cart Totals */}
//               <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
//               <div className="flex justify-between text-lg">
//                 <p>Subtotal</p>
//                 <p>₹{getTotalCartAmount()}</p>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between text-lg">
//                 <p>Delivery Fee</p>
//                 <p>₹{getTotalCartAmount() === 0 ? 0 : 30}</p>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between text-lg font-bold">
//                 <p>Total</p>
//                 <p>
//                   ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
//                 </p>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600 transition"
//               >
//                 PROCEED TO PAYMENT
//               </button>

//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;

// testing

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { FaTruck, FaStore, FaEdit } from "react-icons/fa";

const PlaceOrder = () => {
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [sameAsDelivery, setSameAsDelivery] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "India",
    address: "",
    city: "",
    region: "Tamil Nadu",
    postalCode: "",
  });

  const [selectedPayment, setSelectedPayment] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCustomerContinue = () => {
    setStep(2);
    setShowDeliveryOptions(true);
  };

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
    setShowShippingForm(method === "Ship");
  };

  const handleDeliveryContinue = () => {
    setShowShippingForm(false);
    setShowDeliveryOptions(false);
    setShowSummary(true);
    setShowPaymentSection(true);
  };

  const handleEditDeliveryMethod = () => {
    setShowSummary(false);
    setShowDeliveryOptions(true);
    setShowShippingForm(false);
    setShowPaymentSection(false);
  };

  const handleEditSummary = () => {
    setShowSummary(false);
    setShowShippingForm(true);
    setShowDeliveryOptions(false);
  };

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  const { getTotalCartAmount, token, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, cake_list } = location.state || {};

  const placeOrder = async (event) => {
    event.preventDefault();
    console.log("Cart Items Before Order:", cartItems);
  
    // ✅ Extract selected cake details (name & image) based on cart items
    const selectedCakes = Object.keys(cartItems)
      .map((cartKey) => {
        const [cakeId] = cartKey.split("-"); // Extract cake ID
        const cake = cake_list.find((item) => item._id === cakeId); // Find the cake
  
        return cake
          ? {
              id: cake._id,
              name: cake.name,
              image: cake.images?.length > 0 ? cake.images[0] : "default.jpg",
            }
          : null;
      })
      .filter((item) => item !== null); // Remove null values
  
    console.log("Selected Cakes:", selectedCakes);
  
    // ✅ Ensure user is logged in
    if (!token) {
      alert("You need to log in to place an order.");
      return;
    }
  
    // ✅ Extract userId from token (JWT)
    let userId;
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      userId = decodedToken.id;
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Session expired. Please log in again.");
      return;
    }
  
    // ✅ Ensure cartItems exist
    if (!cartItems || Object.keys(cartItems).length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }
  
    // ✅ Create order items
    let orderItems = Object.entries(cartItems)
      .map(([key, quantity]) => {
        const [itemId, weight] = key.split("-");
        const item = cake_list.find((cake) => cake._id === itemId);
        const selectedCake = selectedCakes.find((cake) => cake.id === itemId); // Match cake by ID
  
        return item
          ? {
              image: selectedCake?.image || "default.jpg", // Get image from selectedCakes
              name: selectedCake?.name || item.name, // Get name from selectedCakes
              itemId,
              weight,
              quantity,
              price: Number(item.prices[weight]), // Convert price to number
            }
          : null;
      })
      .filter((item) => item !== null); // Remove null values
  
    console.log("Order Items:", orderItems);
  
    // ✅ Validate address fields
    if (!formData.address || !formData.city || !formData.postalCode) {
      alert("Please complete your address details.");
      return;
    }
  
    // ✅ Ensure getTotalCartAmount is available
    const totalAmount =
      typeof getTotalCartAmount === "function" ? getTotalCartAmount() + 30 : 30;
  
    const orderData = {
      userId,
      address: formData,
      items: orderItems,
      amount: totalAmount,
    };
  
    console.log("orderData:", JSON.stringify(orderData, null, 2));
    console.log("Token being sent:", token);
  
    try {
      let response = await axios.post(`${url}api/order/place`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("Error placing order. Please check your details and try again.");
    }
  };
  

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token, navigate, getTotalCartAmount]); // If issues persist, consider removing `getTotalCartAmount` from dependencies

  return (
    <div className="flex flex-col w-full max-md:px-1 items-center">
      <form
        onSubmit={placeOrder}
        className="flex flex-col lg:flex-row w-full pt-20"
      >
        {/* Left Section */}
        <div className="lg:w-2/3  space-y-6 overflow-auto hide-scrollbar smooth-scroll max-md:w-full p-4 max-md:p-1   lg:h-[700px] flex flex-col items-center py-5">
          <div className="flex flex-col items-center pb-10 ">
            <div className="bg-white shadow-lg rounded-xl p-4 max-md:p-2 max-md:py-2 md:p-6 w-full md:w-[700px] mx-auto">
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Customer Details
              </h2>
              <hr className="my-4" />

              {/* Moved Customer Details Summary Here */}
              {step === 2 && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                  <div>
                    <p className="text-base md:text-lg font-medium">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      {formData.email}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      {formData.phone}
                    </p>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="mb-6 space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-2.5 border rounded"
                    required
                  />
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full sm:w-1/2 p-2 sm:p-2.5 border rounded"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full sm:w-1/2 p-2 sm:p-2.5 border rounded"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-2.5 border rounded"
                    required
                  />
                  <button
                    className="w-full bg-blue-600 text-white p-2 sm:p-2.5 rounded mt-4"
                    onClick={handleCustomerContinue}
                  >
                    Continue
                  </button>
                </div>
              )}

              <div className="flex w-full justify-between items-center px-2">
                <h2 className="text-lg md:text-xl font-semibold mb-4 flex-1">
                  Delivery Method
                </h2>
                {showSummary && (
                  <button
                    className="text-blue-600 hover:text-blue-700 ml-4"
                    onClick={handleEditDeliveryMethod}
                  >
                    <FaEdit className="w-5 h-5 mb-4" />
                  </button>
                )}
              </div>

              <hr className="my-4" />

              {step === 2 && (
                <>
                  <h2 className="text-lg md:text-xl font-semibold mb-4 flex justify-between items-center"></h2>

                  {!showSummary && showDeliveryOptions && (
                    <div className="mb-6 space-y-3 sm:space-y-4">
                      <div className="border rounded-lg overflow-hidden">
                        <label
                          className={`flex justify-between items-center p-3 sm:p-4 cursor-pointer ${
                            deliveryMethod === "Ship" ? "bg-gray-100" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              value="Ship"
                              checked={deliveryMethod === "Ship"}
                              onChange={() =>
                                handleDeliveryMethodChange("Ship")
                              }
                            />
                            Ship
                          </div>
                          <FaTruck className="text-gray-600" />
                        </label>
                        <label
                          className={`flex justify-between items-center p-3 sm:p-4 cursor-pointer ${
                            deliveryMethod === "Pickup" ? "bg-gray-100" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              value="Pickup"
                              checked={deliveryMethod === "Pickup"}
                              onChange={() =>
                                handleDeliveryMethodChange("Pickup")
                              }
                            />
                            Pickup in Store
                          </div>
                          <FaStore className="text-gray-600" />
                        </label>
                      </div>
                    </div>
                  )}
                  {showShippingForm && deliveryMethod === "Ship" && (
                    <div className="mb-6 space-y-3 sm:space-y-4">
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-2.5 border rounded"
                        required
                      />
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-2.5 border rounded"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Zip / Postal Code"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-2.5 border rounded"
                        required
                      />
                    </div>
                  )}
                  {!showSummary && (
                    <button
                      className="w-full bg-blue-600 text-white p-2 sm:p-2.5 rounded mt-4"
                      onClick={handleDeliveryContinue}
                    >
                      Continue
                    </button>
                  )}
                  {showSummary && (
                    <div className="mb-6 p-2 bg-gray-100 rounded-lg">
                      <p className="text-base md:text-lg font-medium">
                        {deliveryMethod === "Ship" ? (
                          `${formData.address}, ${formData.city}, ${formData.region} - ${formData.postalCode}`
                        ) : (
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <h3 className="font-semibold">
                              Store Pickup [Madipakkam]
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base">
                              5, Sabari Salai, Chennai, Tamil Nadu, 600091,
                              India
                            </p>
                            <p className="text-gray-700 text-sm md:text-base">
                              Pickup Time (11AM - 7PM)
                            </p>
                            <div className="p-4 bg-white border rounded-lg mt-2">
                              <h4 className="font-semibold">
                                Pickup instructions
                              </h4>
                              <p className="text-gray-600 text-sm mt-1">
                                Dear Customer, We are pleased to inform you that
                                store pickup is currently available at our
                                Madipakkam Store only. However, if you prefer to
                                pickup from any of our outlets, please let us
                                know in advance before placing an order. Call
                                +91 73053 29826
                              </p>
                            </div>
                          </div>
                        )}
                      </p>
                      {deliveryMethod === "Ship" && (
                        <button
                          className="border px-3 py-1 rounded text-blue-600 mt-4"
                          onClick={handleEditSummary}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  )}
                </>
              )}

              <div className="flex w-full justify-between mt-4 items-center px-2">
                <h2 className="text-lg md:text-xl font-semibold mb-4 flex-1">
                  Payment Method
                </h2>
              </div>

              <hr className="my-4" />

              {showPaymentSection && (
                <div className="mb-6 space-y-3 sm:space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <label
                      className={`flex justify-between items-center p-3 sm:p-4 cursor-pointer ${
                        selectedPayment === "Razorpay" ? "bg-blue-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="Razorpay"
                          checked={selectedPayment === "Razorpay"}
                          onChange={() => handlePaymentChange("Razorpay")}
                        />
                        Razorpay
                      </div>
                      <img
                        src="https://wixmp-6613fa290e8c1ac70a0297b6.wixmp.com/payment-method-types/buyer/93d8c543-16b2-4d20-91c7-4afa511dbd2c_1__.svg"
                        alt="Razorpay"
                        className="h-6"
                      />
                    </label>
                    <label
                      className={`flex justify-between items-center p-3 sm:p-4 cursor-pointer ${
                        selectedPayment === "Cashfree" ? "bg-blue-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="Cashfree"
                          checked={selectedPayment === "Cashfree"}
                          onChange={() => handlePaymentChange("Cashfree")}
                        />
                        Cashfree Payments
                      </div>
                      <img
                        src="https://wixmp-6613fa290e8c1ac70a0297b6.wixmp.com/payment-method-types/buyer/9e300754-4797-4d4f-b3cb-d2174c1a7c9a_1__.svg"
                        alt="Cashfree Payments"
                        className="h-6"
                      />
                    </label>
                  </div>
                </div>
              )}

              {selectedPayment && (
                <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
                  <span>ℹ️</span>
                  <p className="text-gray-600 text-sm md:text-base">
                    Once you click to proceed, you will be redirected to{" "}
                    {selectedPayment}
                  </p>
                </div>
              )}

              {/* Billing Address Form (Visible only when payment is selected) */}
              {selectedPayment && (
                <div className="mb-6  mt-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={sameAsDelivery}
                      onChange={() => setSameAsDelivery(!sameAsDelivery)}
                    />
                    <span className="text-sm md:text-base">
                      Same as delivery address
                    </span>
                  </label>
                  {!sameAsDelivery && (
                    <>
                      <div className="space-y-3 sm:space-y-4 mt-4">
                        <input
                          type="text"
                          placeholder="First name"
                          value={formData.firstName}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                        <input
                          type="text"
                          placeholder="Phone"
                          value={formData.phone}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                        <select
                          value={formData.country}
                          className="border p-2 sm:p-2.5 w-full"
                        >
                          <option>India</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Address"
                          value={formData.address}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                        <select
                          value={formData.region}
                          className="border p-2 sm:p-2.5 w-full"
                        >
                          <option>Tamil Nadu</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Zip / Postal code"
                          value={formData.zip}
                          className="border p-2 sm:p-2.5 w-full"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Review & place order */}
              <div className="w-full mx-auto mt-5 rounded-lg">
                <h2 className="py-3 text-lg md:text-xl font-semibold">
                  Review & place order
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Review your details above and continue when you're ready.
                </p>

                {/* First Checkbox */}
                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700 text-sm md:text-base">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Feedback
                    </a>{" "}
                    *
                  </label>
                </div>

                {/* Second Checkbox */}
                <div className="flex items-start mt-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700 text-sm md:text-base">
                    I agree to receive marketing communications via email and/or
                    SMS to any emails and phone numbers added above.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <motion.div
          className="lg:w-2/3   w-full p-6 max-md:p-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="  lg:sticky lg:top-20  max-md:top-20 bg-slate-50 lg:p-4 max-lg:w-full max-md:px-2   rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {/* Cart Items Display */}
            <div className="mb-6 border-b pb-4">
              {cake_list.map((item) =>
                item.weights.map((weight) => {
                  const cartKey = `${item._id}-${weight}`;
                  if (cartItems[cartKey] > 0) {
                    return (
                      <div
                        key={cartKey}
                        className="flex items-center gap-4 p-2 border-b"
                      >
                        <img
                          src={`http://localhost:4000/images/${
                            item.images?.length > 0
                              ? item.images[0]
                              : "default.jpg"
                          }`}
                          alt={item.name}
                          className="w-16 h-16 object-cover border border-gray-300"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500 text-sm">
                            Weight: {weight}
                          </p>
                          <p className="text-gray-600">
                            Qty: {cartItems[cartKey]}
                          </p>
                        </div>
                        <p className="font-semibold">
                          ₹{item.prices[weight] * cartItems[cartKey]}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })
              )}
            </div>

            {/* Cart Totals */}
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between text-lg">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 30}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600 transition"
            >
              PROCEED TO PAYMENT
            </button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default PlaceOrder;
