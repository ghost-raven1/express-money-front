import "./AppCreditCard.scss";
import AppInput from "../AppInput/AppInput.jsx";
import AppSelect from "../AppSelect/AppSelect.jsx";
const AppCreditCard = ({
  setCardNumber,
  cardNumber,
  setCardOwnerName,
  cardOwnerName,
  setCVC,
  CVC,
}) => {
  return (
    <div className="credit-card">
      <div className="credit-card-inner">
        <div style={{ width: "100%" }}>
          <AppInput
            label="Номер карты"
            mode="blue-label"
            onInput={setCardNumber}
            value={cardNumber}
          />
        </div>
        <div style={{ width: "100%" }}>
          <AppInput
            label="Владелец карты"
            mode="blue-label"
            onInput={setCardOwnerName}
            value={cardOwnerName}
          />
        </div>
        <div className="credit-card-inner__bottom">
          <div className="credit-card-inner__bottom-card-date">
            <div className="credit-card-inner__bottom-card-date-label">
              Срок действия карты
            </div>
            <div className="credit-card-inner__bottom-card-date-selects">
              <AppSelect
                optionsList={[]} // Добавить массив месяцев
                defaultText="01"
                mode="withoutWordBreak borderless"
              />
              <AppSelect
                optionsList={[]} // Добавить массив лет
                defaultText="25"
                mode="withoutWordBreak borderless"
              />
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <AppInput
              label="CVC"
              mode="blue-label"
              onInput={setCVC}
              value={CVC}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCreditCard;
