import "./FaqPage.scss";
import AppLoanBlock from "../../components/AppLoanBlock/AppLoanBlock.jsx";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import faqBanner from "src/assets/faq/Banner.svg";
import mainTariffsBlockDelimiter from "src/assets/main/Delimiters/Delimiter.svg";
import FaqQuestionsList from "./components/FaqQuestionsList/FaqQuestionsList.jsx";
const FaqPage = () => {
  const popQuestionsArr = [
    {
      text: "Как получить займ?",
      desc: "Вы можете оставить заявку на получение займа на нашем сайте: www.expressmoney.com. Вам необходимо паспорт гражданина РФ и мобильный телефон с действующим номером",
    },
    {
      text: "Какие требования к заёмщику?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Какие условия выдачи займов?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как проходит процесс оформления заявки?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как быстро рассматривается заявка?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Где взять промокод на скидку?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Что такое кредитный рейтинг? Как его получить?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Что такое верификация и зачем ее проходить?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как начать зарабатывать с нашей Компанией?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как погасить займ?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Можно ли погасить займ заранее или оплатить его частично?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как продлить займ?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Электронная почта Компании?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как направить обращение в Вашу компанию?",
      desc: "Ответ на вопрос",
    },
  ];
  const techQuestionsArr = [
    {
      text: "Как зайти в личный кабинет?",
      desc: "Для входа в ваш личный кабинет необходимо ввести 10-ти значный номер вашего мобильного телефона (в формате 9ХХХХХХХХХ) и пароль.",
    },
    {
      text: "Что такое смс-код?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Мне не приходит смс-код",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как изменить номер телефона?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Не загружается страница сайта?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Не могу оплатить займ банковской картой?",
      desc: "Ответ на вопрос",
    },
  ];
  const urQuestionsArr = [
    {
      text: "Где представлена информация на сайте Компании о Вас?",
      desc: 'На нашем сайте: https://www.expressmoney.com/info/about_us, в нижней части сайта, в разделе: "О нас" Вы можете ознакомиться с информацией о Компании, а именно представлена информация про службу поддержки, наш адрес, органы управления, реквизиты Компании',
    },
    {
      text: "Реструктуризация задолженности",
      desc: "Ответ на вопрос",
    },
    {
      text:
        "В случае возникновения одной из вышеперечисленных ситуаций \n" +
        "вам необходимо:",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как оформить реструктуризацию?",
      desc: "Ответ на вопрос",
    },
    {
      text:
        "Насколько законны Ваши действия, направленные на возврат \n" +
        "просроченной задолженности?",
      desc: "Ответ на вопрос",
    },
    {
      text:
        "Что делать, если я не смог погасить займ вовремя, и мне начали \n" +
        "поступать звонки?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Какие будут последствия, если я не погасил займ вовремя?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как связаться с отделом по работе с просроченной задолженностью?",
      desc: "Ответ на вопрос",
    },
  ];
  const supportQuestionsArr = [
    {
      text: "Что такое кредитные каникулы?",
      desc: 'На нашем сайте: https://www.expressmoney.com/info/about_us, в нижней части сайта, в разделе: "О нас" Вы можете ознакомиться с информацией о Компании, а именно представлена информация про службу поддержки, наш адрес, органы управления, реквизиты Компании',
    },
    {
      text: "Кто может получить кредитные каникулы?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Сколько длится льготный период?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как направить требование?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как предоставить документы?",
      desc: "Ответ на вопрос",
    },
    {
      text: "Как определить сроки?",
      desc: "Ответ на вопрос",
    },
    {
      text:
        "Что обязательно должен знать заемщик перед тем, \n" +
        "как затребовать кредитные каникулы?",
      desc: "Ответ на вопрос",
    },
  ];
  return (
    <div className="faq-page">
      <AppHeadSection
        title="Вопросы и ответы"
        img={mainTariffsBlockDelimiter}
        desc="Мы собрали для вас информацию по наиболее часто встречающимся вопросам"
        sectionWidth="900"
      />
      <img src={faqBanner} alt="" />
      <div className="faq-page-section">
        <AppHeadSection
          title="Популярные вопросы"
          img={mainTariffsBlockDelimiter}
          sectionWidth="900"
        />
        <FaqQuestionsList questions={popQuestionsArr} />
      </div>
      <div className="faq-page-section">
        <AppHeadSection
          title="Технические вопросы"
          img={mainTariffsBlockDelimiter}
          sectionWidth="900"
        />
        <FaqQuestionsList questions={techQuestionsArr} />
      </div>
      <div className="faq-page-section">
        <AppHeadSection
          title="Юридические вопросы, взыскание задолженности"
          img={mainTariffsBlockDelimiter}
          sectionWidth="900"
        />
        <FaqQuestionsList questions={urQuestionsArr} />
      </div>
      <div className="faq-page-section">
        <AppHeadSection
          title="Меры поддержки заемщиков, призванных на военную службу по мобилизации, принимающими участие в специальной военной операции, а также членов их семей Федеральный закон от 07.10.2022 N 377-ФЗ (кредитные каникулы)"
          img={mainTariffsBlockDelimiter}
          titleSize="24"
          sectionWidth="900"
        />
        <FaqQuestionsList questions={supportQuestionsArr} />
      </div>
      <AppLoanBlock />
    </div>
  );
};

export default FaqPage;
