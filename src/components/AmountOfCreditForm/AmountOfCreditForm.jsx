import "./AmountOfCreditForm.scss";
import {useEffect, useLayoutEffect, useState} from "react";
import AmountOfCreditFormRange from "./components/AmountOfCreditFormRange/AmountOfCreditFormRange.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
import AppButton from "../AppButton/AppButton.jsx";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultProductAsync } from "../../store/reducers/products.js";
const AmountOfCreditForm = () => {
  // TODO: Проверить логику
  const priceLabels = ["1000 руб", "50 000 руб", "100 000 руб"];
  const dispatch = useDispatch();
  const { freePeriod, interests } = useSelector(
    (state) => state.productsReducer
  );
  const [days] = useState([
    { id: "1", name: "1 день" },
    { id: "7", name: "7 дней" },
    { id: "30", name: "30 дней" },
  ]);
  const [freePeriodData, setFreePeriodData] = useState(freePeriod);
  const [interestsData, setInterestsData] = useState(interests);
  const [calcAmount, setCalcAmount] = useState(15000); // id_amount_requested
  const [calcPeriod, setCalcPeriod] = useState(1); // id_period_requested
  // const [calcPromocode, setPromocode] = useState(); // id_promocode_code

  function calcInterests() {
    const i =
      ((calcAmount * interests) / 100) *
      (calcPeriod - freePeriodData);
    console.log("interests", i);
    setInterestsData(i);
  }

  // get_promocode_product(_event):
  //     calc_promocode.value = calc_promocode.value.upper()
  //     if len(calc_promocode.value) > 4:
  //         url = f"{API}/promocodes/promocode/{calc_promocode.value}"
  //         ajax.get(url, oncomplete=set_promocode_product, mode="json")
  //         change_table(None)

  useLayoutEffect(() => {
    dispatch(getDefaultProductAsync());
  }, []);

  useEffect(() => {
    calcInterests();
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
        <a href="https://platform.expressmoney.com/loans/" target="_blank">
          <AppButton mode="black">
            ОФОРМИТЬ ЗАЯВКУ
            <SvgSelector id="arrow-in-round" />
          </AppButton>
        </a>
      </div>
      <div className="amount-of-credit-form__bottom">
      {/*  <AppCheckbox label="Карта лояльности" />*/}
      <div className="amount-of-credit-form__bottom-percent">
        {interests}% в сутки
      </div>
      </div>
    </div>
  );
};

export default AmountOfCreditForm;
