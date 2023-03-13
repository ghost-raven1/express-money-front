import MainAdvantagesList from "./components/MainAdvantagesList/MainAdvantagesList.jsx";
import "./MainAdvantagesBlock.scss";
import mainAdvantagesBlockDelimiter from 'src/assets/main/Delimiters/Delimiter2.svg';
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";

const MainAdvantagesBlock = () => {
  return (
    <div className="advantages">
      <AppHeadSection
        title="Преимущества"
        img={mainAdvantagesBlockDelimiter}
        desc="Наши продукты лучшие на рынке!"
      />
      <MainAdvantagesList />
    </div>
  );
};

export default MainAdvantagesBlock;
