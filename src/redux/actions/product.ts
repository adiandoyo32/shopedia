import { Product } from "../../models/Product";

export const enum ProductActionType {
    SET_PRODUCT_LIST = "set_products"
}

interface SetProductList {
    type: ProductActionType.SET_PRODUCT_LIST;
    payload: Product[];
}

export type ProductAction = SetProductList;