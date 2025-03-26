import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { openAlert } from "../../utils/openAlert";

export const fetchCatImage = createAsyncThunk(
  "/cat",
  async (data, { dispatch }) => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      openAlert(dispatch, "success", "Cat Image Update :)");
      return response.data;
    } catch (error) {
      openAlert(dispatch, "error", error.message);
    }
  }
);

const catSilce = createSlice({
  name: "cat",
  initialState: {
    url: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatImage.fulfilled, (state, { payload }) => {
        state.url = payload[0].url;
        state.loading = false;
      })
      .addCase(fetchCatImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatImage.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default catSilce.reducer;
