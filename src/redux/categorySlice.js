import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../axiosConfig";

export const fetchCategory = createAsyncThunk(
  "category/fetchProduct",
  async () => {
    try {
      const response = await API.get("categories.php");
      return response.data?.categories;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default categorySlice.reducer;
