import InputProps from "./InputProps";
import DateInputProps from "./DateInputProps";

type SelectProps = Omit<InputProps, "onChange"> & {
    options: { id: any; name: any }[];
    addButton?: any
    onChange?: (date: object | null | undefined) => void;
};

export default SelectProps;
