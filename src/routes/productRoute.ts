import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);

export default router;
