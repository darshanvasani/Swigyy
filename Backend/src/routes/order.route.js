import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/order.controller.js";
import Stripe from "stripe";

const orderRouter = express.Router();

const stripe = new Stripe(process.env.STRIPE_API_KEY);

orderRouter.post("/place", verifyJWT, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/status", verifyJWT, updateStatus);
orderRouter.post("/userorders", verifyJWT, userOrders);
orderRouter.get("/list", verifyJWT, listOrders);

export default orderRouter;