import StockContainer from "./StockContainer";

import { topGainers, topLosers } from "../../utils/gainerLoserData";

const GainersLosers = () => {
  return (
    <div className="h-[370px] w-full  flex flex-wrap gap-2  overflow-hidden pl-[90px] pr-[30px] mb-20">
      <div className="flex-1 h-full overflow-y-auto border-r-[1px]">
        <p className="text-center text-2xl text-green-600 font-semibold mb-5 mt-2 sticky top-0 ">
          Top Gainers
        </p>
        <StockContainer gainerLoserList={topGainers} />
      </div>

      <div className="flex-1 h-full overflow-y-auto pl-[4px] ">
        <p className="text-center text-2xl text-red-600 font-semibold mb-5 mt-2 sticky top-0">
          Top Losers
        </p>
        <StockContainer gainerLoserList={topLosers} />
      </div>
    </div>
  );
};

export default GainersLosers;
