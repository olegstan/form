export default class Input extends BaseInput {
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
        type: string;
        style: {};
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
//# sourceMappingURL=Input.d.ts.map