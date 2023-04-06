import AppInput from "../../components/AppInput/AppInput.jsx";
import AppButton from "../../components/AppButton/AppButton.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authAsync } from "../../store/reducers/auth.js";
import "./AuthPage.scss";
import { getUserByIdAsync } from "../../store/reducers/users.js";
import AppPhoneInput from "../../components/AppPhoneInput/AppPhoneInput.jsx";
import {RouterPath} from "../../utils/constants.js";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("+79528078160");
  const [password, setPassword] = useState("tree199522");
  function sendData() {
    dispatch(
      authAsync({
        data: {
          username,
          password,
        },
      })
    );
    dispatch(
      getUserByIdAsync({
        username,
      })
    );
    navigate(RouterPath.application)
  }

  return (
    <div className="auth">
      <AppPhoneInput label="Номер телефона" onInput={setUsername} value={username} />
      <AppInput label="Пароль" onInput={setPassword} value={password} />
      <AppButton
        mode="black"
        onClick={() => {
          sendData();
        }}
      >
        Войти
      </AppButton>
    </div>
  );
};

export default AuthPage;
