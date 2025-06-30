import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Add Food

const addFood = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

})

// All Foods
const listFood = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

})

// Remove Food Item
const removeFood = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

})

// Export
export { addFood, listFood, removeFood };