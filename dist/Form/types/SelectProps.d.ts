import InputProps from "./InputProps";
export interface Option<T, D> {
    id: T;
    name: D;
}
type SelectProps = Omit<InputProps, "onChange"> & {
    options: Option<any, any>[];
    addButton?: any;
    onChange?: (item: Option<any, any> | object | null | undefined) => void;
};
export default SelectProps;
//# sourceMappingURL=SelectProps.d.ts.map