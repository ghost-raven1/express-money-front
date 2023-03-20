import './AppLoanBlockCard.scss'
import appLoanBlockSmileMan from 'src/assets/LoanBlock/SmileMan.png';
import AppButton from "../../../AppButton/AppButton.jsx";
import SvgSelector from "../../../SvgSelector/SvgSelector.jsx";
import {RouterPath} from "../../../../utils/constants.js";
const AppLoanBlockCard = () => {
    const currentPath = window.location.pathname;

    function peoplesImages () {
        if (currentPath === RouterPath.main) return appLoanBlockSmileMan
        if (currentPath === RouterPath.howToGet) return appLoanBlockSmileMan
        if (currentPath === RouterPath.faqPage) return appLoanBlockSmileMan
    }

    function imgStyleClasses () {
        if (currentPath === RouterPath.howToGet) return 'loan-block-card-right__img-mini'
        else return 'loan-block-card-right__img'
    }

    function cardStyleClasses () {
        if (currentPath === RouterPath.howToGet) return 'loan-block-card-mini'
        else return 'loan-block-card'
    }

    function cardLeftStyleClasses () {
        if (currentPath === RouterPath.howToGet) return 'loan-block-card-left-mini'
        else return 'loan-block-card-left'
    }

    return (
        <div className={cardStyleClasses()}>
            <div className={cardLeftStyleClasses()}>
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
                <img className={imgStyleClasses()} src={peoplesImages()} alt="" />
            </div>
        </div>
    )
}

export default AppLoanBlockCard;