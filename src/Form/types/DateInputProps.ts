import InputProps from "./InputProps";

type DateInputProps = Omit<InputProps, "onChange"> & {
    defaultDate?: string;
    innerError: object;
    setInnerError: (error: object) => void;
    onChange?: (date: Date | null | undefined) => void;
};

export default DateInputProps;