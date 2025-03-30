export default GroupMultipleSelect;
declare class GroupMultipleSelect extends BaseInput {
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        hasError: boolean;
    };
    wrapperRef: React.RefObject<any>;
    renderSelected(): any;
    handleShowSelect(select: any): void;
    renderSelectAll(): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=GroupMultipleSelect.d.ts.map