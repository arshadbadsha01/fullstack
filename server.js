import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import your routes
import postsRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(postsRoutes);
app.use(userRoutes);

// Start Server Function
const start = async () => {
//   try {
    await mongoose.connect("mongodb+srv://arshad:arshad123@cluster0.vv9bbwx.mongodb.net/?appName=Cluster0");   
    app.listen(9080, () => {
      console.log("🚀 Server is running on port 9080");
    });

//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//   }
};

// Call the function
start();
