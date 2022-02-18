import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import { RootState } from "../store";

export interface ProductState {
  productList: Product[];
  product: Product;
}

const initialState: ProductState = {
  productList: [],
  product: {
    id: 0,
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
  },
};

export const fetchProductList = createAsyncThunk(
  "product/fetchPRoducts",
  async () => {

  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      console.log(action);
      state.productList = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(() => {});
  // },
});

export const { setProductList } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
