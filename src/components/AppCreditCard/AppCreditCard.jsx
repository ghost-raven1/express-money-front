import "./AppCreditCard.scss";
import AppInput from "../AppInput/AppInput.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
const AppCreditCard = () => {
  return (
    <div className="credit-card">
      <div className="credit-card-inner">
        <AppInput label="Номер карты" mode="blue-label" />
        <AppInput label="Владелец карты" mode="blue-label" />
        <div className="credit-card-inner__bottom">
          <div className="credit-card-inner__bottom-card-date">
            <div className="credit-card-inner__bottom-card-date-label">
              Срок действия карты
            </div>
            <div className="credit-card-inner__bottom-card-date-selects">
              <AppSelect optionsList={[]} defaultText="01" mode="withoutWordBreak borderless" />
              <AppSelect optionsList={[]} defaultText="25" mode="withoutWordBreak borderless" />
            </div>
          </div>
          <AppInput label="CVC" mode="blue-label" />
        </div>
      </div>
    </div>
  );
};

export default AppCreditCard;
