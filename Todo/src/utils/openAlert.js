import { handleAlert } from "../redux/slices/alertSlice";

export const openAlert = (dispatch, severity, message) => {
  dispatch(handleAlert({ open: true, severity, message }));
};
