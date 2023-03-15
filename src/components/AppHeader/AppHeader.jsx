import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/utils.js";
import AppHeaderLinksList from "./components/AppHeaderLinksList/AppHeaderLinksList.jsx";
import AppHeaderPhoneNumber from "./components/AppHeaderPhoneNumber/AppHeaderPhoneNumber.jsx";
const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div
        className="header__company"
        onClick={() => navigate(RouterPath.main)}
      >
        Expressmoney
      </div>
        {/*<AppHeaderLinksList />*/}
        <AppHeaderPhoneNumber />
    </div>
  );
};

export default AppHeader;
