import InputProps from "./InputProps";
export default interface MultiSelectProps extends InputProps {
    options: {
        id: any;
        name: string;
    }[];
    values: [];
    onChangeAll?: (bool: boolean) => void;
}
