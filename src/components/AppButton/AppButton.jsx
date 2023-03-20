import "./AppButton.scss";
const AppButton = ({ onClick, mode, children, disabled, className }) => {
  function buttonModesStyles() {
    if (mode?.includes("black")) return `button button_black ${className}`;
    if (mode?.includes("blue")) return `button button_blue ${className}`;
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
