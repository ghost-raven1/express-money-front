import MainAdvantagesList from "./components/MainAdvantagesList/MainAdvantagesList.jsx";
import "./MainAdvantagesBlock.scss";
import { mainAdvantagesBlockDelimiter } from "../../../../utils/images.js";
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";

const MainAdvantagesBlock = () => {
  return (
    <div className="advantages">
      <AppHeadSection
        title="Преимущества"
        img={mainAdvantagesBlockDelimiter}
        desc="Мы подобрали для вас лучшие предложения"
      />
      <MainAdvantagesList />
    </div>
  );
};

export default MainAdvantagesBlock;
