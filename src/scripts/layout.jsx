import React from "react";
// import { modalKeys } from "../utils/utils";
import MainPage from "../pages/main/MainPage.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";

export function checkRoute(mode) {
    const modes = {
        main: <MainPage />,
        error: <ErrorPage />,
    };
    return modes[mode];
}

// export function modalRender(options, closeModal, currentModalKey) {
//     const modals = {
//         [modalKeys.contactModal]: (
//             <ContactModal options={options} closeModal={closeModal} />
//         ),
//     };
//     return modals[currentModalKey];
// }
