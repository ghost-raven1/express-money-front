import "./AppMobileMenu.scss";
import { useNavigate } from "react-router-dom";
import EventEmitter from "../../utils/EventEmitter.js";
import {links} from "../../utils/constants.js";
const AppMobileMenu = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  function listItemStyles(url) {
    if (currentPath === url)
      return "mobile-menu-list__item mobile-menu-list__item_active";
    else return "mobile-menu-list__item";
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-list">
        {!!links.length &&
          links.map((link, idx) => {
            return (
              <>
                {link?.destination === "inner" && (
                  <button
                    className={listItemStyles(link.url)}
                    onClick={() => {
                      navigate(link.url);
                      EventEmitter.emit("isOpenMenu", false);
                    }}
                  >
                    {link.name}
                  </button>
                )}
                {link?.destination === "out" && (
                  <a
                    className={listItemStyles(link.url)}
                    href={link.url}
                    target="_blank"
                    onClick={() => {
                      EventEmitter.emit("isOpenMenu", false);
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AppMobileMenu;
