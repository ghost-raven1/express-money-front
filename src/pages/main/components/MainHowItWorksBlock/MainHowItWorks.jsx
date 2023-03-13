import "./MainHowItWorksBlock.scss";
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";
import mainAdvantagesBlockDelimiter from 'src/assets/main/Delimiters/Delimiter2.svg';
import MainHowItWorksList from "./components/MainHowItWorksList/MainHowItWorksList.jsx";
const MainHowItWorks = () => {
  return (
    <div className="how-it-works">
      <AppHeadSection
        title="Как это работает"
        img={mainAdvantagesBlockDelimiter}
        desc="Получите деньги в считанные минуты"
      />
      <MainHowItWorksList />
    </div>
  );
};

export default MainHowItWorks;
