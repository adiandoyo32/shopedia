import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ShippingMethod from "../../models/ShippingMethod";
import ShippingMethodService from "../../services/shipping-method-service";
import { RootState } from "../store";

export interface ShippingMethodState {
  shippingMethodList: ShippingMethod[];
  shippingMethodListStatus: "idle" | "loading" | "failed";
}

const initialState: ShippingMethodState = {
  shippingMethodList: [],
  shippingMethodListStatus: "idle",
};

export const fetchShippingMethodList = createAsyncThunk(
  "shipping-method/fetchShippingMethods",
  async (_, { rejectWithValue }) => {
    try {
      return await ShippingMethodService.loadShippingMethods();
    } catch (error: any) {
      throw rejectWithValue('Error occured');
    }
  }
);

export const shippingMethodSlice = createSlice({
  name: "shipping-method",
  initialState,
  reducers: {
    setShippingMethodList: (state, action: PayloadAction<ShippingMethod[]>) => {
      state.shippingMethodList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShippingMethodList.pending, (state) => {
      state.shippingMethodListStatus = "loading";
    });

    builder.addCase(fetchShippingMethodList.fulfilled, (state, action) => {
      state.shippingMethodListStatus = "idle";
      state.shippingMethodList = action.payload;
    });

    builder.addCase(fetchShippingMethodList.rejected, (state, action) => {
      state.shippingMethodListStatus = "failed";
    });
  },
});

export const { setShippingMethodList } = shippingMethodSlice.actions;
export const selectShippingMethod = (state: RootState) => state.shippingMethod;

export default shippingMethodSlice.reducer;
