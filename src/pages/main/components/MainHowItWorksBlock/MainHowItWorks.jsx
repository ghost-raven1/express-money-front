import "./MainHowItWorksBlock.scss";
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";
import { mainAdvantagesBlockDelimiter } from "../../../../utils/images.js";
import MainHowItWorksList from "./components/MainHowItWorksList/MainHowItWorksList.jsx";
const MainHowItWorks = () => {
  return (
    <div className="how-it-works">
      <AppHeadSection
        title="Как это работает"
        img={mainAdvantagesBlockDelimiter}
        desc="Мы подобрали для вас лучшие предложения"
      />
      <MainHowItWorksList />
    </div>
  );
};

export default MainHowItWorks;
