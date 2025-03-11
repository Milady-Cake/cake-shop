// import mongoose from "mongoose";
// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect('mongodb+srv://deva:862165@cluster0.jqgzc.mongodb.net/cake-del');
//         console.log(`MongoDB Connected: SuccessFully `);
//     } catch (error) {
//         console.error("MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };





import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables from .env file

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected: Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

