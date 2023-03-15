import "./AppHeader.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/utils.js";
import AppHeaderLinksList from "./components/AppHeaderLinksList/AppHeaderLinksList.jsx";
import AppHeaderPhoneNumber from "./components/AppHeaderPhoneNumber/AppHeaderPhoneNumber.jsx";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";
import {useState} from "react";
import EventEmitter from "../../utils/EventEmitter.js";
const AppHeader = () => {
  const navigate = useNavigate();
  let [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="header">
      <button className="header__button-menu" onClick={() => {
          setIsOpenMenu(isOpenMenu = !isOpenMenu);
          EventEmitter.emit("isOpenMenu", isOpenMenu);
      }
      }>
        <SvgSelector id="header-hamburger-icon-white" />
      </button>
      <div
        className="header__company"
        onClick={() => navigate(RouterPath.main)}
      >
        Expressmoney
      </div>
      <AppHeaderLinksList />
      <AppHeaderPhoneNumber />
      <a
        href="https://platform.expressmoney.com/login/"
        target="_blank"
        className="header__button"
      >
        <SvgSelector id="login-header-icon" />
        Войти
      </a>
      <a
        href="https://platform.expressmoney.com/login/"
        target="_blank"
        className="header__button-mob"
      >
        <SvgSelector id="login-header-icon-white" />
      </a>
    </div>
  );
};

export default AppHeader;
