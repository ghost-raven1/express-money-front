import './AppFooterSearchBlock.scss'
import AppFooterSearch from "./components/AppFooterSearch/AppFooterSearch.jsx";
const AppFooterSearchBlock = () => {
    return (
        <div className="footer-search-block">
            <div className="footer-search-block__left">
                <div className="footer-search-block__left-number">8 800 250 89 80</div>
                <div className="footer-search-block__left-desc">Телефон для звонков по России</div>
            </div>
            <div className="footer-search-block__right">
                <AppFooterSearch />
            </div>
        </div>
    )
}

export default AppFooterSearchBlock;