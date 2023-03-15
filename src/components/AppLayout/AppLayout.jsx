import React, {useEffect, useState} from "react";
import { checkRoute } from "../../scripts/layout";
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppFooter from "../AppFooter/AppFooter.jsx";
import "../../assets/styles/app.scss";
import AppBreadcrumbs from "../AppBreadcrumbs/AppBreadcrumbs.jsx";
import EventEmitter from "src/utils/EventEmitter";
import AppMobileMenu from "../AppMobileMenu/AppMobileMenu.jsx";

const AppLayout = ({ mode, isShowNavbar }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
  // const dispatch = useDispatch();
  // const { isShow, currentModalKey, options } = useSelector(
  //   (state) => state.modals
  // );

  // function closeModal() {
  //   dispatch(hideModal());
  // }

    useEffect(() => {
        const menuListener = EventEmitter.addListener("isOpenMenu", (value) => {
            console.log('menu', value)
            setIsOpenMenu(value);
        });
        return () => {
            menuListener.remove();
        };
    });

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
