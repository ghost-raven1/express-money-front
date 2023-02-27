import "./AppButton.scss";
const AppButton = ({ onClick, mode, children, disabled }) => {
  function buttonModesStyles() {
    if (mode.includes("black")) return "button button_black";
    if (mode.includes("blue")) return "button button_blue";
  }
  return (
    <button
      className={buttonModesStyles()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AppButton;
