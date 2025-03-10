

// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { StoreContext } from "../../context/StoreContext";

// const MyOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // ✅ Fetch Orders Function
//   const fetchOrders = async () => {
//     try {
//       const response = await axios.post(
//         `${url}api/order/userorders`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//   }, [token]);

//   // ✅ Handle Track Order Click
//   const handleTrackOrder = (order) => {
//     setSelectedOrder(order);
//     setIsModalOpen(true);
//   };

//   // ✅ Close Modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedOrder(null);
//   };

//   // ✅ Get Cake-Themed Status Message
//   const getStatusMessage = (status) => {
//     switch (status.toLowerCase()) {
//       case "processing":
//         return "🎂 Your cake is being freshly baked! Our expert bakers are crafting your delicious treat with love and care. We'll notify you once it's ready to go!";

//       case "out for delivery":
//         return "🚚 Your cake is on the way! Get ready to celebrate with sweetness. Our delivery team is making sure it arrives fresh and perfect for you! 🎉";

//       case "delivered":
//         return "🎊 Your cake has arrived! We hope it brings joy and sweetness to your special moment. Thank you for choosing us for your celebration! 🍰❤️";

//       case "cancelled":
//         return "⚠️ Your order has been cancelled. If this was a mistake or you need help, feel free to contact our support team. We’d love to serve you again! 💌";

//       default:
//         return "🍪 Your order is being processed! We’ll keep you updated as it moves through each step. Thank you for your patience! 🥰";
//     }
//   };

//   // ✅ Progress Bar Steps
//   const getProgressStep = (status) => {
//     switch (status.toLowerCase()) {
//       case "processing":
//         return 1;
//       case "out for delivery":
//         return 2;
//       case "delivered":
//         return 3;
//       default:
//         return 0;
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto my-12 px-4">
//       <h2 className="text-2xl font-semibold text-gray-800 text-center">
//         My Orders
//       </h2>
//       <div className="flex flex-col gap-6 mt-6">
//         {data.map((order, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center p-4 border border-red-500 rounded-lg shadow-md text-gray-700"
//           >
//             {/* ✅ Show Order Image */}
//             <img
//               src={`http://localhost:4000/images/${order.items[0]?.image}`}
//               alt={order.items[0]?.name || "Product"}
//               className="w-16 h-16 object-cover border border-gray-300 mx-auto"
//             />

//             {/* ✅ Show Name & Quantity */}
//             <p className="text-center text-sm md:text-base">
//               {order.items.map((item, idx) => (
//                 <span key={idx}>
//                   {item.name} (Qty: {item.quantity})
//                   {idx !== order.items.length - 1 ? ", " : ""}
//                 </span>
//               ))}
//             </p>

//             {/* ✅ Show Total Amount */}
//             <p className="text-center font-semibold text-gray-900">
//               ₹{order.amount}.00
//             </p>

//             {/* ✅ Show Number of Items */}
//             <p className="text-center">Items: {order.items.length}</p>

//             {/* ✅ Show Order Status */}
//             <p className="text-center flex items-center justify-center gap-2">
//               <span className="text-red-500">&#x25cf;</span>
//               <b className="font-medium text-gray-900">{order.status}</b>
//             </p>

//             {/* ✅ Show Payment Status */}
//             <p className="text-center font-medium">
//               {order.payment ? (
//                 <span className="text-green-600">Paid</span>
//               ) : (
//                 <span className="text-red-600">Unpaid</span>
//               )}
//             </p>

//             {/* ✅ Track Order Button (Fixed Placement) */}
//             <button
//               onClick={() => handleTrackOrder(order)}
//               className="bg-red-100 text-gray-800 py-1 px-2 rounded-md text-sm hover:bg-red-200 transition"
//             >
//               Track Order
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Order Tracking Modal */}
//       {isModalOpen && selectedOrder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-semibold text-center text-gray-800">
//               Order Tracking
//             </h2>

//             {/* ✅ Order Status */}
//             <p className="mt-4 text-center">
//               <b>Status:</b>{" "}
//               <span className="text-red-500">{selectedOrder.status}</span>
//             </p>

//             {/* ✅ Status Message */}
//             <p className="mt-2 text-sm text-center text-gray-600">
//               {getStatusMessage(selectedOrder.status)}
//             </p>

