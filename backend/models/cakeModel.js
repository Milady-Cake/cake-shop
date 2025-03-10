


// import mongoose from "mongoose";

// const cakeSchema= new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     rating: { type: Number, default: 0 },
//     weights: { type: [String], required: true }, // Multiple available weights
//     images: { type: [String], required: true } // Multiple images
// })

// const cakeModel= mongoose.model("Cakes",cakeSchema);

// export default cakeModel;



import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    weights: { type: [String], required: true }, // Multiple available weights
    prices: { type: Object, required: true }, // Prices for selected weights
    images: { type: [String], required: true } // Multiple images
});

const cakeModel = mongoose.model("Cakes", cakeSchema);

export default cakeModel;
