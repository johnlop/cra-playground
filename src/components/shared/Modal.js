import React from "react";

const style = {
  border: "1px solid black",
  padding: "30px"
};

const Modal = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Modal;
