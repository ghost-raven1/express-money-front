import "./HowToGet.scss";
import AppLoanBlock from "../../components/AppLoanBlock/AppLoanBlock.jsx";
import AmountOfCreditForm from "../../components/AmountOfCreditForm/AmountOfCreditForm.jsx";
import SvgSelector from "../../components/SvgSelector/SvgSelector.jsx";
const HowToGet = () => {
  const reqsArr = [
    "Возраст: от 20 лет",
    "Гражданство: РФ",
    "Необходимые документы: паспорт гражданина РФ",
    "Наличие доступа в интернет и мобильного телефона",
    "Пенсионеры",
    "Безработные",
    "Лица, недавно получившие российское гражданство.",
  ];
  const stepsArr = [
    { icon: "how-to-get-step-1", text: "Зарегистрироваться" },
    { icon: "how-to-get-step-2", text: "Указать личные данные" },
    { icon: "how-to-get-step-3", text: "Выбрать пакет услуг" },
    { icon: "how-to-get-step-4", text: "Подписать договор, введя код из СМС" },
  ];
  const conditionsArr = [
    "Минимальная ставка \n" + "займа на карту 0%",
    "Минимальная сумма \n" + "займа 1000 ₽",
    "Максимальная сумма \n" + "займа 100 000 ₽",
    "Максимальный срок \n" + "займа 360 дней",
  ];
  return (
    <div className="how-to-get">
      <div className="how-to-get-container">
        <div className="how-to-get-container-left">
          <div className="how-to-get-container-left__title">
            Получение займа <br /> на банковскую карту
          </div>
          <div
            className="how-to-get-container-left__text"
            style={{ marginTop: "25px" }}
          >
            Самый быстрый выход из ситуации, когда необходимо срочно получить{" "}
            <br />
            деньги — микрозайм. С помощью онлайн-сервиса Expressmoney это <br />
            можно сделать моментально.
          </div>
          <div
            className="how-to-get-container-left__title"
            style={{ marginTop: "80px", fontSize: "30px" }}
          >
            Условия предоставления займа на карту
          </div>
          <div className="how-to-get-container-left__info-block">
            Моментальный займ на карту — это краткосрочный кредит,
            <br /> предоставляемый посредством направления денег на счет
            банковской <br /> карты. Все оформление такой услуги занимает не
            более 5 минут.
          </div>
          <div
            className="how-to-get-container-left__title"
            style={{ marginTop: "80px", fontSize: "30px" }}
          >
            Требования к заемщикам
          </div>
          <div
            className="how-to-get-container-left__text"
            style={{ marginTop: "25px" }}
          >
            Предоставляемый займ может быть использован совершеннолетними <br />
            дееспособными гражданами Российской Федерации:
          </div>
          <div className="how-to-get-container-left__requirements-list">
            {reqsArr?.length &&
              reqsArr.map((el, idx) => {
                return (
                  <div
                    className="how-to-get-container-left__requirements-list-item"
                    key={idx}
                  >
                    <SvgSelector id="req-list-item" /> <div>{el}</div>
                  </div>
                );
              })}
          </div>
          <div className="how-to-get-container-left__text">
            Микрозаймы предоставляют отличную возможность профинансировать{" "}
            <br />
            любые свои финансовые потребности, в максимально короткий срок.
          </div>
        </div>
        <AmountOfCreditForm />
        {/*// TODO Как это работает блок добавить */}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="how-to-get-container-left__title"
            style={{ fontSize: "30px", marginTop: "80px" }}
          >
            Четыре простых шага чтобы получить деньги
          </div>
          <div className="how-to-get__steps">
            {stepsArr?.length &&
              stepsArr.map((el, idx) => {
                return (
                  <div className="how-to-get__steps-item" key={idx}>
                    <SvgSelector id={el?.icon} /> <div>{el?.text}</div>
                  </div>
                );
              })}
          </div>
          <div className="how-to-get-container-left__text">
            Для тех кто обращается к нам первый раз, займ предоставляется в
            размере <br />
            от 1 000 до 15 000 рублей сроком от 3 до 5 дней. Для новых клиентов{" "}
            <br />
            периодически действует акция (уточнять при взятии кредита)
            процентная <br />
            ставка при которой 0% — к возврату только сумма основного долга,
            погашаемая <br />
            единовременно. Решение по заявке будет предоставлено в течение 5
            минут, <br />
            деньги будут направлены на вашу банковскую карту. Для
            предворительного <br />
            расчета параметров займа можно воспользоваться нашим калькулятором
            на <br />
            главной странице. Кроме этого, в нашей компании действует программа{" "}
            <br />
            лояльности для наших постоянных клиентов.
          </div>
          <div className="how-to-get__conditions-list">
            {conditionsArr?.length &&
              conditionsArr.map((el, idx) => {
                return (
                  <div className="how-to-get__conditions-list-item" key={idx}>
                    <SvgSelector id="how-to-get-condition" />{" "}
                    <div className="how-to-get__conditions-list-item-title">
                      {el}
                    </div>
                  </div>
                );
              })}
          </div>
          <AppLoanBlock />
        </div>
      </div>
    </div>
  );
};

export default HowToGet;
