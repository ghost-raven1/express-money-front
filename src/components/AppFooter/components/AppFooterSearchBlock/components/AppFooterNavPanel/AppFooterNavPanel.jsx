import "./AppFooterNavPanel.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../../../../../utils/utils.js";
const AppFooterNavPanel = () => {
  const navigate = useNavigate();
  const leftArr = [
    { name: "Как получить заем?", url: 'https://platform.expressmoney.com/loans/'},
    { name: "Как погасить заем?", url: 'https://platform.expressmoney.com/loans/' },
    { name: "Клубная карта", url: "" },
    { name: "Мобильное приложение", url: "" },
    { name: "Вопросы и ответы", url: RouterPath.faqPage },
    { name: "Личный кабинет", url: "" },
    { name: "Карта сайта", url: "" },
  ];
  const rightArr = [
    { name: "Новости и акции", url: "" },
    { name: "Блог", url: "" },
    { name: "О компании", url: "" },
    { name: "Органы управления", url: "" },
    { name: "Раскрытие информации", url: "" },
    { name: "Документы", url: "" },
    { name: "Политика конфиденциальности", url: "" },
    { name: "Финансовая отчетность", url: "" },
  ];
  return (
    <div className="footer-nav-panel">
      <div className="footer-nav-panel__left">
        <div className="footer-nav-panel__left-title">Заемщикам</div>
        <div className="footer-nav-panel__left-list">
          {!!leftArr?.length &&
            leftArr.map((link, idx) => {
              return (
                <a
                  className="footer-nav-panel__left-list-item"
                  href={link.url}
                  target="_blank"
                >
                  {link.name}
                </a>
              );
            })}
        </div>
      </div>
      <div className="footer-nav-panel__right">
        <div className="footer-nav-panel__right-title">
          Информационный центр
        </div>
        <div className="footer-nav-panel__right-list">
          {!!rightArr?.length &&
            rightArr.map((link, idx) => {
              return (
                <div
                  className="footer-nav-panel__left-list-item"
                  onClick={() => navigate(link.url)}
                >
                  {link.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AppFooterNavPanel;
