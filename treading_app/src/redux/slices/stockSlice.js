import { createSlice } from "@reduxjs/toolkit";

import { indianIndices } from "../../utils/indicesData";

import { allStocks } from "../../utils/allStockList";

import { fluctuateIndexData } from "../../utils/fluctuate";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    indianIndices: indianIndices,
    allStocks: allStocks,
    filterStock: "Tata Motors",
    candleData: [],
    open: false,
  },
  reducers: {
    handleFluctuation: (state) => {
      state.indianIndices = state.indianIndices.map((index) => {
        const updatedData = fluctuateIndexData(index.value);
        return {
          ...index,
          value: updatedData.value,
          change: updatedData.change,
          percent: updatedData.percent,
          up: updatedData.up,
        };
      });
    },

    handleAllStocks: (state) => {
      state.allStocks = state.allStocks.map((index) => {
        const updatedData = fluctuateIndexData(index.value);
        return {
          ...index,
          value: updatedData.value,
          change: updatedData.change,
          percent: updatedData.percent,
          up: updatedData.up,
        };
      });
    },
    handlerOpener: (state) => {
      state.open = !state.open;
    },
    handleFilter: (state, { payload }) => {
      state.filterStock = payload;
    },
    handleCandle: (state, { payload }) => {
      state.candleData.push(payload);
    },
    clearCandleList: (state) => {
      state.candleData = [];
    },
  },
});

export const {
  handleFluctuation,
  handleAllStocks,
  handlerOpener,
  handleFilter,
  handleCandle,
  clearCandleList,
} = stockSlice.actions;

export default stockSlice.reducer;
