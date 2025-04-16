import CandleChart from "./reusable/CandleChart";
import GainersLosers from "./gainerLoser/GainersLosers";
import Indices from "./indices/Indices";
import StockListTable from "./StockListTable";

import StockInfo from "./StockInfo/StockInfo";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { handleFluctuation, handleAllStocks } from "../redux/slices/stockSlice";

import candleData from "../utils/candleData";
export default function Home() {
  const dispatch = useDispatch();
  const countRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      countRef.current += 1;

      dispatch(handleFluctuation());
      dispatch(handleAllStocks());
      if (countRef.current == 50) {
        clearInterval(intervalId);
        const conf = window.confirm(
          "Time is up! Would you like to restart the process?"
        );
        if (conf) window.location.reload();
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <StockInfo />
      <Indices />
      <GainersLosers />
      <div className="sm:p-25 pr-5 pl-5 sm:mb-0 mb-25">
        <StockListTable />
      </div>
      <div className="h-[600px] min-w-fit w-full sm:pl-20 sm:pr-20 mb-20">
        <CandleChart
          candleData={candleData()}
          title={"S&P 500 Index"}
          subtitle={"Daily High and Low Prices"}
          text={"1 Aug 2023 - 1 Nov 2023"}
        />
      </div>
    </div>
  );
}
