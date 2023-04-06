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
  const [selectedDay, setSelectedDay] = useState(
    searchItemInArr(days, currDayId)
  );
  const [selectedMonth, setSelectedMonth] = useState(
    searchItemInArr(months, currMonthId)
  );
  const [selectedYear, setSelectedYear] = useState(
    searchItemInArr(years, currYearId)
  );
  function fillDays() {
    let daysArr = [];
    if (["1", "3", "5", "7", "8", "10", "12"].includes(currMonthId)) {
      for (let i = 1; i < 32; i += 1) {
        daysArr.push({ id: i, name: i });
      }
    }
    if (["4", "6", "9", "11"].includes(currMonthId)) {
      for (let i = 1; i < 31; i += 1) {
        daysArr.push({ id: i, name: i });
      }
    }
    if (currMonthId === "2") {
      for (let i = 1; i < 29; i += 1) {
        daysArr.push({ id: i, name: i });
      }
    }
    setDays(daysArr);
  }
  function fillYears() {
    const yearsArr = [];
    const currDate = new Date().getFullYear();
    if (type === "birth") {
      for (let i = 1920; i < currDate - 20; i += 1) {
        yearsArr.push({ id: i, name: i });
      }
    }
    if (type === "date") {
      for (let i = 1920; i < currDate; i += 1) {
        yearsArr.push({ id: i, name: i });
      }
    }
    setYears(yearsArr);
  }

  function searchItemInArr(arr, id) {
    return arr.filter((el) => el.id === id)[0];
  }

  useLayoutEffect(() => {
    fillYears();
  }, []);

  useEffect(() => {
    fillDays();
    setSelectedYear(searchItemInArr(years, currYearId));
    setSelectedMonth(searchItemInArr(months, currMonthId));
    setSelectedDay(searchItemInArr(days, currDayId));
  }, [currMonthId]);

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
