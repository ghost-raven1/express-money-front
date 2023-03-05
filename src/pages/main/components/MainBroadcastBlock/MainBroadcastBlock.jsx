import AmountOfCreditForm from "../../../../components/AmountOfCreditForm/AmountOfCreditForm.jsx";
import "./MainBroadcastBlock.scss";
import MainBroadcastList from "./components/MainBrodcastList/MainBroadcastList.jsx";
import MainBroadcastCreditBanner from "./components/MainBroadcastCreditBanner/MainBroadcastCreditBanner.jsx";
const MainBroadcastBlock = () => {
  return (
    <div className="broadcast-block">
      <MainBroadcastList />
      <div className="broadcast-block__right">
        <AmountOfCreditForm />
        <div className="broadcast-block__right-text">
          Старт сервиса 2020 году, обслужили <br />
          десятки тысяч клиентов
        </div>
        <MainBroadcastCreditBanner />
        <div className="broadcast-block__right-text-wd">
          Получение займов в микро-финансовых организациях <br /> пользуется у
          Россиян большим спросом
        </div>
      </div>
    </div>
  );
};

export default MainBroadcastBlock;
