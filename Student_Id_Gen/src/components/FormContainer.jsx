import Form from "./Form";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "../utils/theme";
const FormContainer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-white/20 max-w-xl w-full mx-auto">
        <h1>Student Id Form Generator</h1>
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default FormContainer;
