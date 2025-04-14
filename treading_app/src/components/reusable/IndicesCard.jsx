const IndicesCard = ({ name, value, change, percent, up }) => {
  return (
    <div className="h-[60px] w-[200px] p-2 rounded-lg shadow-lg shadow-black/10 ring ring-black/5 flex flex-col justify-between bg-white">
      <p className="font-bold">{name || "NIFTY 50"}</p>
      <div className="flex text-sm">
        <p className="font-medium"> {value || "22200"}</p>
        <p className={`ml-2 ${up ? "text-[#005200]" : "text-[#f31717]"} `}>
          {change || "+429.40"}
          <span>({percent || "+1.92%"})</span>
        </p>
      </div>
    </div>
  );
};

export default IndicesCard;
