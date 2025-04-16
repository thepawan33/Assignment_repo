import Logo from "./Logo";
import Avatar from "@mui/material/Avatar";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <div className="h-[80px] w-full bg-[#f8f9fa]  flex flex-wrap content-center justify-between pr-4 pl-3 sticky top-0 z-20">
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
