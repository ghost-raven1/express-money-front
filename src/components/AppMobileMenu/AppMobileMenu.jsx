import "./AppMobileMenu.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/utils.js";
import EventEmitter from "../../utils/EventEmitter.js";
const AppMobileMenu = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const links = [
    {name: 'Как получить', url: RouterPath.howToGet, destination: 'inner'},
    {name: 'Как погасить', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
    {name: 'Программа лояльности', url: RouterPath.loyaltyProgram, destination: 'inner'},
    {name: 'О компании', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
    {name: 'Вопрос ответы', url: 'https://platform.expressmoney.com/loans/', destination: 'out'}
  ];
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
