import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cart.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", verifyJWT, addToCart);
cartRouter.post("/remove", verifyJWT, removeFromCart);
cartRouter.post("/get", verifyJWT, getCart);

export default cartRouter;
