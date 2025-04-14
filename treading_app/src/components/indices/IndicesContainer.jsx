import IndicesCard from "../reusable/IndicesCard";

const IndicesContainer = ({ indicesList }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {indicesList?.map((el) => {
        return (
          <IndicesCard
            key={el.name}
            name={el.name}
            value={el.value}
            change={el.change}
            percent={el.percent}
            up={el.up}
          />
        );
      })}
    </div>
  );
};

export default IndicesContainer;
