export default class Date extends BaseInput {
    static defaultProps: {
        onKeyPress: () => void;
        onChangeDateInner: () => void;
        disabled: boolean;
        value: string;
        placeholder: string;
        mask: string;
        icon: string;
        className: string;
        wrapperClassName: string;
        error: string;
        inputMask: string;
    };
    constructor(props: any);
    state: {
        error: null;
        focused: boolean;
        hasError: boolean;
        Input: null;
        componentsLoaded: boolean;
        date: any;
    };
    wrapperRef: React.RefObject<any>;
    inputRef: React.RefObject<any>;
    flatpickrInstance: any;
    formatDate(date: any): string;
    handleDateChange: (date: any) => void;
    handleInputChange: (e: any) => void;
    getOptions(): {
        dateFormat: string;
        allowInput: boolean;
        disableMobile: string;
    };
    render(): import("react/jsx-runtime").JSX.Element | null;
}
import BaseInput from "./BaseInput";
import React from "react";
//# sourceMappingURL=Date.d.ts.map