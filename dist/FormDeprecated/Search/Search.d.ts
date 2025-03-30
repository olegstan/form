export default Search;
declare class Search extends BaseSearch {
    static defaultProps: {
        showClearIcon: boolean;
        selectStyle: {};
    };
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        focused: boolean;
        hovered: boolean;
        hasError: boolean;
        handleArrow: boolean;
        search: any;
        selected: null;
    };
    wrapperRef: React.RefObject<any>;
    handleClickOutside(e: any): void;
    onSearch(search: any): void;
    handleArrows(): void;
    stopHandleArrows(): void;
    handleShowSelect(bool: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseSearch from "../BaseSearch";
import React from "react";
//# sourceMappingURL=Search.d.ts.map