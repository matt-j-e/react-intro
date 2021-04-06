import React from "react";

const Header = (props) => {
    return (
        <header>
            <h1>React intro</h1>
            <h2>by: {props.name}</h2>
        </header>
    )
}

export default Header;