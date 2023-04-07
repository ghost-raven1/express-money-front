import "./MainDeliveryBlockCard.scss";
import mainTariffsBlockDelimiter from 'src/assets/main/Delimiters/Delimiter.svg';
import AppButton from "../../../../../../components/AppButton/AppButton.jsx";
import SvgSelector from "../../../../../../components/SvgSelector/SvgSelector.jsx";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../../../../utils/constants.js";
import {makeAApplication} from "../../../../../../scripts/common.js";
const MainDeliveryBlockCard = () => {
  const navigate = useNavigate();
  return (
    <div className="delivery-block-card">
      <div className="delivery-block-card-inner">
        <div className="delivery-block-card-inner__title">
          Удобный способ получения
        </div>
        <img
          className="delivery-block-card-inner__delimiter"
          src={mainTariffsBlockDelimiter}
          alt=""
        />
        <div className="delivery-block-card-inner__desc">
          Мы работаем со всеми основными карточными системами Росиии и мира.<br />

          Карточные платежи в нашей компании, обрабатываются с использованием<br /> наиболее безопастных технологий основанных на стандартах PCI DSS
        </div>
        <div className="delivery-block-card-inner__button">
          <div className="main__button-border main__button-border_grey">
            {/*<a href="https://platform.expressmoney.com/loans/" target='_blank'>*/}
            <AppButton mode="blue" onClick={() => makeAApplication({navigate, routerPath: RouterPath.application})}>
              ОФОРМИТЬ ЗАЯВКУ <SvgSelector id="arrow-in-round" />
            </AppButton>
            {/*</a>*/}
          </div>
        </div>
      </div>
      <div className="delivery-block-card__img-container">
        <div className="delivery-block-card__img" />
      </div>
    </div>
  );
};

export default MainDeliveryBlockCard;
