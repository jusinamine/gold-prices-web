import React, { useState } from "react";
import "./select.css";
import { arrowDown } from "./icons";
function Select({ options = [], value = null, onSelect = () => {} }) {
  const [show, setShow] = useState(false);

  return (
    <div className="select">
      <div className="select-top" onClick={() => setShow(!show)}>
        <div className="select-text">{value}</div>
        <div className="select-icon">{arrowDown}</div>
      </div>
      {show && (
        <div className="select-options">
          <div className="options">
            {options.map((option, index) => (
              <div
                onClick={() => {
                  onSelect(option);
                  setShow(false);
                }}
                className="option"
                key={"select-option" + index}
              >
                <div>{option.flag}</div>
                <div className="option-label">{option.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
