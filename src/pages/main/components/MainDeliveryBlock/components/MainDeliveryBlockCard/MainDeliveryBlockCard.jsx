import "./MainDeliveryBlockCard.scss";
import {mainDeliveryBlockCardBackground, mainTariffsBlockDelimiter} from "../../../../../../utils/images.js";
import AppButton from "../../../../../../components/AppButton/AppButton.jsx";
const MainDeliveryBlockCard = () => {
  return (
    <div className="delivery-block-card">
      <div className="delivery-block-card-inner">
        <div className="delivery-block-card-inner__title">
          Удобный способ получения
        </div>
        <img className="delivery-block-card-inner__delimiter" src={mainTariffsBlockDelimiter} alt="" />
        <div className="delivery-block-card-inner__desc">
          Картельные сговоры не допускают ситуации, <br />
            при которой активно развивающиеся страны <br />
            третьего мира будут функционально <br />
            разнесены на.
        </div>
          <div className="delivery-block-card-inner__button">
              <AppButton mode="blue">ОФОРМИТЬ ЗАЯВКУ</AppButton>
          </div>
      </div>
      <img src={mainDeliveryBlockCardBackground} alt="" />
    </div>
  );
};

export default MainDeliveryBlockCard;
