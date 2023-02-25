import "./MainTariffsListCard.scss";
const MainTariffsListCard = ({ item }) => {
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

  return (
    <div className={cardBackgroundStyles(item.type)}>
      <div className={cardTitleStyles(item.type)}>{item.name}</div>
      <img className="tariffs-list-card__img" src={item.img} alt="" />
      <div className="tariffs-list-card-bottom">
        <div>
          {item.price} Руб на {item.count} {countTypeRU(item.countType)}
        </div>
        <div>к возврату {} руб.*</div>
      </div>
    </div>
  );
};

export default MainTariffsListCard;
