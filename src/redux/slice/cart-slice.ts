import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../../models/CartItem";
import CartService from "../../services/cart-services";
import { RootState } from "../store";

export interface CartState {
  cartList: CartItem[];
  cartListStatus: "idle" | "loading" | "failed";
  paymentAmount: number;
}

const initialState: CartState = {
  cartList: [],
  cartListStatus: "idle",
  paymentAmount: 0,
};

const findCartItemIndex = (cartList: CartItem[], id: number): number => {
  return cartList.findIndex((cartItem) => cartItem.id == id);
};

const paymentAmount = (cartList: CartItem[]) => {
  return cartList.reduce((acc, item) => acc + (item.qty * item.price), 0);
};

export const fetchCartList = createAsyncThunk(
  "cart/fetchCartList",
  async (_, { rejectWithValue }) => {
    try {
      return await CartService.loadCart();
    } catch (error: any) {
      throw rejectWithValue("Error occured");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<CartItem[]>) => {
      state.cartList = action.payload;
    },
    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      const existingItem = state.cartList.find(
        (cartItem) => cartItem.id === payload.id
      );

      if (existingItem) {
        existingItem.qty++;
      } else {
        state.cartList = [...state.cartList, payload];
      }
      state.paymentAmount = paymentAmount(state.cartList);
    },
    decrementQty: (state, { payload }: PayloadAction<CartItem>) => {
      const index = findCartItemIndex(state.cartList, payload.id);
      if (state.cartList[index].qty > 1) {
        state.cartList[index].qty -= 1;
      } else {
        state.cartList.splice(index, 1);
      }
      state.paymentAmount = paymentAmount(state.cartList);
    },
    incrementQty: (state, { payload }: PayloadAction<CartItem>) => {
      const index = findCartItemIndex(state.cartList, payload.id);
      if (state.cartList[index].qty < 99) {
        state.cartList[index].qty += 1;
      }
      state.paymentAmount = paymentAmount(state.cartList);
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      const index = findCartItemIndex(state.cartList, payload);
      state.cartList.splice(index, 1);
      state.paymentAmount = paymentAmount(state.cartList);
    },
    calculatePaymentAmount: (state) => {
      state.paymentAmount = paymentAmount(state.cartList);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartList.pending, (state) => {
      state.cartListStatus = "loading";
    });
    builder.addCase(
      fetchCartList.fulfilled,
      (state, action: PayloadAction<CartItem[]>) => {
        state.cartListStatus = "idle";
        state.cartList = action.payload;
        state.paymentAmount = paymentAmount(state.cartList)
      }
    );
    builder.addCase(fetchCartList.rejected, (state) => {
      state.cartListStatus = "failed";
    });
  },
});

export const {
  setCartList,
  addToCart,
  decrementQty,
  incrementQty,
  removeFromCart,
  calculatePaymentAmount,
} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
