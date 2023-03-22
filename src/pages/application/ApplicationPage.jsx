import "./ApplicationPage.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "../../assets/main/Delimiters/Delimiter.svg";
import {useEffect, useState} from "react";
import AppButton from "../../components/AppButton/AppButton.jsx";
import AppInput from "../../components/AppInput/AppInput.jsx";
import AppSelect from "../../components/AppSelect/AppSelect.jsx";
import AppCheckbox from "../../components/AppCheckbox/AppCheckbox.jsx";
import ApplicationCalculator from "./components/ApplicationCalculator/ApplicationCalculator.jsx";
import ApplicationHelp from "./components/ApplicationHelp/ApplicationHelp.jsx";
import AppUploaderWrapper from "../../components/AppUploaderWrapper/AppUploaderWrapper.jsx";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/constants.js";
import SvgSelector from "../../components/SvgSelector/SvgSelector.jsx";
const ApplicationPage = () => {
  const navigate = useNavigate();
  const [currStep, setCurrStep] = useState(1);
  const [stepsArr, setStepsArr] = useState([
    { title: "Персональные данные", isActive: true },
    { title: "Паспорт (cкан)", isActive: false },
    { title: "Банковская карта", isActive: false },
    { title: "Получение денег", isActive: false },
  ]);

  function stepperLineStyles(isActive) {
    if (isActive)
      return "application-stepper__item-line application-stepper__item-line_active";
    if (!isActive) return "application-stepper__item-line";
  }

  function nextStep() {
    setCurrStep(currStep + 1);
    setStepsArr((prevSelected) => {
      const newArray = [...prevSelected];
      for (let i = 0; i < newArray.length; i += 1) {
        if (currStep === 1) {
          newArray[0].isActive = false;
          newArray[1].isActive = true;
        }
        if (currStep === 2) {
          newArray[1].isActive = false;
          newArray[2].isActive = true;
        }
        if (currStep === 3) {
          newArray[2].isActive = false;
          newArray[3].isActive = true;
        }
      }
      return newArray;
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [currStep])

  return (
    <div className="application">
      <AppHeadSection
        title="Заявка"
        img={mainTariffsBlockDelimiter}
        desc="Заполните все поля заявки для получения займа"
      />
      <div className="application-stepper">
        {!!stepsArr?.length &&
          stepsArr?.map((item, idx) => {
            return (
              <div className="application-stepper__item" key={idx}>
                <div className="application-stepper__item-title">
                  {item?.title}
                </div>
                <div className={stepperLineStyles(item?.isActive)} />
              </div>
            );
          })}
      </div>
      {currStep === 1 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Личная информация
              </div>
              <AppInput label="Фамилия*" />
              <AppInput label="Имя*" />
              <AppInput label="Отчество*" />
              {/* TODO: Дата рождения*/}
            </div>
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Паспортные данные
              </div>
              <AppInput label="Серия паспорта*" />
              {/* TODO: Дата выдачи*/}
              <AppInput label="Номер паспорта*" />
              <AppInput label="Код подразделения*" />
            </div>
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Адрес регистрации
              </div>
              <AppSelect
                optionsList={[{ name: "Москва", id: "moscow" }]}
                label="Город*"
              />
              <AppSelect
                optionsList={[{ name: "Московская область", id: "moscow" }]}
                label="Область / Край*"
              />
              <AppInput label="Улица*" />
              <AppInput label="Дом*" />
              <AppInput label="Квартира*" />
            </div>
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Дополнительно
              </div>
              <AppInput label="СНИЛС*" />
              <AppInput label="Ежемесячный доход*" />
            </div>
            <div>
              <AppCheckbox label="Я даю Согласие на обработку персональных данных." />
              <AppCheckbox label="Я подтверждаю и принимаю Согласие и обязательства заемщика." />
            </div>
            <div className="main__button-border main__button-border_black">
              <AppButton mode="black" onClick={() => nextStep()}>
                ДАЛЕЕ <SvgSelector id="arrow-in-round" />
              </AppButton>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
      {currStep === 2 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Скан паспорта
              </div>
            </div>
            <AppUploaderWrapper />
            <div className="main__button-border main__button-border_black">
              <AppButton mode="black" onClick={() => nextStep()}>
                ДАЛЕЕ <SvgSelector id="arrow-in-round" />
              </AppButton>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
      {currStep === 3 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="main__button-border main__button-border_black">
              <AppButton mode="black" onClick={() => nextStep()}>
                ДАЛЕЕ <SvgSelector id="arrow-in-round" />
              </AppButton>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
      {currStep === 4 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="main__button-border main__button-border_black">
              <AppButton
                mode="black"
                onClick={() => navigate(RouterPath.techPage)}
              >
                ВЕРНУТЬСЯ НА ГЛАВНУЮ <SvgSelector id="arrow-in-round" />
              </AppButton>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
