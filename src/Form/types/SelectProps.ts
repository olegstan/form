import InputProps from "./InputProps";

export default interface SelectProps extends InputProps {
    options: { id: any; name: string }[];
    addButton?: any
}