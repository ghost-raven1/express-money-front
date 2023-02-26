import './AppFooter.scss'
import AppFooterSearchBlock from "./components/AppFooterSearchBlock/AppFooterSearchBlock.jsx";
import AppFooterNavPanel from "./components/AppFooterSearchBlock/components/AppFooterNavPanel/AppFooterNavPanel.jsx";
import AppFooterInfoLinks from "./components/AppFooterSearchBlock/components/AppFooterInfoLinks/AppFooterInfoLinks.jsx";
import AppFooterCopyrights
    from "./components/AppFooterSearchBlock/components/AppFooterCopyrights/AppFooterCopyrights.jsx";
const AppFooter = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <AppFooterSearchBlock />
                <AppFooterNavPanel />
                <div className="footer-inner__delimiter" />
                <AppFooterInfoLinks />
                <AppFooterCopyrights />
            </div>
        </div>
    )
}

export default AppFooter;