import ShowChartIcon from "@mui/icons-material/ShowChart";

const Logo = () => {
  return (
    <div>
      <ShowChartIcon sx={{ color: "blue", fontSize: "40px" }} />
      <span className="text-blue-600 text-3xl font-bold ml-1">StockPulse</span>
    </div>
  );
};

export default Logo;
