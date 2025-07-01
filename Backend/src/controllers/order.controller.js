import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = asyncHandler(async(req, res, next) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId]+=1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    return res.status(200).json(new ApiResponse(200, null, "Added to Cart"));
  } catch (error) {
    return next(new ApiError(500, "Error placing order"));
  }
});

const verifyOrder = asyncHandler(async(req, res, next) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 1) {
      cartData[req.body.itemId] -= 1;
    } else {
      delete cartData[req.body.itemId];
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    return res.status(200).json(new ApiResponse(200, null, "Removed from Cart"));
  } catch (error) {
    return next(new ApiError(500, "Error verifying order"));
  }
});

const userOrders = asyncHandler(async(req, res, next) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    return res.status(200).json(new ApiResponse(200, cartData, "Cart fetched successfully"));
  } catch (error) {
    return next(new ApiError(500, "Error fetching user orders"));
  }
});

const listOrders = asyncHandler(async(req, res, next) => {
  return next(new ApiError(501, "List orders not implemented"));
});

const updateStatus  = asyncHandler(async(req, res, next) => {
  return next(new ApiError(501, "Update status not implemented"));
});



export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };