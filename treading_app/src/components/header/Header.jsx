import Logo from "./Logo";
import Avatar from "@mui/material/Avatar";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <div className="h-[80px] w-full bg-[#f8f9fa]/25 flex flex-wrap border-b content-center justify-between pr-4 pl-3">
      <Logo />
      <div className="hidden sm:inline">
        <SearchBox />
      </div>
      <div>
        <Avatar sx={{ backgroundColor: "#FF5722" }}>P</Avatar>
      </div>
    </div>
  );
};

export default Header;
