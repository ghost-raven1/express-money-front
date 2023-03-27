import "./MainOfferBlock.scss";
import AmountOfCreditForm from "../../../../components/AmountOfCreditForm/AmountOfCreditForm.jsx";
import girlWithMoney from "src/assets/main/Backgrounds/GirlWithMoney.svg";
const MainOfferBlock = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <div className="offer-left__credit-form credit-form">
          <div className="credit-form__text_blue">Моментальное одобрение</div>
          <div className="credit-form__credit-text">Экспресс кредит</div>
          <div className="credit-form__credit-text-sub">
            Воспользуйтесь нашим сервисом и получите решение <br /> через{" "}
            <span style={{ color: "#005CEA" }}>5 минут </span>
            после создания заявки
          </div>
          <AmountOfCreditForm />
        </div>
      </div>
      <div className="offer-right">
        <div className="offer-right__left">
          <div className="offer-right__left-title">+3 тыс.</div>
          <div className="offer-right__left-desc">Довольных клиентов</div>
        </div>
        <div className="offer-right__right">
          <div className="offer-right__right-title">5 мин.</div>
          <div className="offer-right__right-desc">Для одобрения заявки</div>
        </div>
        <img className="offer-right__img" src={girlWithMoney} alt="" />
      </div>
    </div>
  );
};

export default MainOfferBlock;
