import "./ApplicationPage.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "../../assets/main/Delimiters/Delimiter.svg";
import { useState } from "react";
import AppButton from "../../components/AppButton/AppButton.jsx";
import AppInput from "../../components/AppInput/AppInput.jsx";
import AppSelect from "../../components/AppSelect/AppSelect.jsx";
import AppCheckbox from "../../components/AppCheckbox/AppCheckbox.jsx";
import ApplicationCalculator from "./components/ApplicationCalculator/ApplicationCalculator.jsx";
import ApplicationHelp from "./components/ApplicationHelp/ApplicationHelp.jsx";
const ApplicationPage = () => {
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
            <div>
              <div>Личная информация</div>
              <AppInput label="Фамилия*" />
              <AppInput label="Имя*" />
              <AppInput label="Отчество*" />
              // Дата рождения
            </div>
            <div>
              <div>Паспортные данные</div>
              <AppInput label="Серия паспорта*" />
              // Дата выдачи
              <AppInput label="Номер паспорта*" />
              <AppInput label="Код подразделения*" />
            </div>
            <div>
              <div>Адрес регистрации</div>
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
              <div>
                  <div>Дополнительно</div>
                  <AppInput label="СНИЛС*" />
                  <AppInput label="Ежемесячный доход*" />
              </div>
              <div>
                  <AppCheckbox label="Я даю Согласие на обработку персональных данных." />
                  <AppCheckbox label="Я подтверждаю и принимаю Согласие и обязательства заемщика." />
              </div>
            <AppButton mode="black">Далее</AppButton>
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
                <AppButton mode="black">Далее</AppButton>
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
                <AppButton mode="black">Далее</AppButton>
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
                <AppButton mode="black">Далее</AppButton>
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
