import "./FaqPage.scss";
import AppLoanBlock from "../../components/AppLoanBlock/AppLoanBlock.jsx";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import {faqBanner, mainTariffsBlockDelimiter} from "../../utils/images.js";
const FaqPage = () => {
  return (
    <div className="faq-page">
      <AppHeadSection
        title="Вопросы и ответы"
        img={mainTariffsBlockDelimiter}
        desc="Мы собрали для вас информацию по наиболее часто встречающимся вопросам"
      />
      <img src={faqBanner} alt="" />
      <AppHeadSection
        title="Популярные вопросы"
        img={mainTariffsBlockDelimiter}
      />
      <AppLoanBlock />
    </div>
  );
};

export default FaqPage;
