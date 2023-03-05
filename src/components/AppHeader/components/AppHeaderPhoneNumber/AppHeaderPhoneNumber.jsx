import './AppHeaderPhoneNumber.scss';
const AppHeaderPhoneNumber = () => {
  return (
    <div className="header-phone">
      <a href="tel:+78007009115" className="header-phone__number">8 800 700 91 15</a>
      <div className="header-phone__desc">Звонок по РФ бесплатный</div>
    </div>
  );
};

export default AppHeaderPhoneNumber;
