import "./AmountOfCreditFormRange.scss";
import PropTypes from "prop-types";
const AmountOfCreditFormRange = ({
  setValue,
  value,
  maxValue,
  minValue,
  step,
}) => {
  return (
    <div className="amount-of-credit-form-range">
      <div className="amount-of-credit-form-range-data">
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
        onChange={(event) => setValue(event.target.value)}
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
