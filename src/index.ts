import express from "express";
import productRoutes from "./routes/productRoute";

const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
