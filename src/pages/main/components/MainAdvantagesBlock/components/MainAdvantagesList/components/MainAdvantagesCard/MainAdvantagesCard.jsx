import './MainAdvantagesCard.scss';
const MainAdvantagesCard = ({item}) => {
    return (
        <div className="advantages-card">
            <div className="advantages-card__title">
                <img src={item.img} alt="" />
                <div>{item.title}</div>
            </div>
            <div className="advantages-card__desc">{item.desc}</div>
        </div>
    )
}

export default MainAdvantagesCard;