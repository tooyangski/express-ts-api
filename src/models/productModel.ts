// src/models/productModel.ts
import { readFileSync } from "fs";
import { Product } from "../types/product";

const data = readFileSync("data/products.json", "utf-8");
const products: Product[] = JSON.parse(data);

export const ProductModel = {
  getAllProducts: () => products,
  getProductById: (id: number) => products.find((product) => product.id === id),
};
