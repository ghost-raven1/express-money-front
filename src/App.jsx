import {Provider} from "react-redux";
import RoutesWrapper from "./components/AppLayout/RoutesWrapper.jsx";
import {RouterPath} from "./utils/utils.js";
import store from "./store/index.js";

function App() {
    const routes = [
        { path: RouterPath.main, mode: "main" },
        { path: RouterPath.howToRepay, mode: 'howToRepay'},
        { path: RouterPath.howToGet, mode: 'howToGet'},
        { path: RouterPath.loyaltyProgram, mode: 'loyaltyProgram'},
        { path: RouterPath.aboutCompany, mode: 'aboutCompany'},
        { path: RouterPath.faqPage, mode: 'faqPage'},
        { path: "*", mode: "error" },
    ];

    return (
        <Provider store={store}>
            <RoutesWrapper routes={routes} />
        </Provider>
    );
}

export default App
