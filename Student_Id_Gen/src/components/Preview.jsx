import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { handlePreview } from "../redux/slice/formSlice";
import { useDispatch, useSelector } from "react-redux";

const Preview = () => {
  const {
    preview,
    formData: { imageUrl },
  } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handlePreview());
  };

  return (
    <Dialog
      open={preview}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Image"}</DialogTitle>
      <DialogContent>
        <img src={imageUrl} alt="image" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Preview;
