import AppHeaderLink from "./components/AppHeaderLink/AppHeaderLink.jsx";
import './AppHeaderLinksList.scss';
import {links} from "../../../../utils/constants.js";

const AppHeaderLinksList = () => {
    return (
        <div className="header-links-list">
            {!!links.length && links.map((link, idx) => {
                return <AppHeaderLink key={idx} link={link} />
            })}
        </div>
    )
}

export default AppHeaderLinksList;