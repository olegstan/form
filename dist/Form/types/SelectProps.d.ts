import InputProps from "./InputProps";
type SelectProps = Omit<InputProps, "onChange"> & {
    options: {
        id: any;
        name: string;
    }[];
    addButton?: any;
    onChange?: (date: object | null | undefined) => void;
};
export default SelectProps;
//# sourceMappingURL=SelectProps.d.ts.map