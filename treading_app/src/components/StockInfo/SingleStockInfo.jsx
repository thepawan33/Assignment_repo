import { useSelector } from "react-redux";

const SingleStockInfo = () => {
  const { candleData } = useSelector((state) => state.stock);

  const currentData = candleData[candleData.length - 1];

  const stockData = {
    name: "Tata Motors",
    logo: "https://logo.clearbit.com/tatamotors.com",
    ltp: 960.25,
    open: 945.1,
    high: 965.0,
    low: 940.2,
    close: 950.0,
    volume: 2532145,
    atp: 952.75,
    lastTradeQty: 50,
  };

  const { ltp, open, high, low, close, volume, atp, lastTradeQty } = stockData;

  const chg = ltp - close;
  const chg_perc = ((chg / close) * 100).toFixed(2);

  return (
    <div style={{ minWidth: "250px" }} className="flex flex-wrap flex-col">
      <h2 className="text-xl font-semibold text-blue-600">Performance</h2>
      <div className="flex flex-row justify-evenly">
        <p>
          <strong>LTP:</strong> ₹{ltp}
        </p>
        <p>
          <strong>Open:</strong> ₹{currentData?.open || open}
        </p>
      </div>
      <div className="flex flex-row justify-evenly">
        <p>
          <strong>High:</strong> ₹{currentData?.high || high}
        </p>
        <p>
          <strong>Low:</strong> ₹{currentData?.low || low}
        </p>
      </div>

      <div className="flex flex-row justify-evenly">
        <p>
          <strong>Previous Close:</strong> ₹{close}
        </p>
        <p>
          <strong>Volume:</strong>
          {currentData?.volume || volume.toLocaleString()}
        </p>
      </div>
      <div className="flex flex-row justify-evenly">
        <p>
          <strong>ATP:</strong> ₹{atp}
        </p>
        <p>
          <strong>Last Trade Qty:</strong> {lastTradeQty}
        </p>
      </div>
    </div>
  );
};

export default SingleStockInfo;
