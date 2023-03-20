import './AppHeadSection.scss'
const AppHeadSection = ({ title, img, desc, titleSize, sectionWidth }) => {
    function titleStyles () {
        if (!titleSize) return 'app-head-section__title'
        if (titleSize === '24') return 'app-head-section__title app-head-section__title-24'
    }
    function sectionStyles () {
        if (!sectionWidth) return 'app-head-section'
        if (sectionWidth === '900') return 'app-head-section app-head-section-900'
    }
    return (
        <div className={sectionStyles()}>
            <div className={titleStyles()}>{title}</div>
            <img className="app-head-section__delimiter" src={img} alt="" />
            <div className="app-head-section__subtitle">{desc}</div>
        </div>
    )
}

export default AppHeadSection;