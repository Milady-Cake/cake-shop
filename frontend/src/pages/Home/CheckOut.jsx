// // import React, { useState } from "react";
// // import { FaTruck, FaStore } from "react-icons/fa";

// // const CheckoutForm = () => {
// //   const [step, setStep] = useState(1);
// //   const [deliveryMethod, setDeliveryMethod] = useState("");
// //   const [showShippingForm, setShowShippingForm] = useState(false);
// //   const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
// //   const [showSummary, setShowSummary] = useState(false);

// //   const [formData, setFormData] = useState({
// //     email: "",
// //     firstName: "",
// //     lastName: "",
// //     phone: "",
// //     country: "India",
// //     address: "",
// //     city: "",
// //     region: "Tamil Nadu",
// //     postalCode: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleCustomerContinue = () => {
// //     setStep(2);
// //     setShowDeliveryOptions(true);
// //   };

// //   const handleDeliveryMethodChange = (method) => {
// //     setDeliveryMethod(method);
// //     setShowShippingForm(method === "Ship");
// //   };

// //   const handleDeliveryContinue = () => {
// //     setShowShippingForm(false);
// //     setShowDeliveryOptions(false);
// //     setShowSummary(true);
// //   };

// //   const handleEditDeliveryMethod = () => {
// //     setShowSummary(false);
// //     setShowDeliveryOptions(true);
// //     setShowShippingForm(false);
// //   };

// //   const handleEditSummary = () => {
// //     setShowSummary(false);
// //     setShowShippingForm(true);
// //     setShowDeliveryOptions(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center py-10 mt-14">
// //       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
// //         <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
// //         <hr className="my-4" />

// //         {step === 1 && (
// //           <div className="mb-6 space-y-4">
// //             <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
// //             <div className="flex gap-4">
// //               <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
// //               <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
// //             </div>
// //             <input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
// //             <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" onClick={handleCustomerContinue}>Continue</button>
// //           </div>
// //         )}

// //         <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
// //         <hr className="my-4" />

// //         {step === 2 && (
// //           <>
// //             <div className="mb-6 p-4 bg-gray-100 rounded-lg">
// //               <div>
// //                 <p className="text-lg font-medium">{formData.firstName} {formData.lastName}</p>
// //                 <p className="text-gray-600">{formData.email}</p>
// //                 <p className="text-gray-600">{formData.phone}</p>
// //               </div>
// //             </div>
// //             <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
// //               Delivery Method
// //               {showSummary && (
// //                 <button className="text-blue-600" onClick={handleEditDeliveryMethod}>
// //                   Edit
// //                 </button>
// //               )}
// //             </h2>
// //             <hr className="my-4" />
// //             {!showSummary && showDeliveryOptions && (
// //               <div className="mb-6 space-y-4">
// //                 <div className="border rounded-lg overflow-hidden">
// //                   <label className={`flex justify-between items-center p-4 cursor-pointer ${
// //                     deliveryMethod === "Ship" ? "bg-gray-100" : ""
// //                   }`}>
// //                     <div className="flex items-center gap-2">
// //                       <input
// //                         type="radio"
// //                         value="Ship"
// //                         checked={deliveryMethod === "Ship"}
// //                         onChange={() => handleDeliveryMethodChange("Ship")}
// //                       />
// //                       Ship
// //                     </div>
// //                     <FaTruck className="text-gray-600" />
// //                   </label>
// //                   <label className="flex justify-between items-center p-4 cursor-pointer">
// //                     <div className="flex items-center gap-2">
// //                       <input
// //                         type="radio"
// //                         value="Pickup"
// //                         checked={deliveryMethod === "Pickup"}
// //                         onChange={() => handleDeliveryMethodChange("Pickup")}
// //                       />
// //                       Pickup in Store
// //                     </div>
// //                     <FaStore className="text-gray-600" />
// //                   </label>
// //                 </div>
// //               </div>
// //             )}
// //             {showShippingForm && deliveryMethod === "Ship" && (
// //               <div className="mb-6 space-y-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Address"
// //                   name="address"
// //                   value={formData.address}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border rounded"
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="City"
// //                   name="city"
// //                   value={formData.city}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border rounded"
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Zip / Postal Code"
// //                   name="postalCode"
// //                   value={formData.postalCode}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border rounded"
// //                   required
// //                 />
// //               </div>
// //             )}
// //             {!showSummary && (
// //               <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" onClick={handleDeliveryContinue}>
// //                 Continue
// //               </button>
// //             )}
// //             {showSummary && (
// //               <div className="mb-6 p-4 bg-gray-100 rounded-lg">
// //                 <p className="text-lg font-medium">
// //                   {deliveryMethod === "Ship"
// //                     ? `${formData.address}, ${formData.city}, ${formData.region} - ${formData.postalCode}`
// //                     : "Pickup in Store"}
// //                 </p>
// //                 {deliveryMethod === "Ship" && (
// //                   <button className="border px-3 py-1 rounded text-blue-600 mt-4" onClick={handleEditSummary}>
// //                     Edit
// //                   </button>
// //                 )}
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutForm;

