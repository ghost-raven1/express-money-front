import "./MainTariffsListCard.scss";
import AppButton from "../../../../../../../../components/AppButton/AppButton.jsx";
import SvgSelector from "../../../../../../../../components/SvgSelector/SvgSelector.jsx";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../../../../../../../utils/constants.js";
import {makeAApplication} from "../../../../../../../../scripts/common.js";
const MainTariffsListCard = ({ item }) => {
  const navigate = useNavigate();

  function countTypeRU(countType) {
    if (countType === "days") return "Дней";
    else return "Год";
  }
  function cardBackgroundStyles(type) {
    if (type === "basic") return "tariffs-list-card tariffs-list-card_basic";
    if (type === "standard")
      return "tariffs-list-card tariffs-list-card_standard";
    if (type === "premium")
      return "tariffs-list-card tariffs-list-card_premium";
  }
  function cardTitleStyles(type) {
    if (type === "basic")
      return "tariffs-list-card__title tariffs-list-card__title_basic";
    if (type === "standard")
      return "tariffs-list-card__title tariffs-list-card__title_standard";
    if (type === "premium")
      return "tariffs-list-card__title tariffs-list-card__title_premium";
  }

  function cardTitleMobStyles(type) {
    if (type === "basic")
      return "tariffs-list-card-bottom__mob-title tariffs-list-card-bottom__mob-title_basic";
    if (type === "standard")
      return "tariffs-list-card-bottom__mob-title tariffs-list-card-bottom__mob-title_standard";
    if (type === "premium")
      return "tariffs-list-card-bottom__mob-title tariffs-list-card-bottom__mob-title_premium";
  }

  function cardNumbersColorsStyles(type) {
    if (type === "basic") {
      return "tariffs-list-card-bottom__numbers-number";
    }
    if (type === "standard") {
      return "tariffs-list-card-bottom__numbers-number_white";
    }
    if (type === "premium") {
      return "tariffs-list-card-bottom__numbers-number";
    }
  }

  function cardTextColorsStyles(type) {
    if (type === "basic") {
      return "tariffs-list-card-bottom__text";
    }
    if (type === "standard") {
      return "tariffs-list-card-bottom__text_blue";
    }
    if (type === "premium") {
      return "tariffs-list-card-bottom__text_white";
    }
  }

  return (
    <div className={cardBackgroundStyles(item.type)}>
      <div className={cardTitleStyles(item.type)}>{item.name}</div>
      <img className="tariffs-list-card__img" src={item.img} alt="" />
      <div className="tariffs-list-card-bottom">
        <div className={cardTitleMobStyles(item.type)}>{item.name}</div>
        <div className="tariffs-list-card-bottom__numbers">
          <span className={cardNumbersColorsStyles(item.type)}>
            {item.price}
          </span>{" "}
          <span className={cardTextColorsStyles(item.type)}>Руб на</span>{" "}
          <span className={cardNumbersColorsStyles(item.type)}>
            {item.count}
          </span>{" "}
          <span className={cardTextColorsStyles(item.type)}>
            {countTypeRU(item.countType)}
          </span>
        </div>
        <div className={cardTextColorsStyles(item.type)}>
          К возврату {item.value} руб.*
        </div>
        <div className="tariffs-list-card-bottom__button">
          {/*<a href="https://platform.expressmoney.com/loans/" target='_blank'>*/}
          <AppButton mode={item.type === 'standard' ? 'black' : 'blue'} onClick={() => makeAApplication({navigate, routerPath: RouterPath.application})}>
            ОФОРМИТЬ ЗАЯВКУ <SvgSelector id="arrow-in-round" />
          </AppButton>
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
};

export default MainTariffsListCard;
