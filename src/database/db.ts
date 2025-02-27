import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// MongoDB connection function
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://admin:secret@localhost:27017/mydatabase" as string, {
      authSource: "admin"
    });

    console.log("Connected Successfully");
  } catch (error) {
    console.error("Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
