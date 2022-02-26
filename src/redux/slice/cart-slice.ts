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

const findCartItemIndex = (cartList: CartItem[], id: number): number => {
    return cartList.findIndex((cartItem) => cartItem.id == id);
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
            state.cartList = action.payload;
        },
        addToCart: (state, { payload }: PayloadAction<CartItem>) => {
            console.log(payload)
            state.cartList = [...state.cartList, payload]
        },
        decrementQty: (state, { payload }: PayloadAction<CartItem>) => {
            const index = findCartItemIndex(state.cartList, payload.id);
            if (state.cartList[index].qty > 1) {
                state.cartList[index].qty -= 1;
            } else {
                state.cartList.splice(index, 1);
            }
        },
        incrementQty: (state, { payload }: PayloadAction<CartItem>) => {
            const index = findCartItemIndex(state.cartList, payload.id);
            if (state.cartList[index].qty < 99) {
                state.cartList[index].qty += 1;
            }
        },
        removeFromCart: (state, { payload }: PayloadAction<number>) => {
            const index = findCartItemIndex(state.cartList, payload);
            state.cartList.splice(index, 1);
        },
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

export const { setCartList, addToCart, decrementQty, incrementQty, removeFromCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
