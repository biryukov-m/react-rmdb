import React from "react";
// Styles 
import { Wrapper } from "./Button.styles";
import PropTypes from 'prop-types';

const Button = ({ text, callback, size, position }) => (
    <Wrapper size={size} position={position} type='button' onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    size: PropTypes.string,
    position: PropTypes.string,
};

export default Button;