//             {/* ✅ Progress Bar */}
//             <div className="mt-4 flex items-center justify-between w-full relative">
//               {["Processing", "Out for Delivery", "Delivered"].map(
//                 (step, idx) => (
//                   <div key={idx} className="flex-1 text-center relative">
//                     {/* ✅ Line between the dots */}
//                     {idx !== 0 && (
//                       <div
//                         className={`absolute top-1/2 left-0 w-full h-1 ${
//                           getProgressStep(selectedOrder.status) >= idx + 1
//                             ? "bg-green-500"
//                             : "bg-gray-300"
//                         }`}
//                       ></div>
//                     )}

//                     {/* ✅ Dot */}
//                     <div
//                       className={`relative z-10 w-6 h-6 mx-auto rounded-full ${
//                         getProgressStep(selectedOrder.status) >= idx + 1
//                           ? "bg-green-500"
//                           : "bg-gray-300"
//                       }`}
//                     ></div>

//                     {/* ✅ Step Label */}
//                     <p className="text-xs mt-2">{step}</p>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* ✅ Order Items */}
//             <div className="mt-4 space-y-4">
//               {selectedOrder.items.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-4 border-b pb-2"
//                 >
//                   <img
//                     src={`http://localhost:4000/images/${item.image}`}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded-lg border"
//                   />
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-gray-500">Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ✅ Close Button */}
//             <button
//               onClick={closeModal}
//               className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;


import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiCake, BiCheckCircle, BiCookie, BiXCircle } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 const navigate = useNavigate();
  // ✅ Fetch Orders Function
  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}api/order/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // ✅ Handle Track Order Click
  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // ✅ Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  // ✅ Get Status Message with Icons
  const getStatusMessage = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return (
          <span className="flex items-center gap-2 text-yellow-500">
            <BiCake size={20} /> Your cake is being freshly baked!
          </span>
        );

      case "out for delivery":
        return (
          <span className="flex justify-center items-center gap-2 ">
            <FaTruck size={20} /> Your cake is on the way!
          </span>
        );

      case "delivered":
        return (
          <span className="flex items-center gap-2 text-green-500">
            <BiCheckCircle size={20} /> Your cake has arrived! Enjoy!
          </span>
        );

      case "cancelled":
        return (
          <span className="flex items-center gap-2 text-red-500">
            <BiXCircle size={20} /> Your order has been cancelled.
          </span>
        );

      default:
        return (
          <span className="flex items-center gap-2 text-gray-500">
            <BiCookie size={20} /> Your order is being processed!
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        My Orders
      </h2>
      <div className="flex flex-col gap-6 mt-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center p-4 border border-red-500 rounded-lg shadow-md text-gray-700"
          >
            {/* ✅ Order Images */}
            <div className="flex flex-wrap gap-3 justify-center">
              {order.items.map((item, idx) => (
                <img
                  key={idx}
                  src={`https://cake-shop-backend-qfhf.onrender.com/images/${item.image}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover border border-gray-300 rounded-md cursor-pointer"
                  onClick={() => navigate(`/detail/${item.itemId}`)}
                />
              ))}
              <p className="text-center text-sm md:text-base mt-2">
              {order.items.map((item, idx) => (
                <span key={idx}>
                  {item.name} (Qty: {item.quantity})
                  {idx !== order.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            </div>

            {/* ✅ Order Name & Quantity */}
            

            {/* ✅ Total Amount */}
            <p className="text-center font-semibold text-gray-900">
              ₹{order.amount}.00
            </p>

            {/* ✅ Number of Items */}
            <p className="text-center">Items: {order.items.length}</p>

            {/* ✅ Order Status */}
            <p className="text-center flex items-center justify-center gap-2">
              <span className="text-red-500">&#x25cf;</span>
              <b className="font-medium text-gray-900">{order.status}</b>
            </p>

            {/* ✅ Payment Status */}
            <p className="text-center font-medium">
              {order.payment ? (
                <span className="text-green-600">Paid</span>
              ) : (
                <span className="text-red-600">Unpaid</span>
              )}
            </p>

            {/* ✅ Track Order Button */}
            <button
              onClick={() => handleTrackOrder(order)}
              className="bg-red-100 text-gray-800 py-1 px-2 rounded-md text-sm hover:bg-red-200 transition"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Order Tracking Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Order Tracking
            </h2>

            {/* ✅ Order Status */}
            <p className="mt-4 text-center">
              <b>Status:</b>{" "}
              <span className="text-red-500">{selectedOrder.status}</span>
            </p>

            {/* ✅ Status Message with Icon */}
            <p className="mt-2 text-sm text-center">{getStatusMessage(selectedOrder.status)}</p>

            {/* ✅ Order Items */}
            <div className="mt-4 space-y-4">
              {selectedOrder.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 border-b pb-2"
                >
                  <img
                    src={`https://cake-shop-backend-qfhf.onrender.com/images/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Close Button */}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
