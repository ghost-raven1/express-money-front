import './MainTariffsBlock.scss'
import {mainTariffsBlockDelimiter} from "../../../../utils/images.js";
import MainTariffsList from "./components/MainTariffsList/MainTariffsList.jsx";
const MainTariffsBlock = () => {
    return (
        <div className="tariffs">
            <div className="tariffs__top-tariffs top-tariffs">
                <div className="top-tariffs__title">Тарифы</div>
                <img className="top-tariffs__delimiter" src={mainTariffsBlockDelimiter} alt="" />
                <div className="top-tariffs__subtitle">Мы подобрали для вас лучшие предложения</div>
            </div>
            <MainTariffsList />
        </div>
    )
}

export default MainTariffsBlock;