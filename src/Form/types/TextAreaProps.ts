import InputProps from "types/InputProps";

export default interface TextAreaProps extends InputProps {
    rows?: number;
    autoResize?: boolean;
    disableResize?: boolean;
}