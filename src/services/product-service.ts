import {AxiosError} from 'axios'

import { axiosIns, axiosHttpAdapter } from "../libs/axios";
import { Product } from "../models/Product";

class HttpError extends Error {
    constructor(public response:any) {
        super("HttpError")
    }
}

const loadProducts = async (): Promise<Product[]> => {
    try {
        // throw new Error("throwing other error")
        const res = await axiosHttpAdapter<Product[]>({
            method: "GET",
            url: "/api/productsasd",
        });

        return res.data.data
    } catch (error:any) {
        if (error.isAxiosError) {
            const axiosError = error as AxiosError
            console.log("axiosError:",axiosError.message);
            console.log("axiosError:",axiosError.response);
            throw new HttpError(axiosError.response)
        } else {
            console.log("other error:", error);
        }

        throw new HttpError(null)
    }
};

const ProductService = {
    loadProducts,
};

export default ProductService;
