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





import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://sri715565:project@cluster0.1n5t2.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected: SuccessFully `);
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};
