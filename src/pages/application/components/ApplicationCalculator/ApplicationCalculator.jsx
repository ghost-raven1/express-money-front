import "./ApplicationCalculator.scss";
import { useEffect, useState } from "react";
const ApplicationCalculator = () => {
  const [calcPeriod] = useState(localStorage.getItem("calcPeriod"));
  const [interest] = useState(localStorage.getItem("interest"));
  const [calcAmount] = useState(localStorage.getItem("calcAmount"));
  const [returnDay, setReturnDay] = useState("");
  const [returnMonth, setReturnMonth] = useState("");
  const [returnYear, setReturnYear] = useState("");

  function calcReturnDate() {
    const today = new Date();
    today.setDate(today.getDate() + +calcPeriod);
    const day = today.getDay().toString();
    const month = today.getMonth().toString();
    const year = today.getFullYear().toString();
    setReturnDay(day);
    setReturnMonth(month);
    setReturnYear(year);
  }

  function convertMonthToLetters(month) {
    if (month === "1") return "Января";
    if (month === "2") return "Февраля";
    if (month === "3") return "Марта";
    if (month === "4") return "Апреля";
    if (month === "5") return "Мая";
    if (month === "6") return "Июня";
    if (month === "7") return "Июля";
    if (month === "8") return "Августа";
    if (month === "9") return "Сентября";
    if (month === "10") return "Октября";
    if (month === "11") return "Ноября";
    if (month === "12") return "Декабря";
  }

  useEffect(() => {
    calcReturnDate();
  }, []);

  return (
    <div className="app-calculator">
      <div className="app-calculator-top">
        <div className="app-calculator-top__text">Вы получите:</div>
        <div className="app-calculator-top__text">{calcAmount} рублей</div>
        <div className="app-calculator-top__text">На срок:</div>
        <div className="app-calculator-top__text">{calcPeriod} дней</div>
      </div>
      <div className="app-calculator__delimiter" />
      <div className="app-calculator-bottom">
        <div className="app-calculator-bottom__text">К возврату:</div>
        <div className="app-calculator-bottom__text">
          {+calcAmount + +interest} рублей
        </div>
        <div className="app-calculator-bottom__text">До (включительно):</div>
        <div className="app-calculator-bottom__text">
          {returnDay} {convertMonthToLetters(returnMonth)} {returnYear}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCalculator;
