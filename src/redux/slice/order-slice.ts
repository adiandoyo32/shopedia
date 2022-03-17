import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Order from "../../models/Order";
import { RootState } from "../store";

export interface OrderState {
    order: Order;
}

const initialState: OrderState = {
    order: {
        shippingAddress: "",
        shippingMethod: "",
    },
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        saveShippingMethod: (state, { payload }: PayloadAction<String>) => {
            state.order.shippingMethod = payload;
        },
        // loadProfile: (state) => {
        //     const profileJson = localStorage.getItem("profile");
        //     if (profileJson == null) return;
        //     const profile: Profile = JSON.parse(profileJson);
        //     state.profile = profile;
        // },
        // logout: (state) => {
        //     localStorage.removeItem("profile");
        //     state.profile = initialState.profile;
        // },
    },
});

export const { saveShippingMethod } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;

export default orderSlice.reducer;
