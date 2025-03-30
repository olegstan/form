export default class NumberInput extends BaseInput {
    /**
     *
     */
    static defaultProps: {
        onKeyPress: () => void;
        onChange: () => void;
        disabled: boolean;
        value: string;
        placeholder: string;
        icon: string;
        className: string;
        wrapperClassName: string;
        error: string;
        style: {};
    };
    constructor(props: any);
    state: {
        error: null;
        focused: boolean;
        hasError: boolean;
        selectionStart: number;
        selectionEnd: number;
    };
    wrapperRef: React.RefObject<any>;
    inputRef: React.RefObject<any>;
    componentDidUpdate(prevProps: any, prevState: any): void;
    handleChange(e: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "./BaseInput";
import React from "react";
//# sourceMappingURL=NumberInput.d.ts.map