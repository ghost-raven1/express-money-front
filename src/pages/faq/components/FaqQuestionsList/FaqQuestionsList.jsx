import "./FaqQuestionsList.scss";
import FaqQuestionCard from "./components/FaqQuestionCard/FaqQuestionCard.jsx";
const FaqQuestionsList = ({ questions }) => {
  return (
    <div className="questions-list">
      {!!questions?.length &&
        questions.map((item, idx) => {
          return <FaqQuestionCard item={item} key={idx} />;
        })}
    </div>
  );
};

export default FaqQuestionsList;
