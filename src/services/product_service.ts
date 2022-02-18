import axiosIns from "../libs/axios";
import { Product } from "../models/Product";

const loadProducts = async (): Promise<Product[]> => {
  try {
    const res = await axiosIns.get<Product[]>("/api/products");
    return res.data
  } catch (error) {
    throw error;
  }
};

const ProductService = {
    loadProducts,
}

export default ProductService
