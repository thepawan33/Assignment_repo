import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const StockCard = ({ name, value, logo, change, percent, up }) => {
  return (
    <div className="h-[150px] w-[200px] p-2 pl-3 rounded-lg shadow-lg shadow-black/10 ring ring-black/5 flex flex-wrap flex-col bg-white">
      <img
        src={logo || "https://logo.clearbit.com/amazon.com"}
        className="h-[50px] w-[30%] rounded-lg"
      />

      <p className="font-bold mb-2">{name || "NIFTY 50"}</p>
      <div className="flex flex-col text-sm gap-1">
        <p className="font-medium">
          <CurrencyRupeeIcon sx={{ fontSize: "15px" }} />
          {value || "22000"}
        </p>
        <p className={`${up ? "text-[#005200]" : "text-[#f31717]"} `}>
          {change || "+429.4"}
          <span>({percent || "+1.92%"})</span>
        </p>
      </div>
    </div>
  );
};

export default StockCard;
