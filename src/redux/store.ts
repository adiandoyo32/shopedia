import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import pageReducer from "./slice/page-slice"
import productReducer from "./slice/product-slice"
import cartReducer from "./slice/cart-slice"
import profileReducer from "./slice/profile-slice"
import orderReducer from "./slice/order-slice"
import shippingMethodReducer from "./slice/shipping-method-slice"

export const store = configureStore({
  reducer: {
    page: pageReducer,
    product: productReducer,
    cart: cartReducer,
    profile: profileReducer,
    order: orderReducer,
    shippingMethod: shippingMethodReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;