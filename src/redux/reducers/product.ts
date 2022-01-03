import { ProductActionType, ProductAction } from "../actions/product";

const initialState = {
    productList: [],
};

const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionType.SET_PRODUCT_LIST:
            console.log(action.payload);
            return { ...state, productList: action.payload };
        default:
            return state;
    }
};

export default productReducer;
