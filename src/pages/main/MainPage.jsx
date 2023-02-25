import './MainPage.scss'
import MainOfferBlock from "./components/MainOfferBlock/MainOfferBlock.jsx";
import MainTariffsBlock from "./components/MainTariffsBlock/MainTariffsBlock.jsx";
import MainAdvantagesBlock from "./components/MainAdvantagesBlock/MainAdvantagesBlock.jsx";
import MainHowItWorks from "./components/MainHowItWorksBlock/MainHowItWorks.jsx";
import MainDeliveryBlock from "./components/MainDeliveryBlock/MainDeliveryBlock.jsx";
import MainReviewsBlock from "./components/MainReviewsBlock/MainReviewsBlock.jsx";
import AppLoanBlock from "../../components/AppLoanBlock/AppLoanBlock.jsx";
import MainBroadcastBlock from "./components/MainBroadcastBlock/MainBroadcastBlock.jsx";
const MainPage = () => {
    return (
        <div className="main">
            <MainOfferBlock />
            <div style={{position: 'relative'}}>
                <MainTariffsBlock />
                <MainAdvantagesBlock />
            </div>
            <MainHowItWorks />
            <MainDeliveryBlock />
            <MainReviewsBlock />
            <AppLoanBlock />
            <MainBroadcastBlock />
        </div>
    )
}

export default MainPage;