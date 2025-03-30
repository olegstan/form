import InputProps from "./InputProps";
type DateInputProps = Omit<InputProps, "onChange"> & {
    defaultDate?: string;
    innerError: object;
    setInnerError: (error: object) => void;
    value: Date | null | undefined;
    onChange?: (date: Date | null | undefined) => void;
};
export default DateInputProps;
//# sourceMappingURL=DateInputProps.d.ts.map