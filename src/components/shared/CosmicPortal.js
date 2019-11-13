import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CosmicPortal = ({ children }) => {
  const { current: externalWindow } = useRef(
    window.open("", "", "with=600, height=400, top=200")
  );

  useEffect(() => externalWindow.close);

  return createPortal(children, externalWindow.document.body);
};

export default CosmicPortal;
