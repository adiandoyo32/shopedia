import { Product } from "../models/Product";

export const loadProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json()
};
