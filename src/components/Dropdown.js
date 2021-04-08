import React, {useState} from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedValue, setSelectedValue ] = useState(null);
    const getSelectedOption = options.find(option => option.id === selectedValue); // returns an object
    const getDropdownTitle = !getSelectedOption ? title : `${title} - ${getSelectedOption.label}`;
    return (
        <div>
        <button onClick={() => setIsOpen(!isOpen)}>{getDropdownTitle}</button>
        <ul>
            {  
                isOpen && options.map((option, i) => <li key={option.id} onClick={() => setSelectedValue(option.id)} >{option.label}</li>)
            }
        </ul>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}

export default Dropdown;