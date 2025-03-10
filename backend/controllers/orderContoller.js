// import Stripe from "stripe";
// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Placing user order for frontend
// const placeOrder = async (req, res) => {
//     const frontend_url = 'http://localhost:5173';

//     try {
//         const { userId, items, amount, address } = req.body;

//         // Save order in DB
//         const newOrder = new orderModel({ userId, items, amount, address });
//         await newOrder.save();

//         // Clear user's cart after order placement
//         await userModel.findByIdAndUpdate(userId, { cartData: [] });

//         // Format items for Stripe
//         const line_items = items.map((item) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.itemId, // Using itemId instead of name
//                     description: `Weight: ${item.weight}`, // Added weight info
//                 },
//                 unit_amount: Number(item.price) * 100, // Convert to paise
//             },
//             quantity: item.quantity,
//         }));

//         // Adding delivery charge (₹30)
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 30 * 100, // Convert to paise
//             },
//             quantity: 1,
//         });

//         // Create Stripe session
//         const session = await stripe.checkout.sessions.create({
//             line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         });

//         res.json({ success: true, session_url: session.url });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Error processing order" });
//     }
// };




// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.body;
//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Paid" });
//         } else {
//             await orderModel.findByIdAndUpdate(orderId);
//             res.json({ success: false, message: "Not Paid" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// // user orders for frontend
// const userOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({ userId: req.body.userId });
//         res.json({ success: true, data: orders })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// // listing orders for admin panel
// const listOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, data: orders })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// // api for updating order status
// const updateStatus = async (req, res) => {
//     try {
//         await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//         res.json({ success: true, message: "Status Updated" })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// export { listOrders, placeOrder, updateStatus, userOrders, verifyOrder }





import Stripe from "stripe";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Place Order API
const placeOrder = async (req, res) => {
    const frontend_url = 'https://cake-shop-green.vercel.app/';

    try {
        const { userId, items, amount, address ,image , name } = req.body;

        if (!userId || !items || !amount || !address ) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Save order in DB
        const newOrder = new orderModel({ userId, items, amount, address ,image , name});
        await newOrder.save();

        console.log(newOrder);
        
        // Clear user's cart after order placement
        await userModel.findByIdAndUpdate(userId, { cartData: [] });

        // Format items for Stripe
        const line_items = items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.itemId,
                    description: `Weight: ${item.weight}`,
                },
                unit_amount: Number(item.price) * 100, // Convert to paise
            },
            quantity: item.quantity,
        }));

        // Add delivery charge
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: { name: "Delivery Charges" },
                unit_amount: 30 * 100, // Convert to paise
            },
            quantity: 1,
        });

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
            metadata: { orderId: newOrder._id.toString() }, // Store orderId for verification
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error("Order Placement Error:", error);
        res.status(500).json({ success: false, message: "Error processing order" });
    }
};

// ✅ Verify Payment API
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            return res.json({ success: true, message: "Payment successful" });
        } else {
            return res.json({ success: false, message: "Payment failed" });
        }
    } catch (error) {
        console.log("Payment Verification Error:", error);
        return res.status(500).json({ success: false, message: "Error verifying payment" });
    }
};

// ✅ Get User Orders
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log("Fetching User Orders Error:", error);
        res.status(500).json({ success: false, message: "Error fetching orders" });
    }
};

// ✅ List All Orders (Admin)
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log("Fetching All Orders Error:", error);
        res.status(500).json({ success: false, message: "Error fetching orders" });
    }
};

// ✅ Update Order Status (Admin)
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.log("Updating Order Status Error:", error);
        res.status(500).json({ success: false, message: "Error updating order status" });
    }
};

export { listOrders, placeOrder, updateStatus, userOrders, verifyOrder };

