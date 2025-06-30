import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requird:true,
        unique:true
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        default:"user" 
    },
    cartData: { 
        type: Object, 
        default: {} 
    },
  },
  { 
    minimize: false 
  }
);


const userModel = mongoose.model.user || mongoose.model("User", userSchema);
export default userModel;
