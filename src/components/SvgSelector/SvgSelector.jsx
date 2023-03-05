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
