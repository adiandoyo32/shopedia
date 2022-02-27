import { axiosHttpAdapter } from "../libs/axios"
import CartItem from "../models/CartItem";

const loadCart = async (): Promise<CartItem[]> => {
    try {
        const res = await axiosHttpAdapter<CartItem[]>({
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