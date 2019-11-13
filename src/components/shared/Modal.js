import React from "react";
import { createPortal } from "react-dom";

const style = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  margin: "20px",
  padding: "30px"
};

const Modal = ({ children, container }) => {
  const target = container || document.getElementById("modal");

  return createPortal(<div style={style}>{children}</div>, target);
};

export default Modal;
