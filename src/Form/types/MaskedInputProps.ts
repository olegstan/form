import InputProps from "./InputProps";

export default interface MaskedInputProps extends InputProps<HTMLInputElement> {
    mask?: string;
}