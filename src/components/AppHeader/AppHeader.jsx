import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/utils.js";
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
    </div>
  );
};

export default AppHeader;
