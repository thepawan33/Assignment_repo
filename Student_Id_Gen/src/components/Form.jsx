import DropDownContainer from "./DropDownContainer";
import InputCollection from "./InputCollection";
import ImageSelector from "./reusable/ImageSelector";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { handleSubmitForm } from "../redux/slice/formSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSubmitForm());
    navigate("/id");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>
        <InputCollection />
        <DropDownContainer />
        <ImageSelector />
        <div className="text-center mt-20">
          <Button type="submit" variant="outlined">
            Generate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
