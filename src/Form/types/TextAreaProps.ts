import React from "react";

export default interface TextAreaProps {
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (text: object) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: string;
    autoComplete?: string;
    error?: string|object;
    rows?: number;
    autoResize?: boolean;
    disableResize?: boolean;
}