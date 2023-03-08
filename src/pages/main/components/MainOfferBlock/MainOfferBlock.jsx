import "./MainOfferBlock.scss";
import AmountOfCreditForm from "../../../../components/AmountOfCreditForm/AmountOfCreditForm.jsx";
import { girlWithMoney } from "../../../../utils/images.js";
const MainOfferBlock = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <div className="offer-left__credit-form credit-form">
          <div className="credit-form__text_blue">Моментальное одобрение</div>
          <div className="credit-form__credit-text">Экспресс кредит</div>
          <div className="credit-form__credit-text-sub">
              Воспользуйтесь нашим сервисом и получите решение через <span style={{ color: '#005CEA'}}>5 минут </span>
            после создания заявки
          </div>
          <AmountOfCreditForm />
        </div>
      </div>
      <div className="offer-right">
        <img className="offer-right__img" src={girlWithMoney} alt="" />
      </div>
    </div>
  );
};

export default MainOfferBlock;
