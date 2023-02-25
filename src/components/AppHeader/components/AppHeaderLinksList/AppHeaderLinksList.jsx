import AppHeaderLink from "./components/AppHeaderLink/AppHeaderLink.jsx";
import {RouterPath} from "../../../../utils/utils.js";
import './AppHeaderLinksList.scss';

const AppHeaderLinksList = () => {
    const linksArr = [
        {name: 'Как погасить', url: RouterPath.howToRepay},
        {name: 'Как получить', url: RouterPath.howToGet},
        {name: 'Программа лояльности', url: RouterPath.loyaltyProgram},
        {name: 'О компании', url: RouterPath.aboutCompany},
        {name: 'Вопрос ответы', url: RouterPath.faqPage}
    ]
    return (
        <div className="header-links-list">
            {!!linksArr.length && linksArr.map((link, idx) => {
                return <AppHeaderLink key={idx} link={link} />
            })}
        </div>
    )
}

export default AppHeaderLinksList;