// import express from "express"
// import { addToCart,removeFromCart,getCart,removeFullFromCart } from "../controllers/cartController.js"
// import authMiddleware from "../middleware/auth.js";


// const cartRouter=express.Router();

// cartRouter.post("/add", authMiddleware,addToCart)
// cartRouter.post("/remove", authMiddleware,removeFromCart)
// cartRouter.post("/get", authMiddleware,getCart)
// cartRouter.post("/remove-full", authMiddleware, removeFullFromCart);
// export default cartRouter




import express from "express";
import { addToCart, removeFromCart, getCart, removeProductFromCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart); // Add item with weight
cartRouter.post("/remove", authMiddleware, removeFromCart); // Remove single quantity
cartRouter.post("/get", authMiddleware, getCart); // Get user cart
cartRouter.post("/remove-full", authMiddleware, removeProductFromCart); // Remove entire product from cart

export default cartRouter;
