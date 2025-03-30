export default GroupSelect;
declare class GroupSelect extends BaseInput {
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        hasError: boolean;
    };
    wrapperRef: React.RefObject<any>;
    renderSelected(): any;
    handleShowSelect(select: any): void;
    getArrow(): any;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=GroupSelect.d.ts.map