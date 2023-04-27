import "./AppBreadcrumbs.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SvgSelector from "../SvgSelector/SvgSelector.jsx";
import {RouterPath} from "../../utils/constants.js";

const AppBreadcrumbs = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [slashes, setSlashes] = useState(0);

  function moveTo(link) {
    navigate(link);
  }

  function currPathSlashes() {
    return currentPath.split("/").length - 1;
  }

  function cutPath(path, idx, mode) {
    const arrCurrPath = currentPath.split("/");
    if (idx && mode === 'convertPath') return pathName(arrCurrPath[idx]);
    if (idx && mode === 'path') return `/${arrCurrPath[idx - 1]}`
  }

  function pathName(path) {
    if (path === 'how-to-repay') return "Как погасить";
    if (path === 'how-to-get') return "Как получить";
    if (path === "loyalty-program") return "Программа лояльности";
    if (path === "about-company") return "О компании";
    if (path === "faq-page") return "Вопрос ответы";
    // if (
    //   slashes === 2 &&
    //   currentPath.includes(RouterPath.districtId.replace(":id", path))
    // ) {
    //   return districtInfo?.district?.name;
    // }
    return path;
  }

  function renderBreadcrumbs() {
    if (currentPath !== RouterPath.main) {
      return (
        <div className="breadcrumbs__item" style={{ marginTop: '20px', marginBottom: '20px'}}>
          <div
            className="breadcrumbs__item-title_grey"
            onClick={() => moveTo(RouterPath.main)}
          >
            Главная
          </div>
          <SvgSelector className="breadcrumbs__arrow" id="breadcrumbs-arrow" />
          {[1, 2].includes(slashes) && (
            <button className="breadcrumbs__item-title" onClick={() => moveTo(cutPath(currentPath, 2, 'path'))}>
              {cutPath(currentPath, 1, 'convertPath')}
            </button>
          )}
          {[2].includes(slashes) && (
            <div style={{ display: "flex", gap: "10px" }}>
              <SvgSelector className="breadcrumbs__arrow" id="breadcrumbs-arrow" />
              <button className="breadcrumbs__item-title">
                {cutPath(currentPath, 2, 'convertPath')}
              </button>
            </div>
          )}
        </div>
      );
    }
  }

  useEffect(() => {
    setSlashes(currPathSlashes(currentPath));
  }, [currentPath]);

  return <div className="breadcrumbs">{renderBreadcrumbs()}</div>;
};

export default AppBreadcrumbs;
