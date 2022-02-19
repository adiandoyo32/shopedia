import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import ProductService from "../../services/product-service";
import { RootState } from "../store";

export interface ProductState {
  productList: Product[];
  fetchProductListState: "idle" | "loading" | "failed";
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
  fetchProductListState: "idle",
};

export const fetchProductList = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await ProductService.loadProducts();
    } catch (error: any) {
      throw rejectWithValue('Error occured');
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.fetchProductListState = "loading";
    });

    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.fetchProductListState = "idle";
      state.productList = action.payload;
    });

    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.fetchProductListState = "failed";
      console.log(action.payload);
    });
  },
});

export const { setProductList } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
