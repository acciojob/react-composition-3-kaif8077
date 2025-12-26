import React, { useState } from "react";
import "../styles/App.css";

function Tooltip(props) {
  const { text, children } = props;
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: function () {
      setShow(true);
    },
    onMouseLeave: function () {
      setShow(false);
    },
    children: [
      children.props.children,
      show && React.createElement(
        "div",
        { className: "tooltip-text", key: "tooltip" },
        text
      )
    ]
  });
}

export default Tooltip;