// // testing

// import React, { useState } from "react";
// import { FaTruck, FaStore } from "react-icons/fa";

// const CheckoutForm = () => {
//   const [step, setStep] = useState(1);
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

//   return (
//     <div className="flex flex-col items-center py-10 mt-14">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
//         <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
//         <hr className="my-4" />

//         {step === 1 && (
//           <div className="mb-6 space-y-4">
//             <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <div className="flex gap-4">
//               <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
//               <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
//             </div>
//             <input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" onClick={handleCustomerContinue}>Continue</button>
//           </div>
//         )}

//         <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
//         <hr className="my-4" />

//         {step === 2 && (
//           <>
//             <div className="mb-6 p-4 bg-gray-100 rounded-lg">
//               <div>
//                 <p className="text-lg font-medium">{formData.firstName} {formData.lastName}</p>
//                 <p className="text-gray-600">{formData.email}</p>
//                 <p className="text-gray-600">{formData.phone}</p>
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
//               Delivery Method
//               {showSummary && (
//                 <button className="text-blue-600" onClick={handleEditDeliveryMethod}>
//                   Edit
//                 </button>
//               )}
//             </h2>
//             <hr className="my-4" />
//             {!showSummary && showDeliveryOptions && (
//               <div className="mb-6 space-y-4">
//                 <div className="border rounded-lg overflow-hidden">
//                   <label className={`flex justify-between items-center p-4 cursor-pointer ${
//                     deliveryMethod === "Ship" ? "bg-gray-100" : ""
//                   }`}>
//                     <div className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         value="Ship"
//                         checked={deliveryMethod === "Ship"}
//                         onChange={() => handleDeliveryMethodChange("Ship")}
//                       />
//                       Ship
//                     </div>
//                     <FaTruck className="text-gray-600" />
//                   </label>
//                   <label className="flex justify-between items-center p-4 cursor-pointer">
//                     <div className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         value="Pickup"
//                         checked={deliveryMethod === "Pickup"}
//                         onChange={() => handleDeliveryMethodChange("Pickup")}
//                       />
//                       Pickup in Store
//                     </div>
//                     <FaStore className="text-gray-600" />
//                   </label>
//                 </div>
//               </div>
//             )}
//             {showShippingForm && deliveryMethod === "Ship" && (
//               <div className="mb-6 space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="City"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Zip / Postal Code"
//                   name="postalCode"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             )}
//             {!showSummary && (
//               <button className="w-full bg-blue-600 text-white p-2 rounded mt-4" onClick={handleDeliveryContinue}>
//                 Continue
//               </button>
//             )}
//             {showSummary && (
//               <div className="mb-6 p-4 bg-gray-100 rounded-lg">
//                 <p className="text-lg font-medium">
//                   {deliveryMethod === "Ship"
//                     ? `${formData.address}, ${formData.city}, ${formData.region} - ${formData.postalCode}`
//                     : "Pickup in Store"}
//                 </p>
//                 {deliveryMethod === "Ship" && (
//                   <button className="border px-3 py-1 rounded text-blue-600 mt-4" onClick={handleEditSummary}>
//                     Edit
//                   </button>
//                 )}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;

// deepseek

