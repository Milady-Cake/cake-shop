import express from "express";
import {
  addCake,
  listCake,
  removeCake,
  updateCake,
} from "../controllers/cakeController.js";
import multer from "multer";

const cakeRouter = express.Router();

// Image storage engine for multiple files
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Updated to allow multiple images (max 5)
cakeRouter.post("/add", upload.array("images", 4), addCake);
cakeRouter.get("/list", listCake);
cakeRouter.post("/remove", removeCake);
cakeRouter.post("/update", upload.array("images", 4), updateCake);

export default cakeRouter;
