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
        shippingMethod: undefined
    },
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            const address: Address = {
                street: action.payload,
            }
            state.order.shippingAddress = address
        },
        saveShippingMethod: (state, { payload }: PayloadAction<ShippingMethod>) => {
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

export const { saveShippingMethod, setAddress } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order;

export default orderSlice.reducer;
