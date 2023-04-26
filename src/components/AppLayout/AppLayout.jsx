import React, { useEffect, useState } from "react";
import { checkRoute } from "../../scripts/layout";
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppFooter from "../AppFooter/AppFooter.jsx";
import "../../assets/styles/app.scss";
import AppBreadcrumbs from "../AppBreadcrumbs/AppBreadcrumbs.jsx";
import EventEmitter from "src/utils/EventEmitter";
import AppMobileMenu from "../AppMobileMenu/AppMobileMenu.jsx";
import { useDispatch } from "react-redux";
import {
  getTokenAsync,
  postTokenRefreshAsync,
} from "../../store/reducers/auth.js";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/constants.js";

const AppLayout = ({ mode, isShowNavbar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isShow, currentModalKey, options } = useSelector(
  //   (state) => state.modals
  // );
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [accessLifeTime, setAccessLifeTime] = useState(
    +localStorage.getItem("access_lifetime_total")
  );
  const [refreshLifeTime, setRefreshLifeTime] = useState(
    +localStorage.getItem("refresh_lifetime_total")
  );

  // function closeModal() {
  //   dispatch(hideModal());
  // }

  function updateTokens() {
    dispatch(
      postTokenRefreshAsync({
        params: {
          access: localStorage.getItem("access"),
          refresh: localStorage?.getItem("refresh"),
        },
      })
    );
  }

  useEffect(() => {
    if (+localStorage.getItem("access_lifetime") === 0) {
      setAccessLifeTime(+localStorage.getItem("access_lifetime_total"));
    }
    if (+localStorage.getItem("refresh_lifetime") === 0) {
      setRefreshLifeTime(+localStorage.getItem("refresh_lifetime_total"));
    }
    else {
      setAccessLifeTime(+localStorage.getItem("access_lifetime"));
      setRefreshLifeTime(+localStorage.getItem("refresh_lifetime"));
    }
  }, []);

  useEffect(() => {
    const menuListener = EventEmitter.addListener("isOpenMenu", (value) => {
      setIsOpenMenu(value);
    });
    return () => {
      menuListener.remove();
    };
  });

  useEffect(() => {
    const intervalUpdateAccessToken = setInterval(() => {
      if (
        !!localStorage.getItem("access")?.length &&
        !!localStorage.getItem("refresh")
      ) {
        setAccessLifeTime((prevState) => {
          // console.log("Обновление access через", prevState);
          if (prevState > 0 && prevState !== 0) return prevState - 1;
          else {
            updateTokens();
            setAccessLifeTime(+localStorage.getItem("access_lifetime_total"));
          }
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalUpdateAccessToken);
      localStorage.setItem("access_lifetime", accessLifeTime.toString());
    };
  }, [accessLifeTime]);

  useEffect(() => {
    const intervalUpdateRefreshToken = setInterval(() => {
      if (
        !!localStorage.getItem("access")?.length &&
        !!localStorage.getItem("refresh")
      ) {
        setRefreshLifeTime((prevState) => {
          // console.log("Обновление refresh через", prevState);
          if (prevState > 0 && prevState !== 0) return prevState - 1;
          else navigate(RouterPath.auth);
        });
      }
    }, 1000);
    return () => {
      clearInterval(intervalUpdateRefreshToken);
      localStorage.setItem("refresh_lifetime", refreshLifeTime.toString());
    };
  }, [refreshLifeTime]);

  return (
    <>
      {/*<AppAlert />*/}
      <div className="app">
        <AppHeader />
        <AppBreadcrumbs />
        {!isOpenMenu && checkRoute(mode)}
        {isOpenMenu && <AppMobileMenu />}
        {/*<AppModal active={isShow} setActive={closeModal} isClosable={false}>*/}
        {/*  {modalRender(options, closeModal, currentModalKey)}*/}
        {/*</AppModal>*/}
        <AppFooter />
      </div>
    </>
  );
};

export default AppLayout;
