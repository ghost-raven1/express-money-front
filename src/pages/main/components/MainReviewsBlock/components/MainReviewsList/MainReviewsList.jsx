import MainReviewsListCard from "./components/MainReviewsBlockCard/MainReviewsListCard.jsx";
import "./MainReviewsList.scss";
import { forwardRef, useEffect, useLayoutEffect, useState } from "react";
const MainReviewsList = ({ forwardedRef }) => {
  const [reviews, setReviews] = useState([]);
  const commonReviewsArr = [
    {
      name: "Анна",
      city: "Сочи",
      date: "12 Февраля 2023",
      text: "Узнала о сервисе от друзей, работает отлично.",
    },
    {
      name: "Андрей",
      city: "Томск",
      date: "17 Февраля 2023",
      text: "Поддержка помогла разобраться с заполнением анкеты \n, очень удобно, спасибо!",
    },
    {
      name: "Татьяна",
      city: "Сочи",
      date: "2 Марта 2023",
      text: "Займ получила за 10 минут",
    },
    {
      name: "Алексей",
      city: "Тверь",
      date: "3 Марта 2023",
      text: "Большое Спасибо! \n" + "Все быстро, очень доволен.",
    },
    {
      name: "Сергей",
      city: "Тамбов",
      date: "8 Марта 2023",
      text: "Большое Спасибо!",
    },
    {
      name: "Антон",
      city: "Саратов",
      date: "5 Марта 2023",
      text: "Очень доволен! Всем рекомендую.",
    },
    {
      name: "Яна",
      city: "Минск",
      date: "8 Марта 2023",
      text: "Сайт работает отлично, планирую дальнейшее сотрудничество.",
    },
  ];

  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomReviews() {
    // TODO: Добавить исключение повторяющихся
    setReviews([
      getRandomArrayElement(commonReviewsArr),
      getRandomArrayElement(commonReviewsArr),
      getRandomArrayElement(commonReviewsArr),
      getRandomArrayElement(commonReviewsArr),
      getRandomArrayElement(commonReviewsArr),
      getRandomArrayElement(commonReviewsArr),
    ]);
  }

  useLayoutEffect(() => {
    randomReviews();
  }, []);

  return (
    <div className="reviews-list" ref={forwardedRef}>
      {!!reviews.length &&
        reviews.map((item, idx) => {
          return <MainReviewsListCard key={idx} item={item} />;
        })}
    </div>
  );
};

const Carousel = forwardRef((props, ref) => {
  return <MainReviewsList {...props} forwardedRef={ref} />;
});

export default Carousel;
