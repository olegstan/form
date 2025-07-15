import InputProps from "./InputProps";

export default interface NumberInputProps extends InputProps<HTMLInputElement> {
    max?: boolean|number;
    min?: boolean|number;
    decimals?: boolean|number;
    innerError?: object;
    setInnerError?: (error: object|null) => void;
}