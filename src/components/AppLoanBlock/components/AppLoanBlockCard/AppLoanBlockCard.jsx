import './AppLoanBlockCard.scss'
import {RouterPath} from "../../../../utils/utils.js";
import appLoanBlockSmileMan from 'src/assets/LoanBlock/SmileMan.png';
import appLoanBlockSmileMan1 from 'src/assets/LoanBlock/SmileMan1.png';
import appLoanBlockSmileMan2 from 'src/assets/LoanBlock/SmileMan2.png';
import AppButton from "../../../AppButton/AppButton.jsx";
import SvgSelector from "../../../SvgSelector/SvgSelector.jsx";
const AppLoanBlockCard = () => {
    const currentPath = window.location.pathname;
    function peoplesImages () {
        if (currentPath === RouterPath.main) return appLoanBlockSmileMan
        if (currentPath === RouterPath.howToGet) return appLoanBlockSmileMan1
        if (currentPath === RouterPath.faqPage) return appLoanBlockSmileMan2
    }
    return (
        <div className="loan-block-card">
            <div className="loan-block-card-left">
                <div className="loan-block-card-left__title">Первый заём</div>
                <div className="loan-block-card-left__desc">
                    0,9% на срок до 21 дня на сумму до 15 000 ₽
                </div>
                <div className="main__button-border main__button-border_black">
                    <a href="https://platform.expressmoney.com/loans/" target='_blank'>
                    <AppButton mode="black">
                        ОФОРМИТЬ ЗАЯВКУ <SvgSelector id="arrow-in-round" />
                    </AppButton>
                    </a>
                </div>
            </div>
            <div className="loan-block-card-right">
                <img className="loan-block-card-right__img" src={peoplesImages()} alt="" />
            </div>
        </div>
    )
}

export default AppLoanBlockCard;