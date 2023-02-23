import "./MainTariffsList.scss";
import MainTariffsListCard from "./components/MainTariffsListCard/MainTariffsListCard.jsx";
import {
  mainTariffsListCardBasic,
  mainTariffsListCardPremium,
  mainTariffsListCardStandard
} from "../../../../../../utils/images.js";
const MainTariffsList = () => {
  const tariffs = [
    {
      name: "Базовый",
      price: "15 000",
      count: "7",
      countType: "days",
      value: "5000",
      type: 'basic',
      img: mainTariffsListCardBasic,
    },
    {
      name: "Стандарт",
      price: "30 000",
      count: "30",
      countType: "days",
      value: "19 000",
      img: mainTariffsListCardStandard,
      type: 'standard',
    },
    {
      name: "Премиум",
      price: "80 000",
      count: "1",
      countType: "years",
      value: "99 000",
      img: mainTariffsListCardPremium,
      type: 'premium'
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
