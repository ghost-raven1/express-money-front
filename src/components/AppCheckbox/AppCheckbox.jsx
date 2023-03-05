import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles/AppCheckbox.scss";
import SvgSelector from "../SvgSelector/SvgSelector";

const AppCheckbox = ({ label, isDisabled, onChange, mode, value, checked }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  function checkmarkStyles () {
      if (!!isChecked) return 'app-checkbox__checkmark app-checkbox__checkmark_active'
      else return 'app-checkbox__checkmark'
  }

  return (
    <label className="app-checkbox__content ">
      <input
        type="checkbox"
        className="app-checkbox__input"
        value={value}
        onChange={(e) => {
          onChange(e.target.checked);
          setIsChecked(e.target.checked);
        }}
        disabled={isDisabled}
        checked={isChecked}
      />
      <span className={checkmarkStyles()}>
        <SvgSelector id="checkbox-active" />
      </span>
      <label className="app-checkbox__label">{label}</label>
    </label>
  );
};

AppCheckbox.defaultProps = {
  label: "",
  onChange: () => {},
  isDisabled: false,
  mode: "green",
  value: false,
};

AppCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  value: PropTypes.bool,
};

export default AppCheckbox;
