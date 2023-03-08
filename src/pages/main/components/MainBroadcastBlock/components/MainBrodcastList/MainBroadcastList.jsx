import "./MainBroadcastList.scss";
import MainBroadcastListCard from "./components/MainBroadcastListCard/MainBroadcastListCard.jsx";
const MainBroadcastList = () => {
  const transactionsArr = [
    {
      name: "Дмитрий С.",
      action: "Получил займ 10 000 руб.",
      time: "1 мин. назад",
      location: "Владивосток",
    },
    {
      name: "Дмитрий С.",
      action: "Внес 2 800 руб. на счет погашения займа",
      time: "1 мин. назад",
      location: "Владивосток",
    },
    {
      name: "Дмитрий С.",
      action: "Получил займ 15 000 руб.",
      time: "1 мин. назад",
      location: "Владивосток",
    },
    {
      name: "Дмитрий С.",
      action: "Погасил 3 000 руб. досрочно",
      time: "1 мин. назад",
      location: "Владивосток",
    },
  ];
  return (
    <div className="broadcast-list">
      <div className="broadcast-list__title">
        Прямая трансляция работы сервиса
      </div>
      <div className="broadcast-list__list">
        {!!transactionsArr?.length &&
          transactionsArr.map((transaction, idx) => {
            return (
              <MainBroadcastListCard key={idx} transaction={transaction} />
            );
          })}
      </div>
    </div>
  );
};

export default MainBroadcastList;
