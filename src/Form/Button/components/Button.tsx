import React from 'react';
import {StyledButton} from './../styles';
import BaseButton from "./BaseButton";
import {BaseButtonCommonProps, ButtonElementProps} from "../../types/button.types";

// Используем пересечение типов вместо extends
export type ButtonProps = BaseButtonCommonProps & Omit<ButtonElementProps, 'children'>;

const Button: React.FC<ButtonProps> = (props) => {
    return <BaseButton Component={StyledButton} {...props} />;
};

export default Button;