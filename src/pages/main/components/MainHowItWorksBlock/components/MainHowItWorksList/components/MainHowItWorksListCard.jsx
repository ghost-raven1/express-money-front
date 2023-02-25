import "./MainHowItWorksListCard.scss";
const MainHowItWorksListCard = ({ item }) => {
  return (
    <div className="how-it-works-list-card">
      <img className="how-it-works-list-card__img" src={item.img} alt="" />
      <div className="how-it-works-list-card-text">
        <div className="how-it-works-list-card-text__title">{item.title}</div>
        <div className="how-it-works-list-card-text__desc">{item.desc}</div>
        <div className="how-it-works-list-card-text__spec-word">
          {item.specWord}
        </div>
      </div>
    </div>
  );
};

export default MainHowItWorksListCard;