import React, { useState } from "react";
import { FaTruck, FaStore, FaEdit } from "react-icons/fa";

const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

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
    setStep(3);
    setShowShippingForm(false);
    setShowDeliveryOptions(false);
    setShowSummary(true);
  
  };

  const handleEditDeliveryMethod = () => {
    setShowSummary(false);
    setShowDeliveryOptions(true);
    setShowShippingForm(false);
  };

  const handleEditSummary = () => {
    setShowSummary(false);
    setShowShippingForm(true);
    setShowDeliveryOptions(false);
  };
    const handlePaymentChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="flex flex-col items-center py-10 mt-14">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <hr className="my-4" />

        {/* Moved Customer Details Summary Here */}
        {step === 2 && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg">
            <div>
              <p className="text-lg font-medium">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-gray-600">{formData.email}</p>
              <p className="text-gray-600">{formData.phone}</p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded mt-4"
              onClick={handleCustomerContinue}
            >
              Continue
            </button>
          </div>
        )}

        <div className="flex w-full justify-between items-center px-2">
          <h2 className="text-xl font-semibold mb-4 flex-1">Delivery Method</h2>
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
            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center"></h2>

            {!showSummary && showDeliveryOptions && (
              <div className="mb-6 space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <label
                    className={`flex justify-between items-center p-4 cursor-pointer ${
                      deliveryMethod === "Ship" ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Ship"
                        checked={deliveryMethod === "Ship"}
                        onChange={() => handleDeliveryMethodChange("Ship")}
                      />
                      Ship
                    </div>
                    <FaTruck className="text-gray-600" />
                  </label>
                  <label className="flex justify-between items-center p-4 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="Pickup"
                        checked={deliveryMethod === "Pickup"}
                        onChange={() => handleDeliveryMethodChange("Pickup")}
                      />
                      Pickup in Store
                    </div>
                    <FaStore className="text-gray-600" />
                  </label>
                </div>
              </div>
            )}
            {showShippingForm && deliveryMethod === "Ship" && (
              <div className="mb-6 space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Zip / Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            )}
            {!showSummary && (
              <button
                className="w-full bg-blue-600 text-white p-2 rounded mt-4"
                onClick={handleDeliveryContinue}
              >
                Continue
              </button>
            )}
            {showSummary && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-medium">
                  {deliveryMethod === "Ship"
                    ? `${formData.address}, ${formData.city}, ${formData.region} - ${formData.postalCode}`
                    : "Pickup in Store"}
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

<div className="flex w-full justify-between items-center px-2">
          <h2 className="text-xl font-semibold mb-4 flex-1">payment Method</h2>
          {showSummary && (
            <button
              className="text-blue-600 hover:text-blue-700 ml-4"
              onClick={handleEditDeliveryMethod}
            >
              <FaEdit className="w-5 h-5 mb-4" />
            </button>
          )}
        </div>

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <hr className="my-4" />
            <div className="mb-6 space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <label className={`flex justify-between items-center p-4 cursor-pointer ${selectedPayment === "Razorpay" ? "bg-blue-100" : ""}`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Razorpay"
                      checked={selectedPayment === "Razorpay"}
                      onChange={() => handlePaymentChange("Razorpay")}
                    />
                    Razorpay
                  </div>
                  <img src="/razorpay-logo.png" alt="Razorpay" className="h-6" />
                </label>
                <label className={`flex justify-between items-center p-4 cursor-pointer ${selectedPayment === "Cashfree" ? "bg-blue-100" : ""}`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Cashfree"
                      checked={selectedPayment === "Cashfree"}
                      onChange={() => handlePaymentChange("Cashfree")}
                    />
                    Cashfree Payments
                  </div>
                  <img src="/cashfree-logo.png" alt="Cashfree Payments" className="h-6" />
                </label>
              </div>
            </div>
            {selectedPayment && (
              <div className="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
                <span>ℹ️</span>
                <p className="text-gray-600">Once you click to proceed, you will be redirected to {selectedPayment}</p>
              </div>
            )}
            <button className="w-full bg-blue-600 text-white p-2 rounded mt-4">Continue</button>
          </>
        )}

        
      </div>
    </div>
  );
};

export default CheckoutForm;
