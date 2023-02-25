import './AppHeadSection.scss'
const AppHeadSection = ({ title, img, desc }) => {
    return (
        <div className="app-head-section">
            <div className="app-head-section__title">{title}</div>
            <img className="app-head-section__delimiter" src={img} alt="" />
            <div className="app-head-section__subtitle">{desc}</div>
        </div>
    )
}

export default AppHeadSection;