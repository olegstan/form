export default class TextArea extends BaseInput {
    /**
     * @type {{multi: boolean}}
     */
    static defaultProps: {
        multi: boolean;
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
//# sourceMappingURL=TextArea.d.ts.map