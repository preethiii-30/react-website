import React from "react";
import { useEffect, useState } from "react";
import "./Dropdown.css";

const Icon = () => { 
  return (
    <i className="fa-solid fa-caret-down" style={{"color": "#BBBFC7"}}></i>
  );
};

const Dropdown = ({ placeHolder,options }) => {
    const [showMenu, setShowMenu] = useState (false) ;
    const [selectedValue, setSelectedValue] = useState (null);
    useEffect (() => {
      const handler = () => setShowMenu (false) ;
      window.addEventListener ("click", handler);
      return () => {
        window.removeEventListener ("click", handler);
      };
    });
    const handleInputClick = (e) => { 
      e.stopPropagation ();
      setShowMenu (! showMenu) ;
    };
    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label;
        }
      return placeHolder;
    };

    const onItemClick = (option) => {
        setSelectedValue (option);
    };
    
    // eslint-disable-next-line no-unused-vars
    const isSelected = (option) => {
      if (selectedValue) {
        return false;
      }
      return selectedValue.value === option.value;
    }

  return (
    <div className="dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {(showMenu&&
      <div className="dropdown-menu">
            {options.map((option)=>
            (
                // eslint-disable-next-line no-template-curly-in-string
                <div onClick={() => onItemClick (option)} className={'dropdown-item ${isSelected(option) && "selected"}'} key={option.value}>
                 {option.label}
                </div>
            ))}
        
      </div>
      )}
    </div>
  );
};

export default Dropdown;