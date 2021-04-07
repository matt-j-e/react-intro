import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options }) => {
    const isOpen = false;
    return (
        <div>
        <button>{title}</button>
        <ul>
            {  
                // isOpen ? options.map((option, i) => <li key={i}>{option}</li>) : ''
                isOpen && options.map((option, i) => <li key={i}>{option}</li>)
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