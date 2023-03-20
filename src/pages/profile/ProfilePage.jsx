import './ProfilePage.scss';
import AppHeadSection from "../../components/AppHeadSection/AppHeadSection.jsx";
import mainTariffsBlockDelimiter from "../../assets/main/Delimiters/Delimiter.svg";
const ProfilePage = () => {
    return (
        <div>
            <AppHeadSection
                title="Личный кабинет"
                img={mainTariffsBlockDelimiter}
                desc="Рады вас видеть!"
            />
        </div>
    )
}

export default ProfilePage;