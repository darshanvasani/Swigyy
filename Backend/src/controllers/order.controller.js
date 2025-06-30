import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";



const placeOrder = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

});

const verifyOrder = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

});

const userOrders = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

});

const listOrders = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

});

const updateStatus  = asyncHandler(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

});



export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };