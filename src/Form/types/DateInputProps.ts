import InputProps from "./InputProps";
import React from "react";

type DateInputProps = Omit<InputProps, "onChange" | "value"> & {
    defaultDate?: string;
    innerError?: object;
    setInnerError?: (error: object) => void;
    value: Date | null;
    onChange?: React.Dispatch<React.SetStateAction<Date | null>>;
};

export default DateInputProps;