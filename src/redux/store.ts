import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./slice/product-slice"
import cartReducer from "./slice/cart-slice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
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