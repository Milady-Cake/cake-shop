// import mongoose from "mongoose"

// const orderSchema=new mongoose.Schema({
//     userId:{type:String,required:true},
//     items:{type:Array,required:true},
//     amount:{type:Number,required:true},
//     address:{type:Object,required:true},
//     status:{type:String,default:"Cake Processing"},
//     date:{type:Date,default:Date.now()},
//     payment:{type:Boolean,default:false},
// })

// const orderModel= mongoose.models.order || mongoose.model("order",orderSchema)


// export default orderModel;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // User placing the order

    items: [
        {
            name:{type: String,},
            image:{type:String},
            itemId: { type: String, required: true },  // Unique item identifier
            weight: { type: String, required: true }, // Weight of the item
            quantity: { type: Number, required: true }, // Quantity of the item
            price: { type: Number, required: true }, // Price per unit
        }
    ],

    amount: { type: Number, required: true }, // Total order amount

    address: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        region: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },

    status: { type: String, default: "Cake Processing" },
    date: { type: Date, default: Date.now },
    payment: { type: Boolean, default: false },
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
