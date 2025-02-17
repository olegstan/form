import React from "react";

export default interface InputProps {
    focused: boolean;
    setFocused?: (focus: boolean) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (data: object|string|number) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    type?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: string;
    autoComplete?: string;
    error?: string|object;
}