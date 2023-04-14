import "./AppCreditCard.scss";
import AppInput from "../AppInput/AppInput.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
import { useEffect, useState } from "react";
const AppCreditCard = ({
  setCardNumber,
  cardNumber,
  setCardOwnerName,
  cardOwnerName,
  setCVV,
  CVV,
  setYear,
  setMonth,
}) => {
  const [cardMonthsArr, setCardMonthsArr] = useState([]);
  const [cardYearsArr, setCardYearsArr] = useState([]);
  const [slicedCurrYear, setSlicedCurrYear] = useState("23");

  function fillCardYearsArr() {
    const arr = [];
    const today = new Date();
    const currYear = today.getFullYear().toString();
    setSlicedCurrYear(currYear.slice(2));
    const valPeriodCard = +slicedCurrYear + 6;
    for (let i = +slicedCurrYear; i < valPeriodCard; i += 1) {
      arr.push({ id: i, name: i });
    }
    setCardYearsArr(arr);
  }

  function fillCardMonthArr() {
    const arr = [];
    for (let i = 1; i < 13; i += 1) {
      if (i.toString()?.length === 1) {
        arr.push({ name: "0" + i, id: "0" + i });
      } else arr.push({ name: i, id: i });
    }
    setCardMonthsArr(arr);
  }

  useEffect(() => {
    fillCardMonthArr();
    fillCardYearsArr();
  }, []);

  return (
    <div className="credit-card">
      <div className="credit-card-inner">
        <div style={{ width: "100%" }}>
          <AppInput
            label="Номер карты"
            mode="blue-label"
            onInput={setCardNumber}
            value={cardNumber}
          />
        </div>
        <div style={{ width: "100%" }}>
          <AppInput
            label="Владелец карты"
            mode="blue-label"
            onInput={setCardOwnerName}
            value={cardOwnerName}
          />
        </div>
        <div className="credit-card-inner__bottom">
          <div className="credit-card-inner__bottom-card-date">
            <div className="credit-card-inner__bottom-card-date-label">
              Срок действия карты
            </div>
            <div className="credit-card-inner__bottom-card-date-selects">
              <AppSelect
                optionsList={cardMonthsArr}
                defaultText="01"
                mode="withoutWordBreak borderless"
                onInput={setMonth}
              />
              <AppSelect
                optionsList={cardYearsArr}
                defaultText={slicedCurrYear}
                mode="withoutWordBreak borderless"
                onInput={setYear}
              />
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <AppInput
              label="CVV"
              mode="blue-label"
              onInput={setCVV}
              value={CVV}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCreditCard;
