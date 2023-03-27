import React from "react";
// import { modalKeys } from "../utils/utils";
import MainPage from "../pages/main/MainPage.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";
import HowToRepayPage from "../pages/howToRepay/HowToRepayPage.jsx";
import HowToGet from "../pages/howToGet/HowToGet.jsx";
import LoyaltyProgram from "../pages/loyaltyProgram/LoyaltyProgram.jsx";
import AboutCompany from "../pages/aboutCompany/AboutCompany.jsx";
import FaqPage from "../pages/faq/FaqPage.jsx";
import TechPage from "../pages/techPage/TechPage.jsx";
import ApplicationPage from "../pages/application/ApplicationPage.jsx";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import AuthPage from "../pages/authPage/AuthPage.jsx";

export function checkRoute(mode) {
    const modes = {
        main: <MainPage />,
        howToRepay: <HowToRepayPage />,
        howToGet: <HowToGet />,
        loyaltyProgram: <LoyaltyProgram />,
        aboutCompany: <AboutCompany />,
        faqPage: <FaqPage />,
        error: <ErrorPage />,
        techPage: <TechPage />,
        application: <ApplicationPage />,
        profile: <ProfilePage />,
        auth: <AuthPage />
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
