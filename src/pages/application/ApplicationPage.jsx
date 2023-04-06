import "./ApplicationPage.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "../../assets/main/Delimiters/Delimiter.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import AppButton from "../../components/AppButton/AppButton.jsx";
import AppInput from "../../components/AppInput/AppInput.jsx";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createUserProfileAsync,
  editUserProfileAsync,
  getUserProfileAsync,
} from "../../store/reducers/profiles.js";
import { uploadPassportAsync } from "../../store/reducers/storage.js";
const ApplicationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userProfile } = useSelector((store) => store.profilesReducer);
  const { userId } = useSelector((store) => store.usersReducer);
  const [readyToNextStep, setReadyToNextStep] = useState(false);
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
  const [dayBirthId, setDayBirthId] = useState(
    getNumberFromDate({ type: "day", date: userProfile?.birth_date })
  );
  const [monthBirthId, setMonthBirthId] = useState(
    getNumberFromDate({ type: "month", date: userProfile?.birth_date })
  );
  const [yearBirthId, setYearBirthId] = useState(
    getNumberFromDate({ type: "year", date: userProfile?.birth_date })
  );
  const [dayPassId, setDayPassId] = useState(
    getNumberFromDate({ type: "day", date: userProfile?.passport_date })
  );
  const [monthPassId, setMonthPassId] = useState(
    getNumberFromDate({ type: "month", date: userProfile?.passport_date })
  );
  const [yearPassId, setYearPassId] = useState(
    getNumberFromDate({ type: "year", date: userProfile?.passport_date })
  );
  const [firstName, setFirstName] = useState(userProfile?.first_name);
  const [middleName, setMiddleName] = useState(userProfile?.middle_name);
  const [lastName, setLastName] = useState(userProfile?.last_name);
  const [snils, setSnils] = useState(userProfile?.snils);
  const [income, setIncome] = useState(userProfile?.income);
  const [passportCode, setPassportCode] = useState(userProfile?.passport_code);
  const [passportNumber, setPassportNumber] = useState(
    userProfile?.passport_number
  );
  const [passportSerial, setPassportSerial] = useState(
    userProfile?.passport_serial
  );
  const [state, setState] = useState(userProfile?.state);
  const [city, setCity] = useState(userProfile?.city);
  const [street, setStreet] = useState(userProfile?.street);
  const [streetHouse, setStreetHouse] = useState(userProfile?.street_house);
  const [streetApartment, setStreetApartment] = useState(
    userProfile?.street_apartment
  );
  const [passportFiles, setPassportFiles] = useState([]);

  function stepperLineStyles(isActive) {
    if (isActive)
      return "application-stepper__item-line application-stepper__item-line_active";
    if (!isActive) return "application-stepper__item-line";
  }

  function getNumberFromDate({ type, date }) {
    if (!!date?.length) {
      const dateArr = date?.split("-");
      if (type === "year") return dateArr[0];
      if (type === "month") return dateArr[1].replace(/0/g, "");
      if (type === "day") return dateArr[2].replace(/0/g, "");
    }
  }

  function checkChanges() {
    const changes = [];
    if (userProfile?.first_name !== firstName) changes.push("firstName");
    if (userProfile?.middle_name !== middleName) changes.push("middleName");
    if (userProfile?.last_name !== lastName) changes.push("lastName");
    if (userProfile?.snils !== snils) changes.push("snils");
    if (userProfile?.income !== income) changes.push("income");
    if (userProfile?.passport_code !== passportCode)
      changes.push("passportCode");
    if (userProfile?.passport_number !== passportNumber)
      changes.push("passportNumber");
    if (userProfile?.passport_serial !== passportSerial)
      changes.push("passportSerial");
    if (userProfile?.street !== street) changes.push("street");
    if (userProfile?.street_house !== streetHouse) changes.push("streetHouse");
    if (userProfile?.street_apartment !== streetApartment)
      changes.push("streetApartment");
    if (userProfile?.state !== state) changes.push("state");
    if (userProfile?.city !== city) changes.push("city");
    if (changes?.length === 0) return false;
    if (changes?.length > 0) return true;
  }

  function checkStep(newArray) {
    if (readyToNextStep) {
      setCurrStep(currStep + 1);
      if (currStep === 1) {
        newArray[0].isActive = false;
        newArray[1].isActive = true;
      }
      if (currStep === 2) {
        newArray[1].isActive = false;
        newArray[2].isActive = true;
      }
      if (currStep > 3) {
        newArray[2].isActive = false;
        newArray[3].isActive = true;
      }
    }
  }

  function nextStep() {
    setStepsArr((prevSelected) => {
      const newArray = [...prevSelected];
      for (let i = 0; i < newArray.length; i += 1) {
        if (currStep === 1) {
          checkStep(newArray);
          if (!Object.keys(userProfile)?.length) {
            dispatch(
              createUserProfileAsync(
                {
                  first_name: firstName,
                  middle_name: middleName,
                  last_name: lastName,
                  birth_date:
                    !!yearBirthId && !!monthBirthId && !!dayBirthId
                      ? `${yearBirthId}-${monthBirthId}-${dayBirthId}`
                      : userProfile?.birth_date,
                  state,
                  city,
                  street,
                  street_house: streetHouse,
                  street_apartment: streetApartment,
                  passport_serial: passportSerial,
                  passport_number: passportNumber,
                  passport_code: passportCode,
                  passport_date:
                    !!yearPassId && !!monthPassId && !!dayPassId
                      ? `${yearPassId}-${monthPassId}-${dayPassId}`
                      : userProfile?.passport_date,
                  income,
                  snils,
                },
                setReadyToNextStep
              )
            );
          }
          if (checkChanges() === true) {
            dispatch(
              editUserProfileAsync(
                {
                  first_name: firstName,
                  middle_name: middleName,
                  last_name: lastName,
                  birth_date:
                    !!yearBirthId && !!monthBirthId && !!dayBirthId
                      ? `${yearBirthId}-${monthBirthId}-${dayBirthId}`
                      : userProfile?.birth_date,
                  state,
                  city,
                  street,
                  street_house: streetHouse,
                  street_apartment: streetApartment,
                  passport_serial: passportSerial,
                  passport_number: passportNumber,
                  passport_code: passportCode,
                  passport_date:
                    !!yearPassId && !!monthPassId && !!dayPassId
                      ? `${yearPassId}-${monthPassId}-${dayPassId}`
                      : userProfile?.passport_date,
                  income,
                  snils,
                },
                userId || localStorage.getItem('userId'),
                setReadyToNextStep
              )
            );
          } else {
            setReadyToNextStep(true);
          }
        }
        if (currStep === 2) {
          checkStep(newArray);
        }
        if ([3, 4, 5, 6].includes(currStep)) {
          checkStep(newArray);
        }
      }
      return newArray;
    });
  }

  useLayoutEffect(() => {
    dispatch(getUserProfileAsync(userId || localStorage.getItem("userId")));
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currStep]);

  useEffect(() => {
    // Заполнение профиля
    setFirstName(userProfile?.first_name);
    setMiddleName(userProfile?.middle_name);
    setLastName(userProfile?.last_name);
    setPassportSerial(userProfile?.passport_serial);
    setPassportNumber(userProfile?.passport_number);
    setPassportCode(userProfile?.passport_code);
    setCity(userProfile?.city);
    setState(userProfile?.state);
    setStreet(userProfile?.street);
    setStreetHouse(userProfile?.street_house);
    setStreetApartment(userProfile?.street_apartment);
    setSnils(userProfile?.snils);
    setIncome(userProfile?.income);
    setDayBirthId(
      getNumberFromDate({ type: "day", date: userProfile?.birth_date })
    );
    setMonthBirthId(
      getNumberFromDate({ type: "month", date: userProfile?.birth_date })
    );
    setYearBirthId(
      getNumberFromDate({ type: "year", date: userProfile?.birth_date })
    );
    setDayPassId(
      getNumberFromDate({ type: "day", date: userProfile?.passport_date })
    );
    setMonthPassId(
      getNumberFromDate({ type: "month", date: userProfile?.passport_date })
    );
    setYearPassId(
      getNumberFromDate({ type: "year", date: userProfile?.passport_date })
    );
  }, [userProfile]);

  useEffect(() => {
    if (currStep === 2) {
      if (passportFiles?.length > 0) {
        // TODO: Доделать запрос отправки паспорта
        dispatch(
          uploadPassportAsync({
            data: {
              user_id: userId,
              name: `${firstName} ${lastName}`,
              type: "passport",
              is_public: false,
              file: "", // Уточнить
            },
          })
        );
      }
    }
  }, [passportFiles]);

  useEffect(() => {
    if (currStep === 3) {
    }
  });

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
              <AppInput
                label="Фамилия*"
                mode="white"
                onInput={setLastName}
                value={lastName}
              />
              <AppInput
                label="Имя*"
                mode="white"
                onInput={setFirstName}
                value={firstName}
              />
              <AppInput
                label="Отчество*"
                mode="white"
                onInput={setMiddleName}
                value={middleName}
              />
              <AppSelectGroup
                type="birth"
                setCurrDayId={setDayBirthId}
                setCurrYearId={setYearBirthId}
                setCurrMonthId={setMonthBirthId}
                currYearId={yearBirthId}
                currMonthId={monthBirthId}
                currDayId={dayBirthId}
                label="Дата рождения*"
              />
            </div>
            <div className="application-step-left__delimiter-line" />
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Паспортные данные
              </div>
              <AppInput
                label="Серия паспорта*"
                mode="white"
                onInput={setPassportSerial}
                value={passportSerial}
              />
              <AppSelectGroup
                type="date"
                setCurrDayId={setDayPassId}
                setCurrYearId={setYearPassId}
                setCurrMonthId={setMonthPassId}
                currYearId={yearPassId}
                currMonthId={monthPassId}
                currDayId={dayPassId}
                label="Дата выдачи*"
              />
              <AppInput
                label="Номер паспорта*"
                mode="white"
                onInput={setPassportNumber}
                value={passportNumber}
              />
              <AppInput
                label="Код подразделения*"
                mode="white"
                onInput={setPassportCode}
                value={passportCode}
              />
            </div>
            <div className="application-step-left__delimiter-line" />
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Адрес регистрации
              </div>
              <AppInput label="Город*" onInput={setCity} value={city} />
              <AppInput
                label="Область / Край*"
                onInput={setState}
                value={state}
              />
              <AppInput
                label="Улица*"
                mode="white"
                onInput={setStreet}
                value={street}
              />
              <AppInput
                label="Дом*"
                mode="white"
                onInput={setStreetHouse}
                value={streetHouse}
              />
              <AppInput
                label="Квартира*"
                mode="white"
                onInput={setStreetApartment}
                value={streetApartment}
              />
            </div>
            <div className="application-step-left__delimiter-line" />
            <div className="application-step-left-card">
              <div className="application-step-left-card__title">
                Дополнительно
              </div>
              <AppInput
                label="СНИЛС*"
                mode="white"
                onInput={setSnils}
                value={snils}
              />
              <AppInput
                label="Ежемесячный доход*"
                mode="white"
                onInput={setIncome}
                value={income}
              />
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
            <AppUploaderWrapper
              files={passportFiles}
              setFiles={setPassportFiles}
            />
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
            <div className="application-step-left__fill-data">
              Заполните данные
            </div>
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
