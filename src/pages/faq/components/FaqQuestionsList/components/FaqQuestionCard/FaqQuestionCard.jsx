import "./FaqQuestionCard.scss";
import { useState } from "react";
import SvgSelector from "../../../../../../components/SvgSelector/SvgSelector.jsx";
const FaqQuestionCard = ({ item }) => {
  let [isOpened, setIsOpened] = useState(false);

  function questionArrowStyles() {
    if (isOpened) return "question-arrow question-arrow__top";
    if (!isOpened) return "question-arrow question-arrow__bottom";
  }

  function questCardInnerTopStyles() {
    if (isOpened) return "question-card-inner-top question-card-inner-top-padding-bottom"
    if (!isOpened) return "question-card-inner-top"
  }

  return (
    <div className="question-card" onClick={() => setIsOpened((isOpened = !isOpened))}>
      <div className={questCardInnerTopStyles()}>
        <div className="question-card-inner-top__text">{item?.text}</div>
        <button className="question-card-inner-top__button">
          <SvgSelector
            id="question-arrow-top"
            className={questionArrowStyles()}
          />
        </button>
      </div>
      {isOpened && (
        <div className="question-card-inner-bottom__desc">{item?.desc}</div>
      )}
    </div>
  );
};

export default FaqQuestionCard;
