import "./AmountOfCreditForm.scss";
import { useState } from "react";
import AmountOfCreditFormRange from "./components/AmountOfCreditFormRange/AmountOfCreditFormRange.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
import AppButton from "../AppButton/AppButton.jsx";
import AppCheckbox from "../AppCheckbox/AppCheckbox.jsx";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";
const AmountOfCreditForm = () => {
  const [amount, setAmount] = useState(50000);
  const [days] = useState([{ id: "1", name: "1 день" }]);

  return (
    <div className="amount-of-credit-form">
      <div className="amount-of-credit-form__title">Выберите сумму</div>
      <div className="credit-form-container">
        <div className="credit-form-container__left">
          <AmountOfCreditFormRange value={amount} setValue={setAmount} />
          <div className="credit-form-container__left-prices">
            <div className="credit-form-container__left-prices-price">
              1000 руб
            </div>
            <div className="credit-form-container__left-prices-price">
              50 000 руб
            </div>
            <div className="credit-form-container__left-prices-price">
              100 000 руб
            </div>
          </div>
          <div className="credit-form-container__left-text">
            К возврату 66 000 ₽
          </div>
        </div>
        <AppSelect optionsList={days} mode="grey" />
      </div>
      <div className="main__button-border main__button-border_black">
        <a href="https://platform.expressmoney.com/loans/" target='_blank'>
          <AppButton mode="black">
            ОФОРМИТЬ ЗАЯВКУ
            <SvgSelector id="arrow-in-round" />
          </AppButton>
        </a>
      </div>
      <div className="amount-of-credit-form__bottom">
        <AppCheckbox label="Карта лояльности" />
        <div className="amount-of-credit-form__bottom-percent">1% в сутки</div>
      </div>
    </div>
  );
};

export default AmountOfCreditForm;
