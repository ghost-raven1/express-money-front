import React from "react";
// import { modalKeys } from "../utils/utils";
import MainPage from "../pages/main/MainPage.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";
import HowToRepayPage from "../pages/howToRepay/HowToRepayPage.jsx";
import HowToGet from "../pages/howToGet/HowToGet.jsx";
import LoyaltyProgram from "../pages/loyaltyProgram/LoyaltyProgram.jsx";
import AboutCompany from "../pages/aboutCompany/AboutCompany.jsx";
import FaqPage from "../pages/faq/FaqPage.jsx";

export function checkRoute(mode) {
    const modes = {
        main: <MainPage />,
        howToRepay: <HowToRepayPage />,
        howToGet: <HowToGet />,
        loyaltyProgram: <LoyaltyProgram />,
        aboutCompany: <AboutCompany />,
        faqPage: <FaqPage />,
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
