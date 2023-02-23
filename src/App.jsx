import {Provider} from "react-redux";
import RoutesWrapper from "./components/AppLayout/RoutesWrapper.jsx";
import {RouterPath} from "./utils/utils.js";
import store from "./store/index.js";

function App() {
    const routes = [
        { path: RouterPath.main, mode: "main" },
        { path: "*", mode: "error" },
    ];

    return (
        <Provider store={store}>
            <RoutesWrapper routes={routes} />
        </Provider>
    );
}

export default App
