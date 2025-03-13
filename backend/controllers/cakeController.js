import fs from "fs";
import cakeModel from "../models/cakeModel.js";

// // add cake item

// const addCake = async (req, res) => {
//   try {
//     console.log("Received Request:", req.body);

//     const imageFilenames = req.files ? req.files.map(file => file.filename) : [];

//     const cake = new cakeModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: Number(req.body.price),
//         category: req.body.category,
//         rating: Number(req.body.rating),
//         weights: Array.isArray(req.body.weights) ? req.body.weights : JSON.parse(req.body.weights),
//         images: imageFilenames
//     });

//     console.log("Cake to be saved:", cake);

//     await cake.save();
//     console.log("Cake saved successfully!");

//     res.json({ success: true, message: "Cake Added Successfully", cake });

//   } catch (error) {
//     console.error("Error Saving Cake:", error);
//     res.status(500).json({ success: false, message: "Error adding cake", error });
//   }
// };

const addCake = async (req, res) => {
  try {
    console.log("Received Request:", req.body);

    const imageFilenames = req.files
      ? req.files.map((file) => file.filename)
      : [];

    const cake = new cakeModel({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      rating: Number(req.body.rating),
      weights: Array.isArray(req.body.weights)
        ? req.body.weights
        : JSON.parse(req.body.weights),
      prices: JSON.parse(req.body.prices), // Store price per weight
      images: imageFilenames,
    });

    console.log("Cake to be saved:", cake);

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

//all cake list

const listCake = async (req, res) => {
  try {
    const cake = await cakeModel.find({});
    res.json({ success: true, data: cake });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

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
      req.files.forEach((file) => images.push(file.filename));
    }

    await cakeModel.findByIdAndUpdate(id, {
      name,
      description,
      category,
      rating,
      weights: parsedWeights,
      prices: parsedPrices,
      images,
    });

    res.json({ success: true, message: "Cake updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating cake" });
  }
};

//remove cake item

const removeCake = async (req, res) => {
  try {
    const cake = await cakeModel.findById(req.body.id);
    fs.unlink(`uploads/${cake.image}`, () => {});

    await cakeModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Cake Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addCake, listCake, updateCake, removeCake };
