export default SearchMultiple;
declare class SearchMultiple extends BaseInput {
    constructor(props: any);
    state: {
        options: never[];
        selectedOption: null;
        error: null;
        select: boolean;
        focused: boolean;
        hovered: boolean;
        hasError: boolean;
        search: any;
    };
    wrapperRef: React.RefObject<any>;
    onSearch(search: any): void;
    handleShowSelect(bool: any): void;
    handleChange(newValue: any, actionMeta: any): void;
    handleCreate(newOption: any): void;
    getComponent(resItems: any, customStyles: any): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=SearchMultiple.d.ts.map