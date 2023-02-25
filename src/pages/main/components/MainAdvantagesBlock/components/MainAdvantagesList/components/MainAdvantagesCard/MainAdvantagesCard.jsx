import './MainAdvantagesCard.scss';
const MainAdvantagesCard = ({item}) => {
    return (
        <div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
        </div>
    )
}

export default MainAdvantagesCard;