import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../../models/CartItem";
import CartService from "../../services/cart-services";
import { RootState } from "../store";

export interface CartState {
    cartList: CartItem[];
    cartListStatus: "idle" | "loading" | "failed";
}

const initialState: CartState = {
    cartList: [],
    cartListStatus: "idle",
};

export const fetchCartList = createAsyncThunk("cart/fetchCartList", async (_, { rejectWithValue }) => {
    try {
        return await CartService.loadCart();
    } catch (error: any) {
        throw rejectWithValue("Error occured");
    }
});

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartList: (state, action: PayloadAction<CartItem[]>) => {
            state.cartList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartList.pending, (state) => {
            state.cartListStatus = "loading";
        });
        builder.addCase(fetchCartList.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
            state.cartListStatus = "idle";
            state.cartList = action.payload;
        });
        builder.addCase(fetchCartList.rejected, (state) => {
            state.cartListStatus = "failed";
        });
    },
});

export const { setCartList } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
