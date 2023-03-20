import React from "react";
import "./ErrorPage.scoped.scss";
import { useNavigate } from "react-router-dom";
import {RouterPath} from "../../utils/constants.js";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-404">
      <div className="page-404__content">
        <span className="page-404__code">404</span>
        <span className="page-404__text">Страница не найдена!</span>
      </div>
      <button
        className="page-404__btn button light"
        onClick={() => navigate(RouterPath.main)}
      >
        На главную страницу
      </button>
    </div>
  );
};

export default ErrorPage;
