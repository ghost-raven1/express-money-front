import './AppFooter.scss'
import AppFooterSearchBlock from "./components/AppFooterSearchBlock/AppFooterSearchBlock.jsx";
import AppFooterNavPanel from "./components/AppFooterSearchBlock/components/AppFooterNavPanel/AppFooterNavPanel.jsx";
import AppFooterInfoLinks from "./components/AppFooterSearchBlock/components/AppFooterInfoLinks/AppFooterInfoLinks.jsx";
const AppFooter = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <AppFooterSearchBlock />
                <AppFooterNavPanel />
                <div className="footer-inner__delimiter" />
                <AppFooterInfoLinks />
            </div>
        </div>
    )
}

export default AppFooter;