import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {},
    preview: false,
    id: false,
    idData: {},
  },
  reducers: {
    handleInputField: (state, { payload }) => {
      state.formData = { ...state.formData, ...payload };
    },
    handlePreview: (state) => {
      state.preview = !state.preview;
    },
    handleSubmitForm: (state) => {
      state.idData = state.formData;
      state.id = true;
    },
  },
});

export const { handleInputField, handlePreview, handleSubmitForm } =
  formSlice.actions;
export default formSlice.reducer;
