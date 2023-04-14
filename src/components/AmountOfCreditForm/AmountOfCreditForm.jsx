import "./AmountOfCreditForm.scss";
import {useEffect, useLayoutEffect, useState} from "react";
import AmountOfCreditFormRange from "./components/AmountOfCreditFormRange/AmountOfCreditFormRange.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
import AppButton from "../AppButton/AppButton.jsx";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultProductAsync } from "../../store/reducers/products.js";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../utils/constants.js";
import {makeAApplication} from "../../scripts/common.js";
const AmountOfCreditForm = () => {
  const priceLabels = ["1000 руб", "50 000 руб", "100 000 руб"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { freePeriod, interests } = useSelector(
    (state) => state.productsReducer
  );
  const [days] = useState([
    { id: "1", name: "1 день" },
    { id: "7", name: "7 дней" },
    { id: "30", name: "30 дней" },
  ]);
  const [freePeriodData, setFreePeriodData] = useState(freePeriod);
  const [interestsData, setInterestsData] = useState(interests || 1.00);
  const [calcAmount, setCalcAmount] = useState(15000); // id_amount_requested
  const [calcPeriod, setCalcPeriod] = useState(1); // id_period_requested

  function calcInterests() {
    const i =
      ((calcAmount * interests) / 100) *
      (calcPeriod - freePeriodData);
    setInterestsData(i);
  }

  useLayoutEffect(() => {
    dispatch(getDefaultProductAsync());
  }, []);

  useEffect(() => {
    calcInterests();
    localStorage.setItem('calcPeriod', calcPeriod?.toString());
    localStorage.setItem('calcAmount', calcAmount?.toString());
    localStorage.setItem('interest', interestsData?.toString());
  }, [calcAmount, interestsData, calcPeriod, freePeriodData]);

  return (
    <div className="amount-of-credit-form">
      <div className="amount-of-credit-form__title">Выберите сумму</div>
      <div className="credit-form-container">
        <div className="credit-form-container__left">
          <AmountOfCreditFormRange
            value={+calcAmount}
            setValue={setCalcAmount}
            step={1000}
          />
          <div className="credit-form-container__left-prices">
            {priceLabels?.length &&
              priceLabels.map((label, idx) => {
                return (
                  <div
                    className="credit-form-container__left-prices-price"
                    key={idx}
                  >
                    {label}
                  </div>
                );
              })}
          </div>
          <div className="credit-form-container__left-text">
            К возврату {+calcAmount + interestsData} ₽
          </div>
        </div>
        <AppSelect optionsList={days} mode="grey" onInput={setCalcPeriod} />
      </div>
      <div className="main__button-border main__button-border_black">
        {/*<a href="https://platform.expressmoney.com/loans/" target="_blank">*/}
          <AppButton mode="black" onClick={() => makeAApplication({navigate, routerPath: RouterPath.application})}>
            ОФОРМИТЬ ЗАЯВКУ
            <SvgSelector id="arrow-in-round" />
          </AppButton>
        {/*</a>*/}
      </div>
      <div className="amount-of-credit-form__bottom">
      {/*  <AppCheckbox label="Карта лояльности" />*/}
      <div className="amount-of-credit-form__bottom-percent">
        {interests || 1.00}% в сутки
      </div>
      </div>
    </div>
  );
};

export default AmountOfCreditForm;
