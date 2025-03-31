import React from "react";

export default interface InputProps<T = HTMLInputElement> {
    focused?: boolean;
    setFocused?: (focus: boolean) => void;
    onKeyDown?: (event: React.KeyboardEvent<T>) => void;
    onChange?: React.Dispatch<React.SetStateAction<string>>;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    type?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: string | number | null | undefined;
    autoComplete?: string;
    error?: string[];
    required?: boolean;
}