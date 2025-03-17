import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductTabs = ({ props, productId, ProductReviews }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tabs = [
    {
      label: "Description",
      content: <CareInstructions props={props} />,
    },
    {
      label: "Customer Reviews",
      content: (
        <ReviewSection productId={productId} ProductReviews={ProductReviews} />
      ),
    },
    { label: "Delivery Information", content: <DeliveryInfo /> },
    { label: "Return Policies", content: <CancellationPolicy /> },
  ];

  return (
    <div
      className={` mt-6  ${
        isSmallScreen ? "w-full max-w-screen-lg" : "max-w-screen-xl"
      }`}
    >
      {isSmallScreen ? (
        <div>
          {tabs.map((tab, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className="text-black"> {tab.label}</p>
              </AccordionSummary>
              <AccordionDetails>{tab.content}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <div>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
          <div className="mt-6 text-gray-900">{tabs[activeTab].content}</div>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;

const CancellationPolicy = () => {
  return (
    <div className="max-w-5xl    lg:p-2 bg-white  rounded-lg">
      <h2 className="text-2xl max-md:hidden font-bold text-gray-800 border-b pb-2 mb-4">
        Cancellation and Refund Policy
      </h2>
      <ul className="list-decimal text-lg space-y-4 max-md:space-y-1  max-md:text-base text-gray-700 max-md:pl-4 pl-6">
        <li>
          Since all orders are customized as per the customer’s requirement and
          are perishable in nature, refund on any cancellation is not possible
          on the same day.
        </li>
        <li>
          It is required that 1-day prior notice of cancellation be given for
          regular cakes and 2-days prior notice be given for large or special
          cakes. Refund charges of 5% per order shall be applicable.
        </li>
        <li>
          Cancellation of Order shall be mailed by the customer at{" "}
          <a href="mailto:care@bakingo.com" className="text-blue-600 underline">
            care@bakingo.com
          </a>{" "}
          with the Subject: <strong>“Cancellation Request”</strong> and
          specifying in the mail:
          <ul className="list-disc pl-6 mt-2">
            <li>Order ID</li>
            <li>Reasons for Cancellation</li>
          </ul>
        </li>
        <li>
          Bakingo will issue a refund to the same card/account/medium through
          which you have made the payment in case of cancellation.
        </li>
        <li>
          All refunds shall be made within the period of 2-3 working days from
          the date of cancellation.
        </li>
        <li>
          It is entirely up to Bakingo’s discretion to change, cancel, refund or
          otherwise offer any other option to the customer.
        </li>
        <li>
          In case of any refund, the amount will be credited as Bakingo Cash
          points into your Bakingo Wallet for any future purchase.
        </li>
      </ul>
    </div>
  );
};

const DeliveryInfo = () => {
  return (
    <div className="max-w-5xl   lg:p-2 bg-white  rounded-lg">
      <h2 className="text-2xl max-md:hidden font-bold text-gray-800 border-b pb-2 mb-4">
        Delivery Information
      </h2>
      <ul className="list-disc text-lg space-y-4 max-md:space-y-1 max-md:text-base text-gray-700 max-md:pl-4 pl-6">
        <li>
          Every cake we offer is handcrafted, and since each chef has their own
          way of baking and designing a cake, there might be slight variations
          in the product in terms of design and shape.
        </li>
        <li>
          Trust our process! We use the best ingredients for a healthy and happy
          experience with our cakes.
        </li>
        <li>
          The chosen delivery time is an estimate and depends on the
          availability of the product and the destination to which you want the
          product to be delivered. Delivery may be delayed due to weather or
          traffic conditions.
        </li>
        <li>
          Since cakes are perishable in nature, we attempt delivery of your
          order only once. The delivery cannot be redirected to any other
          address.
        </li>
        <li>
          This product is hand-delivered and will not be delivered along with
          courier products.
        </li>
        <li>
          Occasionally, substitutions of flavors/designs are necessary due to
          temporary and/or regional unavailability issues.
        </li>
      </ul>
    </div>
  );
};

const CareInstructions = ({ props }) => {
  return (
    <div className="max-w-5xl   lg:p-2  bg-white  rounded-lg">
      <h2 className="text-2xl  max-md:hidden font-bold text-gray-800 border-b pb-2 mb-4">
        Product Description
      </h2>
      <p className="text-lg  max-md:text-base  text-gray-700 ">{props}</p>

      <h2 className="text-2xl mt-3 font-bold text-gray-800 border-b pb-2 mb-4">
        Care Instruction1
      </h2>
      <ul className="list-disc text-lg space-y-4 max-md:space-y-1 max-md:text-base  text-gray-700  max-md:pl-4 pl-6">
        <li>All cakes must be stored in the refrigerator.</li>
        <li>
          Cakes ordered with fondant must be stored in an air-conditioned
          environment.
        </li>
        <li>Do not serve the cake in exposed heat.</li>
        <li>Use a bread knife to slice fondant cakes.</li>
        <li>
          Sculptural elements and figurines may contain wire supports,
          toothpicks, or wooden skewers for structural support.
        </li>
        <li>
          Please check the placement of these items before serving them to small
          children.
        </li>
        <li>The cake should be consumed within 24 hours.</li>
        <li className="font-semibold">
          Enjoy your cake and celebrate life! 🎉
        </li>
      </ul>
    </div>
  );
};

// import axios from "axios";

// export function ReviewSection({ productId, ProductReviews }) {
//   const [reviews, setReviews] = useState(ProductReviews || []);
//   const [showReviewForm, setShowReviewForm] = useState(false);
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("productId", productId);
//     formData.append("name", name);
//     formData.append("comment", comment);
//     if (image) formData.append("reviewerImage", image);

//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/cake/review",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setReviews((prevReviews) => [...prevReviews, response.data.review]);
//       setShowReviewForm(false);
//       setName("");
//       setComment("");
//       setImage(null);
//     } catch (error) {
//       console.error("Error posting review:", error);
//     }
//   };
//   return (
//     <div className="p-6 border rounded-lg shadow-md bg-white max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800">Ratings & Reviews</h2>

//       {/* Review Images */}
//       {reviews.length > 0 && (
//         <div className="flex space-x-2 mt-4 overflow-x-auto">
//           {reviews.slice(0, 5).map((r, index) => (
//             <img
//               key={index}
//               src={`http://localhost:4000/images/${r.ReviewerImage}`}
//               alt="review"
//               className="w-16 h-16 object-cover rounded-full border"
//             />
//           ))}
//         </div>
//       )}

//       {/* Review List */}
//       {reviews.length > 0 ? (
//         reviews.map((r, index) => (
//           <div key={index} className="mt-4 border p-3 rounded-lg bg-gray-50">
//             <h3 className="font-semibold text-gray-700">{r.ReviewTitle}</h3>
//             <p className="text-gray-600">{r.Review}</p>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500 mt-6">No reviews yet.</p>
//       )}

//       {/* Add Review Button */}
//       <button
//         onClick={() => setShowReviewForm(!showReviewForm)}
//         className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//       >
//         {showReviewForm ? "Cancel" : "Add Review"}
//       </button>

//       {/* Review Form */}
//       {showReviewForm && (
//         <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
//           <h2 className="text-lg font-bold mb-3">Add a Review</h2>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <textarea
//               placeholder="Write a review..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             ></textarea>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//               className="w-full p-2 border rounded"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
export function ReviewSection({ productId, ProductReviews }) {
  const [reviews, setReviews] = useState(ProductReviews || []);
  const [selectedReview, setSelectedReview] = useState(null);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Disable scrolling when popup is open
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [showPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("name", name);
    formData.append("comment", comment);
    if (image) formData.append("reviewerImage", image);

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/cake/review",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviews((prevReviews) => [...prevReviews, response.data.review]);
      setShowReviewForm(false);
      setName("");
      setComment("");
      setImage(null);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div className="   max-w-5xl  mx-auto">
      <h2 className="text-xl max-md:pl-3 md:text-2xl max-md:hidden font-bold text-gray-800">
        Ratings & Reviews
      </h2>

      {/* Review Images */}
      {reviews.length > 0 && (
        <div className="flex flex-wrap   justify-evenly w-full gap-3 mt-4">
          <div className="flex flex-wrap justify-evenly w-full gap-4 max-md:hidden">
            {reviews.slice(0, 5).map((r, index) => (
              <img
                key={index}
                src={`http://localhost:4000/images/${r.ReviewerImage}`}
                alt="review"
                className="w-44 h-32 md:w-32 md:h-32 object-cover rounded-lg border cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setSelectedReview(r)}
              />
            ))}

            {reviews.length > 5 && (
              <div
                className="relative w-44 h-32 md:w-32 md:h-32 rounded-lg border cursor-pointer flex items-center justify-center bg-gray-200 transition-transform duration-200 hover:scale-105"
                onClick={() => setShowPopup(true)}
              >
                <span className="absolute text-white text-sm md:text-base font-bold bg-black bg-opacity-50 px-4 py-10 rounded-lg">
                  View More
                </span>
                <img
                  src={`http://localhost:4000/images/${reviews[5].ReviewerImage}`}
                  alt="more"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-evenly w-full gap-1 lg:hidden">
            {reviews.slice(0, 3).map((r, index) => (
              <img
                key={index}
                src={`http://localhost:4000/images/${r.ReviewerImage}`}
                alt="review"
                className="w-14 h-14   object-cover rounded-lg border cursor-pointer"
                onClick={() => setSelectedReview(r)}
              />
            ))}
            {reviews.length > 3 && (
              <div
                className="relative w-12 h-12  rounded-lg border cursor-pointer flex items-center justify-center bg-gray-200"
                onClick={() => setShowPopup(true)}
              >
                <span
                  onClick={() => setShowPopup(true)}
                  className="absolute text-white text-xs md:text-sm font-bold bg-black bg-opacity-50 px-1 py-2.5 rounded"
                >
                  View More
                </span>
                <img
                  src={`http://localhost:4000/images/${reviews[5].ReviewerImage}`}
                  alt="more"
                  className="w-14 h-14 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Last Image with "View More" */}
        </div>
      )}

      {/* Add Review Button */}

      <div className="flex flex-col md:flex-row items-center justify-between w-full my-4 py-5 gap-3 md:gap-0">
        <p className="text-2xl md:text-xl font-semibold text-gray-700 text-center md:text-left">
          Share your experience with this product!
        </p>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-blue-600 text-white px-5 py-2  hover:bg-blue-700 transition w-full md:w-auto"
        >
          {showReviewForm ? "Cancel" : "Add Review"}
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="mt-4 lg:p-2  ">
          <h2 className="text-lg font-bold mb-3">Add a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Write a review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded"
              required
            ></textarea>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <p className="text-xl max-md:pl-3 md:text-2xl max-md:hidden font-bold text-gray-800 border-t-2 py-3">
        {" "}
        Reviews
      </p>
      {/* Review List */}
      {reviews.length > 0 ? (
        reviews.map((r, index) => {
          // Ensure createdAt exists and is valid
          const reviewDate = r.createdAt ? new Date(r.createdAt) : null;

          return (
            <div
              key={index}
              onClick={() => setSelectedReview(r)}
              className="mt-4 border p-3 md:p-4 rounded-lg bg-gray-50 transition hover:shadow-md cursor-pointer"
            >
              {/* User Info & Time */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                {/* User Icon & Name */}
                <div className="flex items-center gap-2">
                  <div>
                    <p className="w-10 h-10 md:w-12 md:h-12 rounded-full border">
                      <IoIosContact className="w-10 h-10 md:w-12 text-gray-600 font-light md:h-12 rounded-full border" />
                    </p>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-xl max-md:text-lg">
                    {r.ReviewerName}
                  </h3>
                </div>

                {/* Review Time */}
                <p className="max-md:text-xs text-sm text-gray-500">
                  {reviewDate
                    ? reviewDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "Unknown Date"}
                </p>
              </div>

              {/* Review Title */}
              <h2 className="text-base md:text-lg font-bold mt-3">
                {r.ReviewTitle}
              </h2>

              {/* Review Content */}
              <p className="text-gray-600 text-sm md:text-base line-clamp-2 mt-1">
                {r.Review}{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  ...more
                </span>
              </p>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 mt-4">No reviews yet.</p>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-bold">
                Reviews with Images
              </h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Full Review Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 overflow-y-auto max-h-[80vh] scrollbar-hidden">
              {reviews.map((r, index) => (
                <img
                  key={index}
                  src={`http://localhost:4000/images/${r.ReviewerImage}`}
                  alt="review"
                  className="w-full max-md:h-40 h-56 md:h-40 object-cover rounded-lg border cursor-pointer"
                  onClick={() => setSelectedReview(r)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex   items-center justify-center z-50">
          <div className="bg-white p-4   md:p-6 rounded-lg shadow-lg max-w-4xl max-md:max-w-2xl max-md:flex-col  w-full flex overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-1/2 max-md:w-full p-2">
              <img
                src={`http://localhost:4000/images/${
                  selectedReview.ReviewerImage || "default-user.png"
                }`}
                alt="review"
                className="w-full h-auto max-md:h-48 object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Review */}
            <div className="w-1/2 max-md:w-full  lg:p-4 flex flex-col relative">
              <img
                src={`http://localhost:4000/images/${
                  selectedReview.UserImage || "default-user.png"
                }`}
                alt="user"
                className="w-10 h-10 max-md:w-5 max-md:h-5 rounded-full border"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              >
                ✕
              </button>

              {/* Reviewer Name & Date */}
              <div className="mb-3">
                <h3 className="text-gray-700 font-semibold text-lg">
                  {selectedReview.ReviewerName}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedReview.createdAt
                    ? new Date(selectedReview.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )
                    : "Unknown Date"}
                </p>
              </div>

              {/* Review Title */}
              <h2 className="text-lg md:text-xl font-bold">
                {selectedReview.ReviewTitle}
              </h2>

              {/* Review Content */}
              <p className="text-gray-600 mt-2 max-md:text-base ">
                {selectedReview.Review}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
