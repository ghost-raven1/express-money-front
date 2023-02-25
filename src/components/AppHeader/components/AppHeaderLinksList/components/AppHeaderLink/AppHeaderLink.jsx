import "./AppHeaderLink.scss";
import { useNavigate } from "react-router-dom";
const AppHeaderLink = ({ link }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  function headerLinkStyles () {
    if (currentPath === link.url) return 'header-link header-link_active'
    else return 'header-link'
  }
  return (
    <button className={headerLinkStyles()} onClick={() => navigate(link.url)}>
      {link.name}
    </button>
  );
};

export default AppHeaderLink;
