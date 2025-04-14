import { AgCharts } from "ag-charts-react";
import { useState } from "react";

import candleData from "../../utils/candleData";
import "ag-charts-enterprise";

const CandleChart = () => {
  const [options, setOptions] = useState({
    data: candleData(),
    title: {
      text: "S&P 500 Index",
    },
    subtitle: {
      text: "Daily High and Low Prices",
    },
    footnote: {
      text: "1 Aug 2023 - 1 Nov 2023",
    },
    series: [
      {
        type: "candlestick",
        xKey: "date",
        xName: "Date",
        lowKey: "low",
        highKey: "high",
        openKey: "open",
        closeKey: "close",
      },
    ],
  });

  return (
    <div className="flex flex-wrap justify-center mt-5 w-full">
      <AgCharts options={options} className="h-[600px] w-[90%] " />
    </div>
  );
};

export default CandleChart;
