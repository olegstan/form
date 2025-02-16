import React from 'react';
import {StyledButton} from './../styles';
import BaseButton from "./BaseButton";

const Button = (props) => {
    return (
        <BaseButton Component={StyledButton} {...props} />
    );
};

export default Button;