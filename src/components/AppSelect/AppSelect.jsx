import React, { useEffect, useState } from "react";
import "./styles/AppSelect.scoped.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import useComponentVisible from "../../scripts/hooks";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";

const AppSelect = ({
  selected,
  defaultText,
  optionsList,
  onInput,
  label,
  mode,
  isRequired,
  isRequiredText,
  setOptionObj,
  checkValid,
  isDisabled,
  isReq,
}) => {
  const [defaultSelectText, setDefaultSelectText] = useState(defaultText);
  let [showOptionList, setShowOptionList] = useState(false);
  const [valid, setValid] = useState(false);
  let { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const containerStyles = classNames(
    "custom-select-container",
    containerStyleModes()
  );
  const selectOptionStyles = classNames(
    "select-option",
    selectOptionStyleModes()
  );
  const selectedTextStyles = classNames(
    "selected-text",
    selectedTextStylesIsDisabled(),
    selectedTextStyleModes()
  );
  const arrowStyles = classNames("select-arrow", flipArrow());
  const selectItemsStyles = classNames("select-options", openSelectStyles());

  useEffect(() => {
    if (
      typeof selected?.name === "string" &&
      !selected?.name.includes("undefined")
    )
      setDefaultSelectText(selected?.name);
  }, [selected]);

  useEffect(() => {
    if (isRequired && selected?.name) setValid(true);
    if (isRequired && !selected?.name) setValid(false);
  }, [selected?.name]);

  useEffect(() => {
    checkValid(valid);
  });

  function handleListDisplay() {
    if (!!optionsList?.length) {
      if (!isDisabled) {
        setShowOptionList((prevState) => !prevState);
        setIsComponentVisible((isComponentVisible = !isComponentVisible));
      }
    } else {
      console.log("Не тот тип данных!, Сейчас:", typeof optionsList);
    }
  }

  function handleOptionClick(e) {
    setOptionObj(e);
    onInput(e.id);
    setIsComponentVisible(false);
    setDefaultSelectText(e?.name);
  }

  function flipArrow() {
    if (isComponentVisible) return "select-arrow-up";
  }
  function selectOptionStyleModes() {
    if (!!mode?.length) {
      if (mode.includes('grey')) return 'select-option_grey'
      if (mode.includes('white')) return 'select-option_white'
      if (mode.includes('borderless')) return 'select-option_borderless'
    }
  }
  function containerStyleModes() {
    if (!!mode?.length) {
      if (mode.includes('grey')) return 'custom-select-container_grey'
      if (mode.includes('white')) return 'custom-select-container_white'
      if (mode.includes('borderless')) return 'custom-select-container_borderless'
    }
    if (isComponentVisible) return "custom-select-container__opened";
  }

  function selectedTextStylesIsDisabled() {
    if (isDisabled) return "selected-text_disabled";
  }

  function selectedTextStyleModes() {
    if (mode?.length) {
      if (mode.includes("withoutWordBreak")) {
        return "selected-text_without-word-break";
      }
    }
  }

  function openSelectStyles() {
    if (isComponentVisible) {
      return "select-options__opened";
    }
  }

  function isNeed(req) {
    if (isReq) return "req";
    return "no-req";
  }

  return (
    <div className="app-select" ref={ref}>
      <div className="label-area">
        <label className="app-select__label">{label}</label>
        <label className={isNeed()}>*</label>
      </div>
      <div className={containerStyles}>
        <div className={selectedTextStyles} onClick={handleListDisplay}>
          {defaultSelectText}
          <SvgSelector className={arrowStyles} id="select-arrow-down" />
        </div>
        <ul className={selectItemsStyles}>
          {!!optionsList?.length &&
            isComponentVisible &&
            optionsList?.map((option, idx) => {
              return (
                <li
                  className={selectOptionStyles}
                  data-name={option?.name}
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                >
                  {option?.name}
                </li>
              );
            })}
        </ul>
      </div>
      {!showOptionList && isRequired && !valid && (
        <div className="app-select__error-text">{isRequiredText}</div>
      )}
    </div>
  );
};

AppSelect.propTypes = {
  selected: PropTypes.object,
  onInput: PropTypes.func,
  defaultText: PropTypes.string,
  optionsList: PropTypes.array.isRequired,
  label: PropTypes.string,
  mode: PropTypes.string,
  isRequired: PropTypes.bool,
  isReq: PropTypes.bool,
  checkValid: PropTypes.func,
  isRequiredText: PropTypes.string,
  setOptionObj: PropTypes.func,
  isDisabled: PropTypes.bool,
  isShowDefaultText: PropTypes.bool,
  isOnInputType: PropTypes.bool,
};

AppSelect.defaultProps = {
  defaultText: "Выберите",
  isOnInputType: true,
  isShowDefaultText: false,
  isDisabled: false,
  isRequired: false,
  isReq: false,
  onInput: () => {},
  checkValid: () => {},
  isRequiredText: "Это поле обязательно для заполнения!",
  setOptionObj: () => {},
};

export default AppSelect;
