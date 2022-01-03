import { Product } from "../../models/Product";
import { Dispatch } from "redux";
import { ProductActionType, ProductAction } from "../actions/product";

export const setProductList = (products: Product[]) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({
            type: ProductActionType.SET_PRODUCT_LIST,
            payload: products,
        });
    };
};
