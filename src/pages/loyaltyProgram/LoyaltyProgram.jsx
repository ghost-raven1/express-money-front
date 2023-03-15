import "./LoyaltyProgram.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "src/assets/main/Delimiters/Delimiter.svg";
import AppButton from "../../components/AppButton/AppButton.jsx";
import SvgSelector from "../../components/SvgSelector/SvgSelector.jsx";
const loyaltyProgram = () => {
  return (
    <div className="loyalty-program">
      <AppHeadSection
        title="Программа лояльности"
        img={mainTariffsBlockDelimiter}
        desc="Наши постоянные клиенты получают наилучшие условия"
      />
      <div className="loyalty-program-container">
        <img
          className="loyalty-program-container-left"
          src="src/assets/loyaltyProgram/leftImg.svg"
          alt=""
        />
        <div className="loyalty-program-container-right">
            <div className="loyalty-program-container-right-form">
                <div className="loyalty-program-container-right-form__title">
                    Чтобы воспользоваться партнерской <br />
                    программой Вам необходимо перейти <br />
                    в личный кабинет
                </div>
                <div className="main__button-border main__button-border_grey">
                    <a href="https://platform.expressmoney.com/loans/" target='_blank'>
                        <AppButton mode="blue">
                            ПЕРЕЙТИ В ЛИЧНЫЙ КАБИНЕТ <SvgSelector id="arrow-in-round" />
                            {/* TODO Поменять иконку*/}
                        </AppButton>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default loyaltyProgram;
