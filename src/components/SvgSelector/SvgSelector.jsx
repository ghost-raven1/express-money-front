import React from 'react';
import PropTypes from 'prop-types'

const SvgSelector = ({ id, svgColor, className }) => {
    switch(id) {
        default:
            return
        case 'select-arrow-down':
            return (
                <svg className={ className } width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L7 7.5L13 1.5" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "breadcrumbs-arrow":
            return (
                <svg className={ className } width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.82077L6 5.82077L1 10.8208" stroke="#6F767E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "checkbox-active":
            return (
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.06055 8.97656L10.0605 11.9766L20.0605 1.97656" stroke="url(#paint0_linear_397_15839)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.0605 9.97656V16.9766C19.0605 17.507 18.8498 18.0157 18.4748 18.3908C18.0997 18.7658 17.591 18.9766 17.0605 18.9766H3.06055C2.53011 18.9766 2.02141 18.7658 1.64633 18.3908C1.27126 18.0157 1.06055 17.507 1.06055 16.9766V2.97656C1.06055 2.44613 1.27126 1.93742 1.64633 1.56235C2.02141 1.18728 2.53011 0.976563 3.06055 0.976562H14.0605" stroke="#8899B4" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_397_15839" x1="7.06055" y1="1.97656" x2="20.2247" y2="2.19755" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        case "arrow-in-round":
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7803 28.6445C22.5123 28.6445 28.7803 22.3765 28.7803 14.6445C28.7803 6.91254 22.5123 0.644531 14.7803 0.644531C7.04829 0.644531 0.780273 6.91254 0.780273 14.6445C0.780273 22.3765 7.04829 28.6445 14.7803 28.6445Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.7803 20.2444L20.3803 14.6444L14.7803 9.04443" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.18018 14.6445H20.3802" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        case "req-list-item": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.530273" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6628)"/>
                    <path d="M31.5303 19.5758V20.5878C31.5289 22.9599 30.7608 25.268 29.3405 27.1678C27.9203 29.0677 25.9239 30.4576 23.6492 31.1301C21.3744 31.8027 18.9433 31.7219 16.7182 30.8999C14.4931 30.0778 12.5934 28.5585 11.3023 26.5686C10.0113 24.5787 9.39804 22.2247 9.55412 19.8578C9.71019 17.4909 10.6272 15.2378 12.1684 13.4346C13.7096 11.6314 15.7923 10.3748 18.1061 9.852C20.4198 9.32924 22.8406 9.56841 25.0073 10.5338" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.5302 11.7878L20.5302 22.7988L17.2302 19.4988" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6628" x1="0.530273" y1="0.581543" x2="41.04" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        case "how-to-get-step-1": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.530273" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6674)"/>
                    <path d="M24.5303 29.5815V27.5815C24.5303 26.5207 24.1088 25.5033 23.3587 24.7531C22.6086 24.003 21.5911 23.5815 20.5303 23.5815H13.5303C12.4694 23.5815 11.452 24.003 10.7018 24.7531C9.9517 25.5033 9.53027 26.5207 9.53027 27.5815V29.5815" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.0303 19.5815C19.2394 19.5815 21.0303 17.7907 21.0303 15.5815C21.0303 13.3724 19.2394 11.5815 17.0303 11.5815C14.8211 11.5815 13.0303 13.3724 13.0303 15.5815C13.0303 17.7907 14.8211 19.5815 17.0303 19.5815Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.5303 19.5815L27.5303 21.5815L31.5303 17.5815" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6674" x1="0.530273" y1="0.581543" x2="41.04" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        case "how-to-get-step-2": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.530273" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6683)"/>
                    <path d="M22.7803 9.58154H13.7803C13.1835 9.58154 12.6112 9.81333 12.1893 10.2259C11.7673 10.6385 11.5303 11.1981 11.5303 11.7815V29.3815C11.5303 29.965 11.7673 30.5246 12.1893 30.9372C12.6112 31.3498 13.1835 31.5815 13.7803 31.5815H27.2803C27.877 31.5815 28.4493 31.3498 28.8713 30.9372C29.2932 30.5246 29.5303 29.965 29.5303 29.3815V16.1815L22.7803 9.58154Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.7803 9.58154V16.1815H29.5303" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.0302 21.6815H16.0302" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.0302 26.0815H16.0302" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.2802 17.2815H17.1552H16.0302" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6683" x1="0.530273" y1="0.581543" x2="41.04" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        case "how-to-get-step-3": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.530273" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6694)"/>
                    <path d="M13.8636 9.58154L10.5303 13.9815V29.3815C10.5303 29.965 10.7644 30.5246 11.1811 30.9372C11.5979 31.3498 12.1631 31.5815 12.7525 31.5815H28.3081C28.8974 31.5815 29.4627 31.3498 29.8794 30.9372C30.2961 30.5246 30.5303 29.965 30.5303 29.3815V13.9815L27.1969 9.58154H13.8636Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5303 13.9816H30.5303" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.9747 18.3816C24.9747 19.5485 24.5065 20.6677 23.673 21.4929C22.8395 22.318 21.709 22.7816 20.5303 22.7816C19.3515 22.7816 18.2211 22.318 17.3876 21.4929C16.5541 20.6677 16.0858 19.5485 16.0858 18.3816" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6694" x1="0.530273" y1="0.581543" x2="41.04" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        case "how-to-get-step-4": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.530273" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6703)"/>
                    <path d="M19.4696 12.6422H12.4696C11.9392 12.6422 11.4305 12.8529 11.0554 13.228C10.6803 13.6031 10.4696 14.1118 10.4696 14.6422V28.6422C10.4696 29.1726 10.6803 29.6814 11.0554 30.0564C11.4305 30.4315 11.9392 30.6422 12.4696 30.6422H26.4696C27 30.6422 27.5087 30.4315 27.8838 30.0564C28.2589 29.6814 28.4696 29.1726 28.4696 28.6422V21.6422" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.9696 11.1422C27.3674 10.7444 27.907 10.5209 28.4696 10.5209C29.0322 10.5209 29.5718 10.7444 29.9696 11.1422C30.3674 11.54 30.5909 12.0796 30.5909 12.6422C30.5909 13.2048 30.3674 13.7444 29.9696 14.1422L20.4696 23.6422L16.4696 24.6422L17.4696 20.6422L26.9696 11.1422Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6703" x1="0.530273" y1="0.581543" x2="41.04" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        case "how-to-get-condition": {
            return (
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.960938" y="0.581543" width="40" height="40" rx="12" fill="url(#paint0_linear_352_6712)"/>
                    <circle cx="20.9608" cy="20.5815" r="5" fill="white"/>
                    <defs>
                        <linearGradient id="paint0_linear_352_6712" x1="0.960938" y1="0.581543" x2="41.4707" y2="1.10465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0F6DFF"/>
                            <stop offset="1" stopColor="#005CEA"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
    }
}

SvgSelector.propTypes = {
    id: PropTypes.string,
    svgColor: PropTypes.string
}

SvgSelector.defaultProps = {
    id: 'logo',
    svgColor: '#6F767E'
}

export default SvgSelector
