import './MainLoanBlockCard.scss'
import {mainLoanBlockSmileMan} from "../../../../../../utils/images.js";
const MainLoanBlockCard = () => {
    return (
        <div className="loan-block-card">
            <div className="loan-block-card-left">
                <div className="loan-block-card-left__title">Первый заём</div>
                <div className="loan-block-card-left__desc">
                    0,9% на срок до 21 дня на сумму до 15 000 ₽
                </div>
            </div>
            <div className="loan-block-card-right">
                <img className="loan-block-card-right__img" src={mainLoanBlockSmileMan} alt="" />
            </div>
        </div>
    )
}

export default MainLoanBlockCard;