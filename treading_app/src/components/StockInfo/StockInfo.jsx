import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import CandleChart from "../reusable/CandleChart";
import SingleStockInfo from "./SingleStockInfo";
import TitleStock from "./TitleStock";

import { useSelector, useDispatch } from "react-redux";
import { handlerOpener } from "../../redux/slices/stockSlice";

import { useMediaQuery } from "@mui/material";

export default function StockInfo() {
  let screen = useMediaQuery("(max-width:620px)");
  const open = useSelector((state) => state.stock.open);
  const candle_Data = useSelector((state) => state.stock.candleData);

  const proccessData = candle_Data.map((el) => ({
    ...el,
    date: new Date(el.date),
  }));

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handlerOpener());
  };

  return (
    <>
      <Dialog fullWidth fullScreen={screen} open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          <TitleStock />
        </DialogTitle>
        <DialogContent>
          <CandleChart candleData={proccessData} />
          <SingleStockInfo />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
