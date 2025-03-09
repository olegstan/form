import React from 'react';
// @ts-ignore
import {StyledButton} from './../styles';
import BaseButton from "./BaseButton";

const Button = (props: any) => {
    return (
        <BaseButton Component={StyledButton} {...props} />
    );
};

export default Button;