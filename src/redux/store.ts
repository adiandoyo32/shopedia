import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./slice/product-slice"
import cartReducer from "./slice/cart-slice"
import profileReducer from "./slice/profile-slice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    profile: profileReducer
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