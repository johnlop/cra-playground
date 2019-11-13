import React, { useState, useContext } from "react";

export const AccordionContext = React.createContext(null);

const Accordion = ({ children }) => {
  let seq = 0;
  const [openedTab, setOpenedTab] = useState(seq);

  const getId = () => {
    return seq++;
  };

  const showContent = id => {
    return id === openedTab;
  };

  const clickHeader = id => {
    setOpenedTab(id);
  };

  return (
    <AccordionContext.Provider value={{ clickHeader, showContent, getId }}>
      {children}
    </AccordionContext.Provider>
  );
};

const AccordionTab = ({ id, children }) => {
  const { getId } = useContext(AccordionContext);

  const tabId = id || getId();

  return (
    <div>{children.map(child => React.cloneElement(child, { tabId }))}</div>
  );
};

const AccordionHeader = ({ tabId, children }) => {
  const { clickHeader } = useContext(AccordionContext);

  const handleClick = () => {
    clickHeader(tabId);
  };

  return (
    <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </h2>
  );
};

const AccordionContent = ({ tabId, children }) => {
  const { showContent } = useContext(AccordionContext);

  return <div>{showContent(tabId) && children}</div>;
};

Accordion.Tab = AccordionTab;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
