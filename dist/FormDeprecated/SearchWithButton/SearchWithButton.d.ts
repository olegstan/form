export default SearchWithButton;
declare class SearchWithButton extends BaseInput {
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
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=SearchWithButton.d.ts.map