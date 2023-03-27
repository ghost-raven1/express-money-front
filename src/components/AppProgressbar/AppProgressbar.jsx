import "./AppProgressbar.scss";
import { useEffect, useRef, useState } from "react";
const AppProgressbar = ({ value, maxValue }) => {
  const ref = useRef();
  const [fillPercent, setFillPercent] = useState(51);
  function changeRangeFill() {
    const active = ref.current;
    active.style.maxWidth = fillPercent.toString() + "%";
    if (fillPercent === 1) active.style.height = "70%";
    if (fillPercent === 2) active.style.height = "75%";
    if (fillPercent === 3) active.style.height = "85%";
    if (fillPercent === 4) active.style.height = "90%";
    if (fillPercent === 5) active.style.height = "95%";
    if (fillPercent === 6) active.style.height = "98%";
    if (fillPercent === 8) active.style.height = "99%";
    if (fillPercent === 9) active.style.height = "100%";
    if (fillPercent === 95) active.style.borderRadius = "16px 0 0 16px";
    if (fillPercent === 98) active.style.borderRadius = "16px 13px 13px 16px";
    if (fillPercent === 100) active.style.borderRadius = "16px";
  }

  function fillPercentData() {
    setFillPercent((value / maxValue) * 100);
  }

  useEffect(() => {
    fillPercentData();
    changeRangeFill();
  }, [value, fillPercent]);

  return (
    <div className="progress">
      <div className="progress__line" ref={ref} />
      <div className="progress__time">
        <div className="progress__time-text">
          0
        </div>
        <div className="progress__time-text">
          3 мин
        </div>
      </div>
    </div>
  );
};

export default AppProgressbar;
