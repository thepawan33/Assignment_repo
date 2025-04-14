import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchBox = () => {
  const slot = {
    input: {
      endAdornment: (
        <InputAdornment position="start">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    },
  };

  return <TextField size="small" slotProps={slot} label="Search Stock" />;
};

export default SearchBox;
