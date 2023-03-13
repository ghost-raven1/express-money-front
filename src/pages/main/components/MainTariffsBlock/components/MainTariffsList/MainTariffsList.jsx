import "./MainTariffsList.scss";
import MainTariffsListCard from "./components/MainTariffsListCard/MainTariffsListCard.jsx";
import mainTariffsListCardBasic from 'src/assets/main/ListCard/Basic.png';
import mainTariffsListCardStandard from 'src/assets/main/ListCard/Standard.png';
import mainTariffsListCardPremium from 'src/assets/main/ListCard/Premium.png';
const MainTariffsList = () => {
  const tariffs = [
    {
      name: "Базовый",
      price: "5 000",
      count: "7",
      countType: "days",
      value: "5350",
      type: "basic",
      img: mainTariffsListCardBasic,
    },
    {
      name: "Стандарт",
      price: "15 000",
      count: "30",
      countType: "days",
      value: "19 500",
      img: mainTariffsListCardStandard,
      type: "standard",
    },
    {
      name: "Премиум",
      price: "80 000",
      count: "1",
      countType: "years",
      value: "372 000",
      img: mainTariffsListCardPremium,
      type: "premium",
    },
  ];
  return (
    <div className="tariffs-list">
      {!!tariffs.length &&
        tariffs.map((item, idx) => {
          return <MainTariffsListCard item={item} key={idx} />;
        })}
    </div>
  );
};

export default MainTariffsList;
