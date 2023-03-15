import "./MainBroadcastList.scss";
import MainBroadcastListCard from "./components/MainBroadcastListCard/MainBroadcastListCard.jsx";
const MainBroadcastList = () => {
  const transactionsArr = [
    {
      name: "Василий П.",
      action: "Получил займ 61 000 руб.",
      time: "3 мин. назад",
      location: "Петрозаводск",
    },
    {
      name: "Семен Я.",
      action: "Внес 3 800 руб. на счет погашения займа",
      time: "10 мин. назад",
      location: "Владивосток",
    },
    {
      name: "Алексей Ж.",
      action: "Получил займ 13 000 руб.",
      time: "4 мин. назад",
      location: "Саратов",
    },
    {
      name: "Степан Х.",
      action: "Погасил 12 000 руб. досрочно",
      time: "15 мин. назад",
      location: "Владимир",
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
