// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {type:String,required:true},
//     email: {type:String,required:true,unique:true},
//     password: {type:String,required:true},
//     cartData: {type:Object,default:{}},
    

// },{minimize:false})

// const userModel =mongoose.models.user || mongoose.model("user",userSchema);
// export default userModel;




import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {
      type: Object,
      default: {},
    }, // Now stores { quantity, selectedWeight, price }
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;

