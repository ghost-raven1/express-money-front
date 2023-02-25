import React from "react";
import { checkRoute } from "../../scripts/layout";
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppFooter from "../AppFooter/AppFooter.jsx";
import "../../assets/styles/app.scss";
import AppBreadcrumbs from "../AppBreadcrumbs/AppBreadcrumbs.jsx";

const AppLayout = ({ mode, isShowNavbar }) => {
  // const dispatch = useDispatch();
  // const { isShow, currentModalKey, options } = useSelector(
  //   (state) => state.modals
  // );

  // function closeModal() {
  //   dispatch(hideModal());
  // }

  return (
    <>
      {/*<AppAlert />*/}
      <div className="app">
        <AppHeader />
        <AppBreadcrumbs />
        {checkRoute(mode)}
        {/*<AppModal active={isShow} setActive={closeModal} isClosable={false}>*/}
        {/*  {modalRender(options, closeModal, currentModalKey)}*/}
        {/*</AppModal>*/}
        <AppFooter />
      </div>
    </>
  );
};

export default AppLayout;
