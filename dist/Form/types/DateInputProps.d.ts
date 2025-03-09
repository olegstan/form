import InputProps from "./InputProps";
export default interface DateInputProps extends InputProps {
    defaultDate?: string;
    innerError: object;
    setInnerError: (error: object) => void;
}
