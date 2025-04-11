import TextField from "@mui/material/TextField";

const InuptField = ({ label, id, name, value, handleChange }) => {
  return (
    <TextField
      margin="normal"
      label={label}
      id={id}
      name={name}
      value={value}
      variant="outlined"
      required
      size="small"
      type="text"
      fullWidth
      onChange={handleChange}
    />
  );
};
export default InuptField;
