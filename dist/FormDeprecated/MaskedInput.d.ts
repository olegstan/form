export default class MaskedInput extends BaseInput {
    static defaultProps: {
        onKeyPress: () => void;
        onChange: () => void;
        disabled: boolean;
        value: string;
        placeholder: string;
        mask: string;
        icon: string;
        className: string;
        wrapperClassName: string;
        error: string;
    };
    constructor(props: any);
    state: {
        error: null;
        focused: boolean;
        hasError: boolean;
    };
    wrapperRef: React.RefObject<any>;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "./BaseInput";
import React from "react";
//# sourceMappingURL=MaskedInput.d.ts.map