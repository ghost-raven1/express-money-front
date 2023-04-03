import "./RegistrationPage.scss";
import AppInput from "../../components/AppInput/AppInput.jsx";
import { useState } from "react";
import { createUserAsync } from "../../store/reducers/auth.js";
import { useDispatch } from "react-redux";
import AppButton from "../../components/AppButton/AppButton.jsx";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/constants.js";
import AppPhoneInput from "../../components/AppPhoneInput/AppPhoneInput.jsx";
const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();

  function postUsersUser() {
    dispatch(
      createUserAsync({
        data: {
          username,
          first_name: firstName,
          email,
          department: 5,
          ip: "",
          http_referer: "",
        },
      })
    ).then(() => {
      navigate(RouterPath.auth);
    });
  }

  return (
    <div className="registration">
      <AppPhoneInput onInput={setUsername} label="Номер телефона" />
      <AppInput onInput={setFirstName} label="Имя" />
      <AppInput onInput={setEmail} label="Email" />
      <AppButton mode="black" onClick={() => postUsersUser()}>
        Зарегистрироваться
      </AppButton>
    </div>
  );
};

export default RegistrationPage;
