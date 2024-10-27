// src/controllers/productController.ts
import { Request, Response } from "express";
import { ProductModel } from "../models/productModel";

export const ProductController = {
  getProducts: (req: Request, res: Response) => {
    const products = ProductModel.getAllProducts();
    res.json(products);
  },

  getProduct: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = ProductModel.getProductById(id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  },
};
