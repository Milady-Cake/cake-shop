// //// working code
// import mongoose from "mongoose";

// const cakeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   category: { type: String, required: true },
//   rating: { type: Number, default: 0 },
//   weights: { type: [String], required: true }, // Multiple available weights
//   prices: { type: Object, required: true }, // Prices for selected weights
//   images: { type: [String], required: true }, // Multiple images
// });

// const cakeModel = mongoose.model("Cakes", cakeSchema);

// export default cakeModel;

////Review Addingf Code

import mongoose from "mongoose";

// Define the ProductReview subdocument schema
const productReviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    ReviewerName: { type: String },
    ReviewTitle: { type: String },
    Review: { type: String },
    ReviewerImage: { type: String },
    // Storing the filename of the reviewer's image
  },
  { timestamps: true }
);

// Define the main cake schema
const cakeSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  rating: { type: Number, default: 0 },
  weights: { type: [String] }, // Multiple available weights
  prices: { type: Object }, // Prices for selected weights
  images: { type: [String] }, // Multiple images stored as filenames
  reviews: [productReviewSchema], // Reviews stored as an array
});

const cakeModel = mongoose.model("Cakes", cakeSchema);

export default cakeModel;
