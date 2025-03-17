// import fs from "fs";
// import cakeModel from "../models/cakeModel.js";
// import userModel from "../models/userModel.js";
// // import authMiddleware from "../middleware/auth.js";

// /////working code

// // const addCake = async (req, res) => {
// //   try {
// //     console.log("Received Request:", req.body);

// //     const imageFilenames = req.files
// //       ? req.files.map((file) => file.filename)
// //       : [];

// //     const cake = new cakeModel({
// //       name: req.body.name,
// //       description: req.body.description,
// //       category: req.body.category,
// //       rating: Number(req.body.rating),
// //       weights: Array.isArray(req.body.weights)
// //         ? req.body.weights
// //         : JSON.parse(req.body.weights),
// //       prices: JSON.parse(req.body.prices), // Store price per weight
// //       images: imageFilenames,
// //     });

// //     console.log("Cake to be saved:", cake);

// //     await cake.save();
// //     console.log("Cake saved successfully!");

// //     res.json({ success: true, message: "Cake Added Successfully", cake });
// //   } catch (error) {
// //     console.error("Error Saving Cake:", error);
// //     res
// //       .status(500)
// //       .json({ success: false, message: "Error adding cake", error });
// //   }
// // };

// /////Reviw Adding Code

// const addCake = async (req, res) => {
//   try {
//     console.log("Received Request:", req.body);

//     // Extract image filenames from uploaded files
//     const imageFilenames = req.files
//       ? req.files.map((file) => file.filename)
//       : [];

//     // Validate and parse fields
//     const weights = Array.isArray(req.body.weights)
//       ? req.body.weights
//       : JSON.parse(req.body.weights);
//     const prices =
//       typeof req.body.prices === "string"
//         ? JSON.parse(req.body.prices)
//         : req.body.prices;

//     // Create a new cake object
//     const cake = new cakeModel({
//       name: req.body.name,
//       description: req.body.description,
//       category: req.body.category,
//       rating: Number(req.body.rating),
//       weights: weights,
//       prices: prices,
//       images: imageFilenames,
//     });

//     console.log("Cake to be saved:", cake);

//     // Save the cake to the database
//     await cake.save();
//     console.log("Cake saved successfully!");

//     res.json({ success: true, message: "Cake Added Successfully", cake });
//   } catch (error) {
//     console.error("Error Saving Cake:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Error adding cake", error });
//   }
// };

// export const addReview = async (req, res) => {
//   try {
//     console.log("Received Review Request:", req.body);

//     const { productId, name, comment } = req.body;
//     const reviewerImage = req.file ? req.file.filename : null; // Get uploaded file

//     // ✅ Ensure the user is authenticated
//     if (!req.user || !req.user.id) {
//       return res
//         .status(401)
//         .json({ success: false, message: "User not authenticated" });
//     }

//     const userId = req.user.id;

//     // ✅ Fetch the user's name from the database
//     const user = await userModel.findById(userId);
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     const Username = user.name; // ✅ Extract name from userModel

//     console.log("Reviewer Name:", Username); // Debugging

//     // ✅ Find the cake by ID
//     const cake = await cakeModel.findById(productId);
//     if (!cake) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Cake not found" });
//     }

//     // ✅ Create new review object
//     const newReview = {
//       userId,
//       ReviewerName: Username, // ✅ Store user's name as ReviewerName
//       ReviewTitle: name,
//       Review: comment,
//       ReviewerImage: reviewerImage, // Store image filename
//       createdAt: new Date(), // ✅ Ensure date is added
//     };

//     // ✅ Add review to the cake's reviews array
//     cake.reviews.push(newReview);

//     // ✅ Save the updated cake document
//     await cake.save();
//     console.log("Review added successfully!");

//     res.json({
//       success: true,
//       message: "Review Added Successfully",
//       review: newReview,
//     });
//   } catch (error) {
//     console.error("Error Adding Review:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Error adding review", error });
//   }
// };

// //all cake list

// const listCake = async (req, res) => {
//   try {
//     const cake = await cakeModel.find({});
//     res.json({ success: true, data: cake });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const updateCake = async (req, res) => {
//   try {
//     const { id, name, description, category, rating, weights, prices } =
//       req.body;
//     const parsedWeights = JSON.parse(weights);
//     const parsedPrices = JSON.parse(prices);
//     let images = req.body.existingImages
//       ? JSON.parse(req.body.existingImages)
//       : [];

