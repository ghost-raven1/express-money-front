import "./ApplicationPage.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "../../assets/main/Delimiters/Delimiter.svg";
import { useEffect, useState } from "react";
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
import AppProgressbar from "../../components/AppProgressbar/AppProgressbar.jsx";
import AppSelectGroup from "../../components/AppSelectGroup/AppSelectGroup.jsx";
import AppCreditCard from "../../components/AppCreditCard/AppCreditCard.jsx";
const ApplicationPage = () => {
  const navigate = useNavigate();
  const [currStep, setCurrStep] = useState(1);
  const [stepsArr, setStepsArr] = useState([
    { title: "Персональные данные", isActive: true },
    { title: "Паспорт (cкан)", isActive: false },
    { title: "Банковская карта", isActive: false },
    { title: "Получение денег", isActive: false },
  ]);
  const [progressStep, setProgressStep] = useState(0);
  const [smsTimer, setSmsTimer] = useState(60);
  const [isActiveSmsTimer, setIsActiveSmsTimer] = useState(true);
  const [firstRenderSmsTimer, setFirstRenderSmsTimer] = useState(false);
  const [dayBirthId, setDayBirthId] = useState();
  const [monthBirthId, setMonthBirthId] = useState();
  const [yearBirthId, setYearBirthId] = useState();
  const [dayPassId, setDayPassId] = useState();
  const [monthPassId, setMonthPassId] = useState();
  const [yearPassId, setYearPassId] = useState();

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
        if ([3, 4, 5, 6].includes(currStep)) {
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
    });
  }, [currStep]);

  useEffect(() => {
    if (currStep === 4) {
      if (progressStep < 100) {
        const interval = setInterval(() => {
          setProgressStep((prevState) => prevState + 5);
        }, 1000);
        return () => clearInterval(interval);
      }
      if (progressStep === 100) {
        setCurrStep(5);
      }
    }
  }, [currStep, progressStep]);

  useEffect(() => {
    if (currStep === 5) {
      if (firstRenderSmsTimer) {
        setIsActiveSmsTimer(true);
        setFirstRenderSmsTimer(false);
      }
      if (isActiveSmsTimer) {
        if (smsTimer !== 0) {
          const interval = setInterval(() => {
            setSmsTimer((prevState) => prevState - 1);
          }, 1000);
          return () => clearInterval(interval);
        }
        if (smsTimer === 0) {
          setSmsTimer(60);
          setIsActiveSmsTimer(false);
        }
      }
    }
  }, [smsTimer, currStep, isActiveSmsTimer]);

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
              <AppInput label="Фамилия*" mode="white"/>
              <AppInput label="Имя*" mode="white" />
              <AppInput label="Отчество*" mode="white" />
              <AppSelectGroup
                type="birth"
                setCurrDayId={setDayBirthId}
                setCurrYearId={setYearBirthId}
                setCurrMonthId={setMonthBirthId}
                currMonthId={monthBirthId}
                label="Дата рождения*"
              />
            </div>
            <div className="application-step-left__delimiter-line" />
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Паспортные данные
              </div>
              <AppInput label="Серия паспорта*" mode="white" />
              <AppSelectGroup
                type="date"
                setCurrDayId={setDayPassId}
                setCurrYearId={setYearPassId}
                setCurrMonthId={setMonthPassId}
                currMonthId={monthPassId}
                label="Дата выдачи*"
              />
              <AppInput label="Номер паспорта*" mode="white" />
              <AppInput label="Код подразделения*" mode="white" />
            </div>
            <div className="application-step-left__delimiter-line" />
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
              <AppInput label="Улица*" mode="white" />
              <AppInput label="Дом*" mode="white" />
              <AppInput label="Квартира*" mode="white" />
            </div>
            <div className="application-step-left__delimiter-line" />
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Дополнительно
              </div>
              <AppInput label="СНИЛС*" mode="white" />
              <AppInput label="Ежемесячный доход*" mode="white" />
            </div>
            <div className="application-step-left__checkboxes">
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
            <div className="application-step-left__title-min">
              Банковская карта{" "}
              <span className="application-step-left__title-min application-step-left__title-min_grey">
                (для зачисления займа)
              </span>
            </div>
            <div className="application-step-left__fill-data">Заполните данные</div>
            <AppCreditCard />
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
            <div className="application-step-left__title">
              Ожидайте, мы готовим Ваш кредит
            </div>
            <AppProgressbar value={progressStep} maxValue={100} />
            <div className="application-step-left__text-block">
              <div className="application-step-left__text">
                Мы готовим Ваш кредит к выдаче, это{" "}
                <span className="application-step-left__text_blue">
                  занимает 3 минуты.
                </span>
              </div>
              <div className="application-step-left__delimiter-40" />
              <div className="application-step-left__text">
                <span className="application-step-left__text_black">
                  Оставайтесь на этом экране!
                </span>{" "}
                Скоро сообщим о выдаче кредита и Вы подписав документы по смс
                моментально получите деньги.
              </div>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
      {currStep === 5 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="application-step-left__title">
              Для получения введите код
            </div>
            <div className="application-step-left__text">
              Я подписываю{" "}
              <span className="application-step-left__text_black">
                Кредитный договор (текст доступен по{" "}
                <a
                  href=""
                  target="_blank"
                  className="application-step-left__link"
                >
                  ссылке
                </a>
                )
              </span>
            </div>
            <AppInput label="Код из СМС*" />
            <div className="application-step-left__sms">
              <button
                className="application-step-left__sms-button"
                disabled={isActiveSmsTimer}
                onClick={() => setIsActiveSmsTimer(true)}
              >
                Отправить повторно СМС
              </button>
              <div className="application-step-left__sms-timer">{smsTimer}</div>
            </div>
            <div className="main__button-border main__button-border_black">
              <AppButton mode="black" onClick={() => nextStep()}>
                ПОЛУЧИТЬ ДЕНЬГИ <SvgSelector id="arrow-in-round" />
              </AppButton>
            </div>
          </div>
          <div className="application-step-right">
            <ApplicationCalculator />
            <ApplicationHelp />
          </div>
        </div>
      )}
      {currStep === 6 && (
        <div className="application-step">
          <div className="application-step-left">
            <div className="application-step-left__title">
              Уведомление:
              <div className="application-step-left__title application-step-left__title_blue">
                деньги направлены на карту
              </div>
            </div>
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
