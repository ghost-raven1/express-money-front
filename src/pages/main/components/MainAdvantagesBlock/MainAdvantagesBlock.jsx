import MainAdvantagesList from "./components/MainAdvantagesList/MainAdvantagesList.jsx";
import "./MainAdvantagesBlock.scss";
import mainAdvantagesBlockDelimiter from 'src/assets/main/Delimiters/Delimiter2.svg';
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";

const MainAdvantagesBlock = () => {
  return (
    <div className="advantages">
        <div className="advantages__head">
            <AppHeadSection
                title="Преимущества"
                img={mainAdvantagesBlockDelimiter}
                desc="Наши продукты лучшие на рынке!"
            />
        </div>
      <MainAdvantagesList />
    </div>
  );
};

export default MainAdvantagesBlock;
