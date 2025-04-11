import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { handleInputField } from "../../redux/slice/formSlice";
import { useDispatch } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, allergyName, theme) {
  return {
    fontWeight: allergyName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MultiSelector = ({ label, name, menuItem }) => {
  const theme = useTheme();
  const [allergyName, setAllergyName] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setAllergyName(typeof value === "string" ? value.split(",") : value);
    dispatch(handleInputField({ [name]: value }));
  };

  return (
    <div>
      <FormControl size="small" fullWidth margin="normal">
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={allergyName}
          onChange={handleChange}
          name={name}
          label={label}
          MenuProps={MenuProps}
          required
        >
          {menuItem?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, allergyName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiSelector;
