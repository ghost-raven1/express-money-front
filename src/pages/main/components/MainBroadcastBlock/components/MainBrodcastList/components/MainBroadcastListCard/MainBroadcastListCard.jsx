import "./MainBroadcastListCard.scss";
import mainBroadcastActionIcon from 'src/assets/main/Broadcast/icons/action.svg';
import mainBroadcastLocationIcon from 'src/assets/main/Broadcast/icons/location.svg';
const MainBroadcastListCard = ({ transaction }) => {
  return (
    <div className="broadcast-list-card">
      <div className="broadcast-list-card__name">{transaction.name}</div>
      <div className="broadcast-list-card__action">
        <img className="broadcast-list-card__action-icon" src={mainBroadcastActionIcon} alt="" />
        <div className="broadcast-list-card__action-text">
          {transaction.action}
        </div>
      </div>
      <div className="broadcast-list-card-bottom">
        <div className="broadcast-list-card-bottom__time">
          {transaction.time}
        </div>
        <div className="broadcast-list-card-bottom__location">
            <img className="broadcast-list-card-bottom__location-icon" src={mainBroadcastLocationIcon} alt="" />
            <div className="broadcast-list-card-bottom__location-text">
                {transaction.location}
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainBroadcastListCard;
