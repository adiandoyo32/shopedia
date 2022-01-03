import { combineReducers } from "redux";
import productReducer from "./product";

export const reducers = combineReducers({
    product: productReducer,
});

export type State = ReturnType<typeof reducers>