import "./AboutCompany.scss";
import banner from "src/assets/about/Banner.svg";
import AppMapWrapper from "../../components/AppMap/AppMapWrapper.jsx";
import AppInput from "../../components/AppInput/AppInput.jsx";
import AppButton from "../../components/AppButton/AppButton.jsx";
const AboutCompany = () => {
  return (
    <div className="about-company">
      <img className="about-company__img" src={banner} alt="" />
      <div className="about-company-inner">
        <div className="about-company-inner__map">
          <AppMapWrapper
            mapPointsList={[{ latitude: "55.749633", longitude: "37.537434" }]}
            height="70vh"
            zoom={15}
          />
        </div>
        <div className="about-company-inner__contacts">
          <div className="about-company-inner__contacts-block">
            <div className="about-company-inner__contacts-block-title">
              Контакты
            </div>
            <div className="about-company-inner__contacts-block-phone">
              8 800 700 91 15
            </div>
            <div className="about-company-inner__contacts-block-city">
              г.Москва
            </div>
          </div>
          <div className="about-company-inner__contacts-form">
            <div className="about-company-inner__contacts-form-inner">
              <div className="about-company-inner__contacts-form-inner-title">
                Форма обратной связи
              </div>
              <AppInput
                className="about-company-inner__contacts-form-inner-input"
                label="Имя"
                placeholder="Не указано"
              />
              <AppInput
                className="about-company-inner__contacts-form-inner-input"
                label="Телефон"
                placeholder="+7 (___) ___-__-__"
              />
              <AppInput
                className="about-company-inner__contacts-form-inner-input"
                label="Сообщение"
                placeholder="Не указано"
              />
              <AppButton
                className="about-company-inner__contacts-form-inner-button"
                mode="black"
              >
                ОТПРАВИТЬ
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCompany;
