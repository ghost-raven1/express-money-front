import "./AmountOfCreditFormRange.scss";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
const AmountOfCreditFormRange = ({
  setValue,
  value,
  maxValue,
  minValue,
  step,
}) => {
  const ref = useRef();
  const [fillPercent, setFillPercent] = useState(51)
  function changeRangeFill () {
    const active = ref.current
    active.style.maxWidth = fillPercent.toString() + '%'
    if (fillPercent === 1) active.style.height = '70%'
    if (fillPercent === 2) active.style.height = '75%'
    if (fillPercent === 3) active.style.height = '85%'
    if (fillPercent === 4) active.style.height = '90%'
    if (fillPercent === 5) active.style.height = '95%'
    if (fillPercent === 6) active.style.height = '98%'
    if (fillPercent === 8) active.style.height = '99%'
    if (fillPercent === 9) active.style.height = '100%'
    if (fillPercent === 97) active.style.borderRadius = '16px 0 0 16px'
    if (fillPercent === 98) active.style.borderRadius = '16px 13px 13px 16px'
    if (fillPercent === 99) active.style.borderRadius = '16px'
  }

  function fillPercentData () {
    setFillPercent(value / maxValue * 100)
  }

  useEffect(() => {
    fillPercentData()
    changeRangeFill()
  }, [value, fillPercent])


  return (
    <div className="amount-of-credit-form-range">
      <div className="amount-of-credit-form-range-data">
        <div className="amount-of-credit-form-range-data_active" ref={ref} />
        <div className="amount-of-credit-form-range-data__text">
          Размер займа
        </div>
        <div className="amount-of-credit-form-range-data__value">{value} Р</div>
      </div>
      <input
        className="amount-of-credit-form-range__range"
        type="range"
        max={maxValue}
        min={minValue}
        step={step}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </div>
  );
};

AmountOfCreditFormRange.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  step: PropTypes.number,
};
AmountOfCreditFormRange.defaultProps = {
  setValue: () => {},
  value: 0,
  maxValue: 100000,
  minValue: 1000,
  step: 100,
};
export default AmountOfCreditFormRange;
