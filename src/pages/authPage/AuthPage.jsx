import AppInput from "../../components/AppInput/AppInput.jsx";
import AppButton from "../../components/AppButton/AppButton.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAsync } from "../../store/reducers/auth.js";
import "./AuthPage.scss";
import { getUserByIdAsync } from "../../store/reducers/users.js";
import AppPhoneInput from "../../components/AppPhoneInput/AppPhoneInput.jsx";
import { useNavigate } from "react-router-dom";
import { getUserProfileAsync } from "../../store/reducers/profiles.js";

const AuthPage = () => {
  const { userId } = useSelector((store) => store.usersReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  }

  useEffect(() => {
      if (userId) dispatch(getUserProfileAsync(userId, navigate));
  }, [userId]);

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
