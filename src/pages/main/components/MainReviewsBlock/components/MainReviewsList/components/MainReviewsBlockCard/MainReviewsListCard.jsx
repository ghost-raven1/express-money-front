import "./MainReviewsListCard.scss";
import mainReviewsBlockQuotes from 'src/assets/main/Reviews/Quotes/Quotes.svg';
const MainReviewsListCard = ({ item }) => {
  return (
    <div className="reviews-list-card">
      <div className="reviews-list-card-top">
        <img
          className="reviews-list-card-top__img"
          src={mainReviewsBlockQuotes}
          alt=""
        />
        <div className="reviews-list-card-top-head">
          <div className="reviews-list-card-top-head__text">
            {item.name}{" "}
            <span className="reviews-list-card-top-head__text reviews-list-card-top-head__text_blue">
              ({item.city})
            </span>
          </div>
          <div className="reviews-list-card-top-head__date">{item.date}</div>
        </div>
      </div>
      <div className="reviews-list-card-bottom">{item.text}</div>
    </div>
  );
};

export default MainReviewsListCard;
