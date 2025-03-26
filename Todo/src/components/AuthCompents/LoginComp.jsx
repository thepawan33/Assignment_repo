import styles from "./css/SignupComp.module.css";
import FormButton from "../reusable/Buttons/FormButton";
import FormInput from "../reusable/Inputs/FormInput";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { openAlert } from "../../utils/openAlert";

export default function LoginComp() {
  const navigate = useNavigate();
  const inputValue = useSelector((state) => state.auth.inputValue);
  const dispatch = useDispatch();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser) {
      if (
        inputValue.email == storedUser.email &&
        inputValue.password == storedUser.password
      ) {
        sessionStorage.setItem("user_login", true);
        openAlert(dispatch, "success", "Login Successfull :)  ");
        setTimeout(() => {
          navigate("/main");
        }, 1000);
      } else {
        openAlert(dispatch, "error", " Invailid Credentials");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.h2}> Log In </h2>
        <span className={styles.span}>It's quick and easy.</span>

        <form onSubmit={handleLoginUser}>
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
            <FormButton text={"Log In"} />
          </div>
        </form>
      </div>
    </div>
  );
}
