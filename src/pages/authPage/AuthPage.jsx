import AppInput from "../../components/AppInput/AppInput.jsx";
import AppButton from "../../components/AppButton/AppButton.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenAsync, sendPasswordAsync } from "../../store/reducers/auth.js";
import "./AuthPage.scss";
import { getUserByIdAsync } from "../../store/reducers/users.js";
import AppPhoneInput from "../../components/AppPhoneInput/AppPhoneInput.jsx";
import { RouterPath } from "../../utils/constants.js";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.usersReducer);
  const [username, setUsername] = useState("+79528078160");
  const [password, setPassword] = useState("tree199522");
  const [step, setStep] = useState(1);
  function sendData() {
    const errors = [];
    if (!password?.length) errors.push("Не введен пароль");
    if (!username?.length) errors.push("Не заполнено имя пользователя");
    if (errors?.length > 0) {
      for (const error of errors) console.error(error);
    }
    if (step === 1) {
      if (!errors?.length) {
        dispatch(
          getUserByIdAsync({
            username,
          })
        );
        setStep(step + 1);
      }
    }
    if (step === 2) {
      dispatch(
        sendPasswordAsync({
          user: userId,
        })
      ).then(() => {
        dispatch(
          getTokenAsync({
            data: {
              username,
              password,
            },
          })
        ).then(() => {
          navigate(RouterPath.application);
        });
      });
    }
  }

  function loginButtonText() {
    if (step === 1) return "Получить пароль";
    if (step === 2) return "Войти";
  }

  return (
    <div className="auth">
      <AppPhoneInput
        label="Номер телефона"
        onInput={setUsername}
        value={username}
        isDisabled={step === 2}
      />
      {step === 2 && (
        <AppInput label="Пароль" onInput={setPassword} value={password} />
      )}
      <AppButton
        mode="black"
        onClick={() => {
          sendData();
        }}
      >
        {loginButtonText()}
      </AppButton>
    </div>
  );
};

export default AuthPage;
