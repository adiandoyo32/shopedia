import { axiosHttpAdapter } from "../libs/axios"
import { Product } from "../models/Product"

const loadCart = async (): Promise<Product[]> => {
    try {
        const res = await axiosHttpAdapter<Product[]>({
            method: "GET",
            url: '/api/cart'
        })
        return res.data.data;
    } catch (error) {
        throw error
    }
}

const CartService = {
    loadCart,
}

export default CartService