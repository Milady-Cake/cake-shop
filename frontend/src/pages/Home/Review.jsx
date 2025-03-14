// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Star } from "lucide-react";

// export default function ReviewSection() {
//   const [reviews, setReviews] = useState([]);
//   const [showReviewForm, setShowReviewForm] = useState(false);

//   // Review Form States
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/reviews") // API endpoint to fetch reviews
//       .then((response) => setReviews(response.data))
//       .catch((error) => console.error("Error fetching reviews:", error));
//   }, []);

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("comment", comment);
//     if (image) formData.append("image", image);

//     try {
//       const response = await axios.post(
//         " http://localhost:4000/api/cake/add",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setReviews([...reviews, response.data]); // Update the UI with the new review
//       setShowReviewForm(false);
//       setName("");
//       setComment("");
//       setImage(null);
//     } catch (error) {
//       console.error("Error posting review:", error);
//     }
//   };

//   return (
//     <div className="p-4 border rounded shadow-md">
//       <h2 className="text-xl font-bold">Ratings & Reviews</h2>
//       <div className="flex items-center mt-2">
//         <Star className="text-yellow-500" />
//         <span className="text-lg font-semibold">4.9 / 5</span>
//       </div>

//       {/* Display Reviews Images */}
//       <div className="flex space-x-2 mt-4 overflow-x-auto">
//         {reviews.slice(0, 5).map((r, index) => (
//           <img
//             key={index}
//             src={r.image}
//             alt="review"
//             className="w-20 h-20 object-cover rounded"
//           />
//         ))}
//       </div>

//       {/* Show All Reviews */}
//       {reviews.map((r, index) => (
//         <div key={index} className="mt-4 border p-2 rounded">
//           <h3 className="font-semibold">{r.name}</h3>
//           <p>{r.comment}</p>
//           {r.image && (
//             <img
//               src={r.image}
//               alt="review"
//               className="w-32 h-32 mt-2 rounded"
//             />
//           )}
//         </div>
//       ))}

//       {/* Add Review Button */}
//       <button
//         onClick={() => setShowReviewForm(!showReviewForm)}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {showReviewForm ? "Cancel" : "Add Review"}
//       </button>

//       {/* Inline Review Form */}
//       {showReviewForm && (
//         <div className="mt-4 p-4 border rounded shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Add a Review</h2>
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
//               className="px-4 py-2 bg-green-500 text-white rounded"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
