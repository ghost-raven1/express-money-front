import "./AppSelectGroup.scss";
import AppSelect from "../AppSelect/AppSelect.jsx";
import { useEffect, useLayoutEffect, useState } from "react";
const AppSelectGroup = ({
  setCurrDayId,
  setCurrMonthId,
  currMonthId,
  setCurrYearId,
  currYearId,
  currDayId,
  type,
  label,
}) => {
  const [days, setDays] = useState([]);
  const [months] = useState([
    { id: "1", name: "Январь" },
    { id: "2", name: "Февраль" },
    { id: "3", name: "Март" },
    { id: "4", name: "Апрель" },
    { id: "5", name: "Май" },
    { id: "6", name: "Июнь" },
    { id: "7", name: "Июль" },
    { id: "8", name: "Август" },
    { id: "9", name: "Сентябрь" },
    { id: "10", name: "Октябрь" },
    { id: "11", name: "Ноябрь" },
    { id: "12", name: "Декабрь" },
  ]);
  const [years, setYears] = useState([]);
  const [selectedDay, setSelectedDay] = useState({});
  const [selectedMonth, setSelectedMonth] = useState({});
  const [selectedYear, setSelectedYear] = useState({});
  function fillDays() {
    let daysArr = [];
    if (["1", "3", "5", "7", "8", "10", "12"].includes(currMonthId)) {
      for (let i = 1; i < 32; i += 1) {
        daysArr.push({ id: i.toString(), name: i.toString() });
      }
    }
    if (["4", "6", "9", "11"].includes(currMonthId)) {
      for (let i = 1; i < 31; i += 1) {
        daysArr.push({ id: i.toString(), name: i.toString() });
      }
    }
    if (currMonthId === "2") {
      for (let i = 1; i < 29; i += 1) {
        daysArr.push({ id: i.toString(), name: i.toString() });
      }
    }
    setDays(daysArr);
  }
  function fillYears() {
    const yearsArr = [];
    const currDate = new Date().getFullYear();
    if (type === "birth") {
      for (let i = 1952; i < currDate - 20; i += 1) {
        yearsArr.push({ id: i.toString(), name: i.toString() });
      }
    }
    if (type === "date") {
      for (let i = 1952; i < currDate; i += 1) {
        yearsArr.push({ id: i.toString(), name: i.toString() });
      }
    }
    setYears(yearsArr);
  }

  function searchItemInArr(arr, id) {
    return arr.filter((el) => el.id === id)[0];
  }

  useLayoutEffect(() => {
    fillYears();
    fillDays();
  }, []);

  useEffect(() => {
    setSelectedMonth(searchItemInArr(months, currMonthId));
    fillDays();
  }, [currMonthId]);

  useEffect(() => {
    setSelectedYear(searchItemInArr(years, currYearId));
  }, [setYears, currYearId])

  useEffect(() => {
    setSelectedDay(searchItemInArr(days, currDayId));
  }, [setDays, currDayId, days])

  return (
    <div className="select-group">
      <div className="select-group__label">{label}</div>
      <div className="select-group__selects">
        <AppSelect
          optionsList={days}
          onInput={setCurrDayId}
          mode="borderless"
          selected={selectedDay}
        />
        <AppSelect
          optionsList={months}
          onInput={setCurrMonthId}
          mode="borderless"
          selected={selectedMonth}
        />
        <AppSelect
          optionsList={years}
          onInput={setCurrYearId}
          mode="borderless"
          selected={selectedYear}
        />
      </div>
    </div>
  );
};

export default AppSelectGroup;
