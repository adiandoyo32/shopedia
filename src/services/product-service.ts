import {AxiosError} from 'axios'

import { axiosHttpAdapter } from "../libs/axios";
import { Product } from "../models/Product";

class HttpError extends Error {
    constructor(public response:any) {
        super("HttpError")
    }
}

const loadProducts = async (): Promise<Product[]> => {
    try {
        const res = await axiosHttpAdapter<Product[]>({
            method: "GET",
            url: "/api/products",
        });

        return res.data.data
    } catch (error:any) {
        throw error
        // console.log(error)
        // if (error.isAxiosError) {
        //     const axiosError = error as AxiosError
        //     // console.log("axiosError:",axiosError.message);
        //     // console.log("axiosError:",axiosError.response);
        //     throw new HttpError(axiosError)
        // } else {
        //     console.log("other error:", error);
        // }

        // throw new HttpError(null)
    }
};

const ProductService = {
    loadProducts,
};

export default ProductService;
