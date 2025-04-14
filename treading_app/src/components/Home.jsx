import { Button } from "@mui/material";
import CandleChart from "./charts/CandleChart";
import GainersLosers from "./gainerLoser/GainersLosers";
import Indices from "./indices/Indices";
import IndicesCard from "./reusable/IndicesCard";
import StockCard from "./reusable/StockCard";
import StockListTable from "./StockListTable";
import { fetchDta } from "./apis/stockPrice";

export default function Home() {
  return (
    <div>
      <Button onClick={fetchDta}>Click me</Button>
      <Indices />
      <GainersLosers />
      <div className="p-25">
        <StockListTable />
      </div>
      <CandleChart />
    </div>
  );
}
