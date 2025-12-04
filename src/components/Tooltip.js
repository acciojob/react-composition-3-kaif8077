import React, { useState } from "react";
import "./../styles/App.css"; // make sure path is correct

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
