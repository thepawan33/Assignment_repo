import Form from "./Form";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "../utils/theme";
const FormContainer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-white/20 max-w-xl w-full mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-white mb-6">
          Student ID Card Generator
        </h1>
        <p className="text-sm text-gray-300 text-center mb-4">
          Fill in the details below to generate your personalized student ID
          card.
        </p>
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default FormContainer;
