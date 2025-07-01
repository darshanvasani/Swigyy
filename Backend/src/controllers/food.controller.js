import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Add Food

const addFood = asyncHandler(async(req, res, next) => {
  const localImagePath = req.file?.path;
  if (!localImagePath) {
    return next(new ApiError(400, "Image file is required"));
  }
  // Upload to Cloudinary
  const cloudinaryResult = await uploadOnCloudinary(localImagePath);
  if (!cloudinaryResult || !cloudinaryResult.url) {
    return next(new ApiError(500, "Failed to upload image to Cloudinary"));
  }
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: cloudinaryResult.url,
    imagePublicId: cloudinaryResult.public_id,
  });
  try {
    let userData = await userModel.findById(req.body.userId);
    if (userData && userData.role === "admin") {
      await food.save();
      return res.status(201).json(new ApiResponse(201, null, "Food Added"));
    } else {
      return next(new ApiError(403, "You are not admin"));
    }
  } catch (error) {
    return next(new ApiError(500, "Error adding food"));
  }
})

// All Foods
const listFood = asyncHandler(async(req, res, next) => {
  try {
    const foods = await foodModel.find({});
    return res.status(200).json(new ApiResponse(200, foods, "Foods fetched successfully"));
  } catch (error) {
    return next(new ApiError(500, "Error fetching foods"));
  }
})

// Remove Food Item
const removeFood = asyncHandler(async(req, res, next) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    if (userData && userData.role === "admin") {
      const food = await foodModel.findById(req.body.id);
      if (!food) {
        return next(new ApiError(404, "Food not found"));
      }
      if (food.imagePublicId) {
        await uploadOnCloudinary.destroy(food.imagePublicId);
      }
      await foodModel.findByIdAndDelete(req.body.id);
      return res.status(200).json(new ApiResponse(200, null, "Food Removed"));
    } else {
      return next(new ApiError(403, "You are not admin"));
    }
  } catch (error) {
    return next(new ApiError(500, "Error removing food"));
  }
})

// Export
export { addFood, listFood, removeFood };