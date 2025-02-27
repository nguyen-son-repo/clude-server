import express, { Request, Response } from "express";
import connectDB from "./database/db";
import productRoutes from "./routes/productRoutes"; // ✅ Correct import

connectDB();

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
