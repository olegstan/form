import React from "react";

export default interface InputProps {
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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