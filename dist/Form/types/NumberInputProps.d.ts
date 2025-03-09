import InputProps from "./InputProps";
export default interface NumberInputProps extends InputProps {
    max?: boolean | number;
    min?: boolean | number;
    decimals?: boolean | number;
}
