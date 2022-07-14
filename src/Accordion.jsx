import React, { useState } from "react";


const Accordion = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="questionContainer" >
        <p>{title}</p>
        <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Accordion;
