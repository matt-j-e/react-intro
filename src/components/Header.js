import React from "react";
import PropTypes from "prop-types";

const Header = ({ name }) => {
    return (
        <header>
            <h1>React intro</h1>
            <h2>by: {name}</h2>
        </header>
    )
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Header;