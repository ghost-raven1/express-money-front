import MainAdvantagesCard from "./components/MainAdvantagesCard/MainAdvantagesCard.jsx";
import "./MainAdvantagesList.scss";
const MainAdvantagesList = () => {
  const advantages = [
    {
      img: "",
      title: "Моментально",
      desc: "Деньги за 5 минуту после одобрения",
    },
    {
      img: "",
      title: "Без страховки",
      desc: "Без доп платежей к выданной сумме",
    },
    {
      img: "",
      title: "Одобрение 99%",
      desc: "Безопасность персональных данных",
    },
    {
      img: "",
      title: "Без переплат",
      desc: "Погашение займа за 24 часа без комиссии",
    },
    {
      img: "",
      title: "Любим клиентов",
      desc: "Премиум услуги для постоянных клиентов компании",
    },
    {
      img: "",
      title: "Работаем честно",
      desc: "Улучшение вашей кредитной истории",
    },
  ];
  return (
    <div className="advantages-list">
      {!!advantages.length &&
        advantages.map((item, idx) => {
          return <MainAdvantagesCard item={item} key={idx} />;
        })}
    </div>
  );
};

export default MainAdvantagesList;
