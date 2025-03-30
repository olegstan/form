export default RelationGroupSelect;
declare class RelationGroupSelect extends BaseInput {
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        hasError: boolean;
    };
    wrapperRef: React.RefObject<any>;
    renderSelected(): any;
    handleShowSelect(select: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=RelationGroupSelect.d.ts.map