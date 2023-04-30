export const AxiosTimeout = 25000
export const APIUrlPrefix = 'api/v1'

export const AppAlertsTimeouts = {
    success: 2000,
    error: 10000,
    info: 2000
}

export const APIYMaps = {
    enterprise: false,
    preload: false,
    lang: 'ru_RU',
    mode: 'debug'
}

export const RouterPath = {
    main: '/',
    howToRepay: '/how-to-repay',
    howToGet: '/how-to-get',
    loyaltyProgram: '/loyalty-program',
    aboutCompany: '/about-company',
    faqPage: '/faq-page',
    techPage: '/tech-page',
    application: '/application',
    profile: '/profile',
    auth: '/auth',
    registration: '/registration',
    // districtId: "districts/:id"
}

export const links = [
    {name: 'Как получить', url: RouterPath.howToGet, destination: 'inner'},
    {name: 'Как погасить', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
    {name: 'Программа лояльности', url: RouterPath.loyaltyProgram, destination: 'inner'},
    {name: 'О компании', url: 'https://platform.expressmoney.com/loans/', destination: 'out'},
    {name: 'F.A.Q', url: RouterPath.faqPage, destination: 'inner'}
];

export const routes = [
    { path: RouterPath.auth, mode: "auth" },
    { path: RouterPath.registration, mode: 'registration'},
    { path: RouterPath.main, mode: "main" },
    { path: RouterPath.howToRepay, mode: 'howToRepay'},
    { path: RouterPath.howToGet, mode: 'howToGet'},
    { path: RouterPath.loyaltyProgram, mode: 'loyaltyProgram'},
    { path: RouterPath.aboutCompany, mode: 'aboutCompany'},
    { path: RouterPath.faqPage, mode: 'faqPage'},
    { path: RouterPath.techPage, mode: 'techPage'},
    { path: RouterPath.application, mode: 'application'}, // Заявка
    { path: RouterPath.profile, mode: 'profile'}, // Профиль
    { path: "*", mode: "error" },
];