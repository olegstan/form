import InputProps from "./InputProps";
export default interface NumberInputProps extends InputProps<HTMLInputElement> {
    max?: boolean | number | string;
    min?: boolean | number | string;
    decimals?: boolean | number;
    innerError?: object;
    setInnerError?: (error: object | null) => void;
}
//# sourceMappingURL=NumberInputProps.d.ts.map