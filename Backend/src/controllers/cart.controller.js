import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const addToCart = asyncHandler(async(req,res) => {
    try {
        
    } catch (error) {
        
    }

});

// Remove Cart
const removeFromCart = asyncHandler(async(req,res) =>{
    try {
        
    } catch (error) {
        
    }

});

// Fetch User Cart Data
const getCart = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

})


export { addToCart, removeFromCart, getCart };