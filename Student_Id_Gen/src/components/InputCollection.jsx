import InuptField from "./reusable/InputField";
import { useDispatch, useSelector } from "react-redux";

import { handleInputField } from "../redux/slice/formSlice";

export default function InputCollection() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(handleInputField({ [name]: value }));
  };

  return (
    <div>
      <InuptField
        id={"name"}
        name={"name"}
        label={"name"}
        value={formData?.name}
        handleChange={onChangeHandler}
      />
      <InuptField
        id={"roll_num"}
        name={"roll_num"}
        label={"Roll Number"}
        value={formData?.roll_num}
        handleChange={onChangeHandler}
      />
      <InuptField
        id={"rack_num"}
        name={"rack_num"}
        label={"Rack Number"}
        value={formData?.roll_num}
        handleChange={onChangeHandler}
      />
    </div>
  );
}
