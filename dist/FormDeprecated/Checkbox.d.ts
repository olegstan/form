export default class Checkbox extends React.Component<any, any, any> {
    static defaultProps: {
        value: number;
        name: string;
        toggleCallback: () => void;
    };
    constructor(props: any);
    state: {
        value: any;
    };
    inputRef: React.RefObject<any>;
    handleClick: (e: any) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import React from "react";
//# sourceMappingURL=Checkbox.d.ts.map