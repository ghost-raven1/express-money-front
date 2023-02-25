import MainAdvantagesList from "./components/MainAdvantagesList/MainAdvantagesList.jsx";
import "./MainAdvantagesBlock.scss";
import { mainAdvantagesBlockDelimiter } from "../../../../utils/images.js";

const MainAdvantagesBlock = () => {
  return (
    <div className="advantages">
      <div className="advantages-top">
        <div className="advantages-top__title">Преимущества</div>
        <img
          className="advantages-top__delimiter"
          src={mainAdvantagesBlockDelimiter}
          alt=""
        />
        <div className="advantages-top__subtitle">
          Мы подобрали для вас лучшие предложения
        </div>
      </div>
      <MainAdvantagesList />
    </div>
  );
};

export default MainAdvantagesBlock;
