import { AgCharts } from "ag-charts-react";

import "ag-charts-enterprise";

const CandleChart = ({ candleData, title, subtitle, text }) => {
  const options = {
    data: candleData,

    ...(title && {
      title: {
        text: title,
      },
    }),
    ...(subtitle && {
      subtitle: {
        text: subtitle,
      },
    }),

    ...(text && {
      footnote: {
        text: text,
      },
    }),

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
    axes: [
      {
        type: "time",
        position: "bottom",
        title: {
          text: "Date",
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Price",
        },
      },
    ],
  };

  return <AgCharts options={options} className="h-full w-full" />;
};

export default CandleChart;
