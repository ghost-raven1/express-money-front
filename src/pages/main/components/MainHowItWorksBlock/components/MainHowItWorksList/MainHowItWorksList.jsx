import "./MainHowItWorksList.scss";
import MainHowItWorksListCard from "./components/MainHowItWorksListCard.jsx";
import mainHowItWorksListCard1 from 'src/assets/main/HowItWorks/icons/1.png';
import mainHowItWorksListCard2 from 'src/assets/main/HowItWorks/icons/2.png';
import mainHowItWorksListCard3 from 'src/assets/main/HowItWorks/icons/3.png';
import SvgSelector from "../../../../../../components/SvgSelector/SvgSelector.jsx";
const MainHowItWorksList = () => {
  const cardsArr = [
    {
      img: mainHowItWorksListCard1,
      title: "Оформите заявку",
      desc: "Это делается",
      specWord: "моментально",
    },
    {
      img: mainHowItWorksListCard2,
      title: "Дождитесь ответа",
      desc: "Мы дадим ответ в течении",
      specWord: "5 минут",
    },
    {
      img: mainHowItWorksListCard3,
      title: "Получите деньги",
      desc: "Средства поступят на вашу карту",
      specWord: "сразу",
    },
  ];
  return (
    <div className="how-it-works-list">
      {!!cardsArr.length &&
        cardsArr.map((card, idx) => {
          return (
              <>
                <MainHowItWorksListCard item={card} key={idx} />
                {/*TODO: стрелочки добавить*/}
                <SvgSelector id="" />
              </>
        )
        })}
    </div>
  );
};

export default MainHowItWorksList;
