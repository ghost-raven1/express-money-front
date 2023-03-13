import MainAdvantagesCard from "./components/MainAdvantagesCard/MainAdvantagesCard.jsx";
import "./MainAdvantagesList.scss";
import mainAdvantagesIcon1 from 'src/assets/main/Advantages/icons/1.svg';
import mainAdvantagesIcon2 from 'src/assets/main/Advantages/icons/2.svg';
import mainAdvantagesIcon3 from 'src/assets/main/Advantages/icons/3.svg';
import mainAdvantagesIcon4 from 'src/assets/main/Advantages/icons/4.svg';
import mainAdvantagesIcon5 from 'src/assets/main/Advantages/icons/5.svg';
import mainAdvantagesIcon6 from 'src/assets/main/Advantages/icons/6.svg';
const MainAdvantagesList = () => {
  const advantages = [
    {
      img: mainAdvantagesIcon1,
      title: "Моментально",
      desc: "Деньги за 5 минуту после одобрения",
    },
    {
      img: mainAdvantagesIcon2,
      title: "Без страховки",
      desc: "Без доп. платежей к выданной сумме",
    },
    {
      img: mainAdvantagesIcon3,
      title: "Одобрение 99%",
      desc: "Безопасность персональных данных",
    },
    {
      img: mainAdvantagesIcon4,
      title: "Без переплат",
      desc: "Погашение займа за 24 часа без комиссии",
    },
    {
      img: mainAdvantagesIcon5,
      title: "Любим клиентов",
      desc: "Премиум услуги для постоянных клиентов компании",
    },
    {
      img: mainAdvantagesIcon6,
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
