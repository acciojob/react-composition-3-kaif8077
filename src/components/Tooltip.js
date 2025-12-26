import React, { useState } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;
  