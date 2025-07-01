import express from "express";
import { addFood, listFood, removeFood } from "../controllers/food.controller";
import multer from "multer";
import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";


const router = Router();

const storage= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

foodRouter.post("/add",upload.single("image"),authMiddleware,addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",authMiddleware,removeFood);

export default foodRouter;
