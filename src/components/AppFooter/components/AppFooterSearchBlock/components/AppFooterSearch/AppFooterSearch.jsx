import './AppFooterSearch.scss';
import footerSearchIcon from 'src/assets/footer/search/search-icon.svg';
const AppFooterSearch = () => {
    return (
        <div className="app-footer-search">
            <img src={footerSearchIcon} alt='' className="app-footer-search__icon"/>
            <input className="app-footer-search__input" placeholder="Поиск по сайту" />
            <button className="app-footer-search__button">Найти</button>
        </div>
    )
}

export default AppFooterSearch;