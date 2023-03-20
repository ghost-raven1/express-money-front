import {Provider} from "react-redux";
import RoutesWrapper from "./components/AppLayout/RoutesWrapper.jsx";
import store from "./store/index.js";
import {routes} from "./utils/constants.js";

function App() {
    return (
        <Provider store={store}>
            <RoutesWrapper routes={routes} />
        </Provider>
    );
}

export default App
