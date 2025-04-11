import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { handleInputField } from "../../redux/slice/formSlice";

const ITEM_HEIGHT = 48;
const MENU_MAX_HEIGHT = ITEM_HEIGHT * 5;

export default function DropDown({ name, label, menuItem }) {
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(handleInputField({ [event.target.name]: event.target.value }));
  };

  return (
    <div>
      <FormControl fullWidth size="small" margin="normal">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          required
          name={name}
          value={age}
          label={label}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: MENU_MAX_HEIGHT,
                overflowY: "auto",
              },
            },
          }}
        >
          {menuItem?.map((el, index) => (
            <MenuItem key={index} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
