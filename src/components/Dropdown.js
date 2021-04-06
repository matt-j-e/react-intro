import React from "react";

const Dropdown = (props) => {
    const isOpen = false;
    return (
        <div>
        <button>{props.title}</button>
        <ul>
            {  
                // isOpen ? props.options.map((option, i) => <li key={i}>{option}</li>) : ''
                isOpen && props.options.map((option, i) => <li key={i}>{option}</li>)
            }
        </ul>
        </div>
    )
}

export default Dropdown;