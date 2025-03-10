// import userModel from "../models/userModel.js";

// //add items to user cart
// const addToCart = async (req, res) => {
//   try {

//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     // console.log("cartData",cartData);
//     // console.log("userData",userData);
//     // console.log("body",body.quantity );

//     if (!cartData[req.body.itemId]) {
//       cartData[req.body.itemId] = req.body.quantity ;
//     } else {
//       cartData[req.body.itemId] +=req.body.quantity;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Added To Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// //remove items from user cart

// const removeFromCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (cartData[req.body.itemId] > 0) {
//       cartData[req.body.itemId] -= 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Removed From Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };


// const removeFullFromCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = userData.cartData;

//     if (!cartData[req.body.itemId]) {
//       return res.json({ success: false, message: "Item not found in cart" });
//     }

//     delete cartData[req.body.itemId]; // Completely remove product

//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });

//     res.json({ success: true, message: "Product fully removed from cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error removing product from cart" });
//   }
// };



// //fetch user cart data

// const getCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     res.json({ success: true, cartData });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addToCart, removeFromCart, getCart ,removeFullFromCart };




// new code after the weight for price 
import userModel from "../models/userModel.js";

// ✅ Add to Cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, weight, quantity } = req.body;

    if (!userId || !itemId || !weight || !quantity) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = user.cartData || {};
    const cartKey = `${itemId}_${weight}`;

    cartData[cartKey] = (cartData[cartKey] || 0) + quantity;

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Added to Cart", cartData });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// ✅ Remove one quantity
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId, weight } = req.body;

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};
    const cartKey = `${itemId}_${weight}`;

    if (cartData[cartKey] && cartData[cartKey] > 0) {
      cartData[cartKey] -= 1;
      if (cartData[cartKey] === 0) delete cartData[cartKey];
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Item removed from cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing item" });
  }
};

// ✅ Remove entire product
const removeProductFromCart = async (req, res) => {
  try {
    const { userId, itemId, weight } = req.body;

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};
    const cartKey = `${itemId}_${weight}`;

    if (cartData[cartKey]) delete cartData[cartKey];

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Product removed", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing product" });
  }
};

// ✅ Get Cart
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    let user = await userModel.findById(userId);
    let cartData = user.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching cart" });
  }
};

export { addToCart, removeFromCart, removeProductFromCart, getCart };
