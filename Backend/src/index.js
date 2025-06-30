import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.connect.js";
import app from "./app.js"; 


connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error in Server Setup", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });