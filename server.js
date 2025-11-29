import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
//   try {
    await mongoose.connect(process.env.MONGO_URL);
    // console.log("✔ MongoDB is Connected Successfully");

    app.listen(process.env.PORT || 9080, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 9080}`);
    });
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//   }
};

start();
