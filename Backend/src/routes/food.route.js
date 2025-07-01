import express from "express";
import { addFood, listFood, removeFood } from "../controllers/food.controller.js";
import multer from "multer";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

const storage= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})

router.post("/add",upload.single("image"),verifyJWT,addFood);
router.get("/list",listFood);
router.post("/remove",verifyJWT,removeFood);

export default router;
