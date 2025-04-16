import { useSelector, useDispatch } from "react-redux";

import { handleCandle, clearCandleList } from "../../redux/slices/stockSlice";

import { generateCandleFromValue } from "../../utils/fakeCandleData";
import { useEffect } from "react";

const TitleStock = () => {
  const dispatch = useDispatch();

  const { filterStock, allStocks } = useSelector((state) => state.stock);

  const filterData = allStocks.filter((stock) => stock.name === filterStock);

  const dummyData = filterData[0];

  const newCandleData = generateCandleFromValue(dummyData);

  useEffect(() => {
    dispatch(handleCandle(newCandleData));
  }, [dummyData]);

  useEffect(() => {
    dispatch(clearCandleList());
  }, []);

  return (
    <div className=" flex flex-wrap flex-row">
      <img src={dummyData.logo} alt="logo" className="h-10 rounded-xl mr-1" />
      <p>{dummyData.name}</p>
      <p className="mr-2 ml-2 text-[16px] pt-1"> ₹{dummyData.value}</p>
      <p
        className={
          dummyData.up
            ? `text-[14px] pt-[5px] text-green-600`
            : `text-[14px] pt-[5px] text-red-600`
        }
      >
        {dummyData.change}
        <span>({dummyData.percent})</span>
      </p>
    </div>
  );
};

export default TitleStock;
