import InputProps from "./InputProps";
import React from "react";

export default interface TextAreaProps extends InputProps<HTMLTextAreaElement> {
    rows?: number;
    autoResize?: boolean;
    disableResize?: boolean;
}