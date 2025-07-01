import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const addToCart = asyncHandler(async(req, res, next) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res.status(200).json(new ApiResponse(200, null, "Added to Cart"));
  } catch (error) {
    return next(new ApiError(500, "Error adding to cart"));
  }
});

// Remove Cart
const removeFromCart = asyncHandler(async(req, res, next) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 1) {
      cartData[req.body.itemId] -= 1;
    } else {
      delete cartData[req.body.itemId];
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res.status(200).json(new ApiResponse(200, null, "Removed from Cart"));
  } catch (error) {
    return next(new ApiError(500, "Error removing from cart"));
  }
});

// Fetch User Cart Data
const getCart = asyncHandler(async(req, res, next) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    return res.status(200).json(new ApiResponse(200, cartData, "Cart fetched successfully"));
  } catch (error) {
    return next(new ApiError(500, "Error fetching cart data"));
  }
})


export { addToCart, removeFromCart, getCart };