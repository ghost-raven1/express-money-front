import "./LoyaltyProgram.scss";
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from 'src/assets/main/Delimiters/Delimiter.svg';
const loyaltyProgram = () => {
  return (
    <div className="loyalty-program">
      <AppHeadSection
        title="Программа лояльности"
        img={mainTariffsBlockDelimiter}
      />
    </div>
  );
};

export default loyaltyProgram;
