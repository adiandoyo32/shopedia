import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Address from "../../models/Address";
import Order from "../../models/Order";
import ShippingMethod from "../../models/ShippingMethod";
import { RootState } from "../store";

export interface OrderState {
  order: Order;
}

const initialState: OrderState = {
  order: {
    shippingAddress: undefined,
    shippingMethod: undefined,
    totalPayment: 0,
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    calculateTotalPayment: (state, { payload }: PayloadAction<number>) => {
      state.order.totalPayment =
        payload + (state.order.shippingMethod?.price ?? 0);
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.order = {
        ...state.order,
        shippingAddress: { street: action.payload },
      };
    },
    saveShippingMethod: (state, { payload }: PayloadAction<ShippingMethod>) => {
      state.order.shippingMethod = payload;
    },
  },
});

export const { saveShippingMethod, setAddress, calculateTotalPayment } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;

export default orderSlice.reducer;
