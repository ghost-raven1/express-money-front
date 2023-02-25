import "./MainDeliveryBlockCard.scss";
import { mainDeliveryBlockCardBackground } from "../../../../../../utils/images.js";
const MainDeliveryBlockCard = () => {
  return (
    <div className="delivery-block-card">
      <div>
        <div>Удобный способ получения</div>
        <div>// Разделитель</div>
        <div>
          Картельные сговоры не допускают ситуации, при которой активно
          развивающиеся страны третьего мира будут функционально разнесены на.
        </div>
      </div>
      <img src={mainDeliveryBlockCardBackground} alt="" />
    </div>
  );
};

export default MainDeliveryBlockCard;
