export default RemoteSearch;
declare class RemoteSearch extends BaseSearch {
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        focused: boolean;
        hasError: boolean;
        search: any;
    };
    wrapperRef: React.RefObject<any>;
    handleArrows(): void;
    handleShowSelect(bool: any): void;
    onSearch(search: any): void;
    onKeyPress(e: any): void;
    stopHandleArrows(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseSearch from "../BaseSearch";
import React from "react";
//# sourceMappingURL=RemoteSearch.d.ts.map