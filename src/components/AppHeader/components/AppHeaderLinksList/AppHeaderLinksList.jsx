import AppHeaderLink from "./components/AppHeaderLink/AppHeaderLink.jsx";
import {RouterPath} from "../../../../utils/utils.js";
import './AppHeaderLinksList.scss';

const AppHeaderLinksList = () => {
    const linksArr = [
        {name: 'Как получить', url: RouterPath.howToGet, destination: 'inner'},
        {name: 'Как погасить', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
        {name: 'Программа лояльности', url: RouterPath.loyaltyProgram, destination: 'inner'},
        {name: 'О компании', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
        {name: 'Вопрос ответы', url: 'https://platform.expressmoney.com/loans/', destination: 'out'}
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