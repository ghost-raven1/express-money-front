import MainReviewsListCard from "./components/MainReviewsBlockCard/MainReviewsListCard.jsx";
import './MainReviewsList.scss'
import {forwardRef} from "react";
const MainReviewsList = ({ forwardedRef }) => {
  const reviewsArr = [
    {
      name: "1111",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "2222",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "3333",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "4444",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "5555",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "6666",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
        "Большое Спасибо \n" +
        "Большое Спасибо\n" +
        "Большое Спасибо\n" +
        "Большое Спасибо",
    },
    {
      name: "7777",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
          "Большое Спасибо \n" +
          "Большое Спасибо\n" +
          "Большое Спасибо\n" +
          "Большое Спасибо",
    },
    {
      name: "8888",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
          "Большое Спасибо \n" +
          "Большое Спасибо\n" +
          "Большое Спасибо\n" +
          "Большое Спасибо",
    },
    {
      name: "9999",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
          "Большое Спасибо \n" +
          "Большое Спасибо\n" +
          "Большое Спасибо\n" +
          "Большое Спасибо",
    },
    {
      name: "10000",
      city: "Москва",
      date: "12 Февраля 2023",
      text:
          "Большое Спасибо \n" +
          "Большое Спасибо\n" +
          "Большое Спасибо\n" +
          "Большое Спасибо",
    },
  ];
  return (
    <div className="reviews-list" ref={ forwardedRef }>
      {!!reviewsArr.length &&
        reviewsArr.map((item, idx) => {
          return <MainReviewsListCard key={idx} item={item} />;
        })}
    </div>
  );
};

const Carousel = forwardRef((props, ref) => {
  return <MainReviewsList {...props} forwardedRef={ref} />;
});

export default Carousel;
