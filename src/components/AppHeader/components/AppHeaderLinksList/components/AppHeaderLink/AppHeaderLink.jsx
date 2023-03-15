import "./AppHeaderLink.scss";
import { useNavigate } from "react-router-dom";
const AppHeaderLink = ({ link }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  function headerLinkStyles() {
    if (currentPath === link.url) return "header-link header-link_active";
    else return "header-link";
  }
  return (
    <>
      {link?.destination === "inner" && (
        <button
          className={headerLinkStyles()}
          onClick={() => navigate(link.url)}
        >
          {link.name}
        </button>
      )}
      {link?.destination === "out" && (
        <a className={headerLinkStyles()} href={link.url} target="_blank">
          {link.name}
        </a>
      )}
    </>
  );
};

export default AppHeaderLink;
