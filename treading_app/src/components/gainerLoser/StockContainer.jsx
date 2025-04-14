import StockCard from "../reusable/StockCard";

const StockContainer = ({ gainerLoserList }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {gainerLoserList?.map((el) => {
        return (
          <StockCard
            key={el.name}
            name={el.name}
            value={el.value}
            logo={el.logo}
            change={el.change}
            percent={el.percent}
            up={el.up}
          />
        );
      })}
    </div>
  );
};

export default StockContainer;
