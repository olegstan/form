import React from "react";

export default interface InputProps<T = HTMLInputElement> {
    focused?: boolean;
    setFocused?: (focus: boolean) => void;
    onKeyDown?: (event: React.KeyboardEvent<T>) => void;
    onChange?: (data: string) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    type?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: number | string | undefined;
    autoComplete?: string;
    error?: string[];
}