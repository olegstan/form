import React from "react";

export default interface FileInputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, data: object) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    valueText?: string;
    error?: string|object;
}