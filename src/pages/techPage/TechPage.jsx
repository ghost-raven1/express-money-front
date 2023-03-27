import './TechPage.scss';
import AppButton from "../../components/AppButton/AppButton.jsx";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "../../utils/constants.js";
const TechPage = () => {
    const navigate = useNavigate();

    return (
        <div className="tech-page">
            <div className="tech-page__title">Ссылки на новые разделы: </div>
            <div className="tech-page__buttons">
                <AppButton mode="black" onClick={() => navigate(RouterPath.auth)}>Авторизация</AppButton>
                <AppButton mode="black" onClick={() => navigate(RouterPath.profile)}>Личный кабинет</AppButton>
                <AppButton mode="black" onClick={() => navigate(RouterPath.application)}>Заявка</AppButton>
                <AppButton mode="black" onClick={() => navigate(RouterPath.aboutCompany)}>О компании</AppButton>
            </div>
        </div>
    )
}

export default TechPage;