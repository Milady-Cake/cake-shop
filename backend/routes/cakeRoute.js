// // // working code

// // import express from "express";
// // import {
// //   addCake,
// //   listCake,
// //   removeCake,
// //   updateCake,
// // } from "../controllers/cakeController.js";
// // import multer from "multer";

// // const cakeRouter = express.Router();

// // // Image storage engine for multiple files
// // const storage = multer.diskStorage({
// //   destination: "uploads",
// //   filename: (req, file, cb) => {
// //     return cb(null, `${Date.now()}${file.originalname}`);
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Updated to allow multiple images (max 5)
// // cakeRouter.post("/add", upload.array("images", 4), addCake);
// // cakeRouter.get("/list", listCake);
// // cakeRouter.post("/remove", removeCake);
// // cakeRouter.post("/update", upload.array("images", 4), updateCake);

// // export default cakeRouter;

// /////review adding
// import express from "express";
// import {
//   addCake,
//   listCake,
//   removeCake,
//   updateCake,
//   addReview,
// } from "../controllers/cakeController.js";
// import multer from "multer";
// import authMiddleware from "../middleware/auth.js";

// const cakeRouter = express.Router();

// // Image storage engine for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads"); // Ensure 'uploads' folder exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Routes
// cakeRouter.post("/add", upload.array("images", 4), addCake); // Add cake with multiple images
// cakeRouter.post(
//   "/review",
//   authMiddleware,
//   upload.single("reviewerImage"),
//   addReview
// );
// cakeRouter.get("/list", listCake);
// cakeRouter.post("/remove", removeCake);
// cakeRouter.post("/update", upload.array("images", 4), updateCake); // Update cake with images

// export default cakeRouter;

/////cloudnary
import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import authMiddleware from "../middleware/auth.js";
import {
  addCake,
  listCake,
  removeCake,
  updateCake,
  addReview,
} from "../controllers/cakeController.js";

const cakeRouter = express.Router();

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cakes",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// ✅ Define Routes
cakeRouter.post("/add", upload.array("images", 4), addCake); // Add cake with multiple images
cakeRouter.post(
  "/review",
  authMiddleware,
  upload.single("reviewerImage"),
  addReview
); // Add review with single image
cakeRouter.get("/list", listCake);
cakeRouter.post("/remove", removeCake);
cakeRouter.post("/update", upload.array("images", 4), updateCake); // Update cake with images

export default cakeRouter;
