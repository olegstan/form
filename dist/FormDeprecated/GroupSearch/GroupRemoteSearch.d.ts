export default GroupRemoteSearch;
declare class GroupRemoteSearch extends BaseSearch {
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        focused: boolean;
        hasError: boolean;
        search: any;
    };
    wrapperRef: React.RefObject<any>;
    handleShowSelect(bool: any): void;
    onSearch(search: any): void;
    onKeyPress(e: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseSearch from "../BaseSearch";
import React from "react";
//# sourceMappingURL=GroupRemoteSearch.d.ts.map