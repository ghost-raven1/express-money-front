import "./MainTariffsBlock.scss";
import mainTariffsBlockDelimiter from 'src/assets/main/Delimiters/Delimiter.svg';
import MainTariffsList from "./components/MainTariffsList/MainTariffsList.jsx";
import AppHeadSection from "../../../../components/AppHeadSection/AppHeadSection.jsx";
const MainTariffsBlock = () => {
  return (
    <div className="tariffs">
      <AppHeadSection
        title="Тарифы"
        img={mainTariffsBlockDelimiter}
        desc="Мы подобрали для вас лучшие предложения"
      />
      <MainTariffsList />
    </div>
  );
};

export default MainTariffsBlock;