//     if (req.files && req.files.length > 0) {
//       req.files.forEach((file) => images.push(file.filename));
//     }

//     await cakeModel.findByIdAndUpdate(
//       id,
//       {
//         name,
//         description,
//         category,
//         rating,
//         weights: parsedWeights,
//         prices: parsedPrices,
//         images,
//       },
//       { new: true }
//     );

//     res.json({ success: true, message: "Cake updated successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error updating cake" });
//   }
// };

// //remove cake item

// const removeCake = async (req, res) => {
//   try {
//     const cake = await cakeModel.findById(req.body.id);
//     fs.unlink(`uploads/${cake.image}`, () => {});

//     await cakeModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Cake Removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addCake, listCake, updateCake, removeCake };
import cakeModel from "../models/cakeModel.js";
import userModel from "../models/userModel.js";

// ✅ Add a Cake with Cloudinary Image Upload
const addCake = async (req, res) => {
  try {
    console.log("Received Request:", req.body);

    // Extract image URLs from Cloudinary
    const imageUrls = req.files ? req.files.map((file) => file.path) : [];

    // Validate and parse fields
    const weights = Array.isArray(req.body.weights)
      ? req.body.weights
      : JSON.parse(req.body.weights);
    const prices =
      typeof req.body.prices === "string"
        ? JSON.parse(req.body.prices)
        : req.body.prices;

    // Create a new cake object
    const cake = new cakeModel({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      rating: Number(req.body.rating),
      weights: weights,
      prices: prices,
      images: imageUrls,
    });

    console.log("Cake to be saved:", cake);

    // Save the cake to the database
    await cake.save();
    console.log("Cake saved successfully!");

    res.json({ success: true, message: "Cake Added Successfully", cake });
  } catch (error) {
    console.error("Error Saving Cake:", error);
    res
      .status(500)
      .json({ success: false, message: "Error adding cake", error });
  }
};

// ✅ Add a Review with Single Image Upload
const addReview = async (req, res) => {
  try {
    console.log("Received Review Request:", req.body);

    const { productId, name, comment } = req.body;
    const reviewerImage = req.file ? req.file.path : null; // Get Cloudinary image URL

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }

    const userId = req.user.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const Username = user.name;
    console.log("Reviewer Name:", Username);

    const cake = await cakeModel.findById(productId);
    if (!cake) {
      return res
        .status(404)
        .json({ success: false, message: "Cake not found" });
    }

    const newReview = {
      userId,
      ReviewerName: Username,
      ReviewTitle: name,
      Review: comment,
      ReviewerImage: reviewerImage,
      createdAt: new Date(),
    };

    cake.reviews.push(newReview);
    await cake.save();
    console.log("Review added successfully!");

    res.json({
      success: true,
      message: "Review Added Successfully",
      review: newReview,
    });
  } catch (error) {
    console.error("Error Adding Review:", error);
    res
      .status(500)
      .json({ success: false, message: "Error adding review", error });
  }
};

// ✅ List All Cakes
const listCake = async (req, res) => {
  try {
    const cake = await cakeModel.find({});
    res.json({ success: true, data: cake });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ Update Cake with Cloudinary Image Handling
const updateCake = async (req, res) => {
  try {
    const { id, name, description, category, rating, weights, prices } =
      req.body;
    const parsedWeights = JSON.parse(weights);
    const parsedPrices = JSON.parse(prices);
    let images = req.body.existingImages
      ? JSON.parse(req.body.existingImages)
      : [];

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => images.push(file.path)); // Push Cloudinary URLs
    }

    await cakeModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        rating,
        weights: parsedWeights,
        prices: parsedPrices,
        images,
      },
      { new: true }
    );

    res.json({ success: true, message: "Cake updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating cake" });
  }
};

// ✅ Remove Cake (No Local File Deletion Needed)
const removeCake = async (req, res) => {
  try {
    await cakeModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Cake Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addCake, listCake, updateCake, removeCake, addReview };
