import { axiosHttpAdapter } from "../libs/axios";
import ShippingMethod from "../models/ShippingMethod";

const loadShippingMethods = async (): Promise<ShippingMethod[]> => {
    try {
        const res = await axiosHttpAdapter<ShippingMethod[]>({
            method: "GET",
            url: "/api/shipping-methods",
        });

        return res.data.data
    } catch (error:any) {
        throw error
    }
};

const ShippingMethodService = {
    loadShippingMethods,
};

export default ShippingMethodService;
