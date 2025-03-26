import FormInput from "../reusable/Inputs/FormInput";
import { useSelector, useDispatch } from "react-redux";
import FormButton from "../reusable/Buttons/FormButton";
import styles from "./css/SignupComp.module.css";

import { useNavigate } from "react-router-dom";

import { openAlert } from "../../utils/openAlert";

export default function SignupComp() {
  const inputValue = useSelector((state) => state.auth.inputValue);

  const dispatch = useDispatch();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    sessionStorage.setItem("user", JSON.stringify(inputValue));
    openAlert(dispatch, "success", "Congratulation Signup Successfull");
    setTimeout(() => {
      useNavigate("/login");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.h2}> Sign Up</h2>
        <span className={styles.span}>It's quick and easy.</span>
        <form onSubmit={handleSignUpSubmit}>
          <FormInput
            label={"Name"}
            name={"name"}
            value={inputValue.name}
            type={"text"}
          />
          <FormInput
            label={"Email"}
            name={"email"}
            value={inputValue.email}
            type={"email"}
          />
          <FormInput
            label={"Password"}
            name={"password"}
            value={inputValue.password}
            type={"password"}
          />
          <div className={styles.button}>
            <FormButton text={"sing up"} />
          </div>
        </form>
      </div>
    </div>
  );
}
