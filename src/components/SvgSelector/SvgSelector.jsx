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
